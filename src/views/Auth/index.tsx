import React from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
import commonStyles from "../../common.module.scss";

function App() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    axios
      .post("http://localhost:8000/user/login", {
        username: values.username,
        // eslint-disable-next-line comma-dangle
        password: values.password,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className={commonStyles.abc}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
