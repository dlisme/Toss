/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:14:56
 */
import React from "react";
import { Tree, Input } from "antd";
import styles from "./index.module.scss";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

function SearchTree({
  list,
  handleSelect,
  name,
}: {
  list: any[];
  handleSelect: (selectedKeys: any, e: any) => void;
  name: string;
}) {
  const changeList = (data: any) => {
    return data.map((item: any) => {
      return {
        title: item.name,
        pid: item.pid,
        key: item.id,
        children: item.list?.length ? changeList(item.list) : [],
      };
    });
  };

  return (
    <Card
      className={styles.rightTree}
      title={name}
      extra={
        <PlusOutlined
          style={{
            fontSize: "16px",
            color: "#ccc",
          }}
        />
      }>
      <Search style={{ marginBottom: 8 }} placeholder="搜索" />
      {list.length > 0 ? (
        <Tree
          defaultSelectedKeys={[1]}
          defaultExpandedKeys={[1]}
          blockNode
          height={document.body.clientHeight - 231}
          treeData={changeList(list)}
          onSelect={(selectedKeys, e) => {
            handleSelect(selectedKeys, e);
          }}
        />
      ) : (
        <></>
      )}
    </Card>
  );
}

export default SearchTree;
