/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:14
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-19 00:04:14
 */
import React from "react";
import Axios from "axios";
import { Form, Input, Button, message } from "antd";
import styles from "./index.module.scss";
import { apiUrl } from "@/config/request";
import { useHistory } from "react-router-dom";

/**
 * @author dingling
 * @interface AuthProps
 */
interface AuthProps {
  username: string;
  password: string;
}

function Auth() {
  let history = useHistory();
  const handleSubmit = ({ username, password }: AuthProps) => {
    Axios.post(`${apiUrl}/user/login`, {
      username,
      password,
    })
      .then(res => {
        if (res.data.code === 200) {
          localStorage.setItem("token", res.data.token);
          history.push("/");
        } else {
          message.error(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.leftBg}></div>
        <div className={styles.rightBg}>
          <span className={styles.loginInText}>登录</span>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off">
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入账号!" }]}>
              <Input style={{ width: 346, height: 40 }} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}>
              <Input.Password style={{ width: 346, height: 40 }} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "#6667c6",
                  border: "none",
                  width: 346,
                  height: 40,
                }}>
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
