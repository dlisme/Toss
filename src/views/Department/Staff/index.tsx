/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:24:16
 */
import React, { useState } from "react";
import NavHeader from "@/components/NavHeader";
import Search from "./Search";
import Table from "./Table";
import { Drawer } from "antd";
import FormItem from "./FormItem";

function Staff({ selected }: { selected: any }) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleCreate = () => {
    console.log("jjk");
  };
  return (
    <>
      <Search />
      <NavHeader title={"前端组"} handleCreate={handleCreate} />
      <Table
        selected={selected}
        handleEdit={() => {
          setDrawerVisible(true);
        }}
      />
      <Drawer
        visible={drawerVisible}
        title={"编辑"}
        onClose={() => {
          setDrawerVisible(false);
        }}
        width={document.body.clientWidth <= 790 ? "100%" : "42%"}
        destroyOnClose
        maskClosable={false}
        bodyStyle={{
          width: "70%",
          padding: "10px 30px",
          display: "flex",
          flexDirection: "column",
        }}>
        <FormItem />
      </Drawer>
    </>
  );
}

export default Staff;
