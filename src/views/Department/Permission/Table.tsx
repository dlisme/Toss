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
import { Table } from "antd";
import BaseUtils from "@/utils/methods";

interface PermissionListProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

function PermissionTable() {
  const [staff, setStaff] = useState<PermissionListProps[]>([]);
  const [scrollY, setScrollY] = useState("");

  useEffect(() => {
    handleStaff();
    setScrollY(BaseUtils.getTableScroll());
    // 当param改变的时候获取
  }, []);

  const handleStaff = async () => {
    await Axios.get(`${apiUrl}/staff/staffList`)
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

  const columns: ColumnsType<PermissionListProps> = [
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

export default PermissionTable;
