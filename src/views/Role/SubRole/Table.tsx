/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:23:42
 */
import React, { useState, useEffect } from "react";
import { ColumnsType } from "antd/lib/table";
import { Button, Popconfirm, Table } from "antd";
import BaseUtils from "@/utils/methods";
import { NativeButtonProps } from "antd/lib/button/button";

interface StaffListProps {
  id: number;
  title: string;
  creator: string;
  createAt: string;
  phone: string;
  updateAt: string;
}

function RoleTable({ list }: { list: any }) {
  const [scrollY, setScrollY] = useState("");

  useEffect(() => {
    setScrollY(BaseUtils.getTableScroll());
    // 当param改变的时候获取
  }, []);

  const handleStatusChange = () => {
    console.log("id");
  };

  const handleDelete = () => {
    console.log("吧啦吧");
  };

  const columns: ColumnsType<StaffListProps> = [
    {
      title: "名称",
      dataIndex: "title",
      key: "title",
      width: 80,
      align: "center",
      fixed: "left",
    },
    {
      title: "创建人",
      dataIndex: "creator",
      key: "creator",
      width: 80,
      align: "center",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
      key: "createAt",
      width: 80,
      align: "center",
    },
    {
      title: "更新时间",
      dataIndex: "updateAt",
      key: "updateAt",
      width: 80,
      align: "center",
      fixed: "right",
    },
    {
      align: "center",
      dataIndex: "action",
      key: "action",
      fixed: "right",
      title: "操作2",
      width: 100,
      render: (value, { id }) => {
        return (
          <>
            <Button
              type="text"
              size="small"
              className="ant-btn-link"
              data-id={id}
              onClick={handleStatusChange}
              style={{
                color: "#40a9ff",
              }}>
              编辑
            </Button>

            <Popconfirm
              title="确定删除该子部门?"
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
      dataSource={list}
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

export default RoleTable;
