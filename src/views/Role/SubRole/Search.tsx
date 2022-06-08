/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 17:55:31
 */
import React from "react";
import SearchForm from "@/components/SearchForm";
import { Form, Input } from "antd";

function Search() {
  const handleValueChange = () => {
    console.log("mm");
  };

  return (
    <SearchForm onFinish={handleValueChange}>
      <Form.Item name="name">
        <Input placeholder={"名称"} maxLength={11} />
      </Form.Item>
      <Form.Item name="creator">
        <Input placeholder={"创建者"} maxLength={11} />
      </Form.Item>
    </SearchForm>
  );
}

export default Search;
