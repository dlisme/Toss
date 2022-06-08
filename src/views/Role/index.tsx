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
import RoleGroupPermission from "./RoleGroupPermission";
import SubRole from "./SubRole";
import RoleTable from "./RoleTable";
import { Drawer, Tabs } from "antd";
import FormItem from "./FormItem";
import styles from "@/common.module.scss";

const { TabPane } = Tabs;

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
        {selected?.key === 4 ? (
          <RoleTable list={roleList} />
        ) : (
          <>
            <Tabs type="card" className={styles.cardTab}>
              <TabPane key="0" tab="子部门">
                <SubRole selected={selected} handleCreate={handleCreate} />
              </TabPane>

              <TabPane key="1" tab="权限">
                <RoleGroupPermission />
              </TabPane>
            </Tabs>
          </>
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
