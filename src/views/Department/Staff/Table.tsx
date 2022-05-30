/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:23:42
 */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { apiUrl } from "@/config/request";
import { ColumnsType } from "antd/lib/table";
import { Button, Popconfirm, Table } from "antd";
import BaseUtils from "@/utils/methods";
import { NativeButtonProps } from "antd/lib/button/button";

interface StaffListProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

function StaffTable({
  selected,
  handleEdit,
}: {
  selected: any;
  handleEdit: () => void;
}) {
  const [staff, setStaff] = useState<StaffListProps[]>([]);
  const [scrollY, setScrollY] = useState("");

  useEffect(() => {
    handleStaff();
    setScrollY(BaseUtils.getTableScroll());
    // 当param改变的时候获取
  }, [selected]);

  const handleStaff = async () => {
    await Axios.post(`${apiUrl}/staff/staffList`, { id: selected })
      .then(res => {
        if (res.data.code === 200) {
          setStaff(res.data.data);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 删除
  const handleDelete = () => {
    console.log("删除");
  };

  const columns: ColumnsType<StaffListProps> = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      width: 80,
      align: "center",
      fixed: "left",
    },
    {
      title: "电话",
      dataIndex: "phone",
      key: "phone",
      width: 80,
      align: "center",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
      width: 80,
      align: "center",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      width: 80,
      align: "center",
      fixed: "right",
      render: value => {
        return value === "1" ? "主管" : "员工";
      },
    },
    {
      align: "center",
      dataIndex: "action",
      key: "action",
      fixed: "right",
      title: "操作",
      width: 100,
      render: (value, { id }) => {
        return (
          <>
            <Button
              type="text"
              size="small"
              className="ant-btn-link"
              data-id={id}
              onClick={handleEdit}
              style={{
                color: "#40a9ff",
              }}>
              编辑
            </Button>

            <Popconfirm
              title="确定删除该员工?"
              onConfirm={handleDelete}
              okText="确定"
              okButtonProps={{ "data-id": id } as NativeButtonProps}
              cancelText="取消">
              <Button
                type="text"
                size="small"
                className="ant-btn-link"
                style={{
                  color: "#f5222d",
                }}>
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <Table
      dataSource={staff}
      columns={columns}
      rowKey={row => row.id}
      pagination={{
        showQuickJumper: true,
        position: ["bottomCenter"],
        showTotal: totalCount => {
          return `共 ${totalCount} 条`;
        },
        pageSizeOptions: ["10", "15", "20"],
        showSizeChanger: true,
      }}
      size={"middle"}
      scroll={{
        x: 800,
        y: scrollY,
      }}
    />
  );
}

export default StaffTable;
