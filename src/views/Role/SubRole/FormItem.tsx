/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 17:55:31
 */
import { Button, Form, Input, Select } from "antd";
import React from "react";

const { Option, OptGroup } = Select;

function FormItem() {
  const handleSubmit = () => {
    console.log("提交成功");
  };

  // 成员中的角色仅仅拿该成员所在组或者部门下面的角色组(权限组)中的角色
  // 如果是部门设置角色组(权限组)，则可以选择该组织下的所有角色组

  // 拿userId去请求资源和权限的接口。并且把这个接口缓存到本地，前端做比对，页面切换有则显示，无则不显示
  // 资源表现为菜单，权限表现为功能权限
  const roleList = [
    {
      id: 1,
      name: "前端组",
      list: [
        {
          id: 1,
          name: "主管",
        },
        {
          id: 2,
          name: "员工",
        },
      ],
    },
    {
      id: 2,
      name: "后端组",
      list: [],
    },
  ];

  const handleChange = () => {
    console.log("000");
  };
  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="姓名" name="name">
        <Input placeholder="姓名" />
      </Form.Item>

      <Form.Item label="电话号码" name="phone">
        <Input placeholder="电话号码" />
      </Form.Item>

      <Form.Item label="邮箱" name="email">
        <Input placeholder="邮箱" />
      </Form.Item>

      <Form.Item label="角色" name="roleId">
        <Select
          onChange={handleChange}
          mode="tags"
          placeholder="角色"
          allowClear>
          {roleList.map(item => {
            return (
              <OptGroup key={item.id} label={item.name}>
                {item.list.map(item => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </OptGroup>
            );
          })}
        </Select>
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
