/*
 * @Author: dingling
 * @Date: 2021-11-01 10:24:14
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-17 17:15:33
 */
import React, { ReactElement, useEffect } from "react";
import Hamburger from "@/components/Hamburger";
import styles from "../../index.module.scss";
import { SmileOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useCollapsedContext } from "@/layout/CollapsedContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { apiUrl } from "@/config/request";

function Navbar(): ReactElement {
  let history = useHistory();

  const { collapsed, toggleCollapsed } = useCollapsedContext();

  const loginOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const content = (
    <div
      onClick={loginOut}
      style={{
        cursor: "pointer",
      }}>
      退出登录
    </div>
  );

  useEffect(() => {
    handleUserInfo();
  });

  const handleUserInfo = () => {
    Axios.get(`${apiUrl}/user/userinfo`)
      .then(res => {
        if (res.data.code === 200) {
          console.log("1112");
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.navbar}>
      <Hamburger toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      <Popover content={content} title="设置" className={styles.userSet}>
        <div
          className={styles.rightMenu}
          onClick={() => {
            console.log("名称");
          }}>
          <SmileOutlined style={{ fontSize: "27px" }} />
          <span>管理员</span>
        </div>
      </Popover>
    </div>
  );
}

export default Navbar;
