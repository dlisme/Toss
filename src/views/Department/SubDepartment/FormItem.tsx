/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 17:55:31
 */
import { Button, Form, Input } from "antd";
import React from "react";

function FormItem() {
  const handleSubmit = () => {
    console.log("提交成功");
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="部门名称" name="name">
        <Input placeholder="请输入名称" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            marginRight: 15,
            width: 95,
          }}>
          提交
        </Button>
        <Button
          htmlType="reset"
          style={{
            width: 95,
          }}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormItem;
