/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:23
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-22 11:39:53
 */
import React, { useEffect, useState } from "react";
import SearchTree from "@/components/SearchTree";
import Axios from "axios";
import { apiUrl } from "@/config/request";
import Table from "./Table";
import RoleTable from "./RoleTable";
import NavHeader from "@/components/NavHeader";
import { Drawer } from "antd";
import FormItem from "./FormItem";

function Role() {
  const [list, setList] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>();
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    handleRole();
    // 当param改变的时候获取
  }, []);

  const handleRole = async () => {
    await Axios.post(`${apiUrl}/role/roleList`)
      .then(res => {
        if (res.data.code === 200) {
          setList(res.data.data);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSelect = (_: any, e: any) => {
    setSelected(e.node);
  };

  const handleCreate = () => {
    setDrawerVisible(true);
  };

  const roleList = [
    {
      id: 0,
      title: "菜单权限",
      createAt: "2020-12-12",
      phone: "张三",
      updateAt: "2020-12-21",
    },
    {
      id: 1,
      title: "数据权限",
      createAt: "2020-12-12",
      phone: "李四",
      updateAt: "2020-12-21",
    },
    {
      id: 2,
      title: "功能权限",
      createAt: "2020-12-12",
      phone: "王武",
      updateAt: "2020-12-21",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
      }}>
      <SearchTree list={list} handleSelect={handleSelect} name="角色管理" />
      <div
        style={{
          flex: 3,
          marginLeft: 15,
          overflow: "hidden",
          background: "#fff",
        }}>
        <NavHeader title={"角色"} handleCreate={handleCreate} />

        {selected?.key === 4 ? (
          <RoleTable list={roleList} />
        ) : (
          <Table
            list={selected?.children?.map((item: any) => ({
              ...item,
              children: undefined,
            }))}
          />
        )}
      </div>

      <Drawer
        visible={drawerVisible}
        title={"菜单权限"}
        onClose={() => {
          setDrawerVisible(false);
        }}
        width={document.body.clientWidth <= 790 ? "100%" : "42%"}
        destroyOnClose
        maskClosable={false}
        bodyStyle={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}>
        <FormItem />
      </Drawer>
    </div>
  );
}

export default Role;
