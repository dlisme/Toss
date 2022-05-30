/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:24:16
 */
import React from "react";
import NavHeader from "@/components/NavHeader";
import Search from "./Search";
import Table from "./Table";

function Permission() {
  const handleCreate = () => {
    console.log("jjk");
  };
  return (
    <>
      <Search />
      <NavHeader title={"前端组"} handleCreate={handleCreate} />
      <Table />
    </>
  );
}

export default Permission;
