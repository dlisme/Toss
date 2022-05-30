/*
 * 控制内嵌菜单可以被缩起/展开
 *
 * @Author: dingling
 * @Date: 2021-11-01 10:24:14
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-10 11:57:47
 */
import React from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

interface HamburgerProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

function Hamburger({ toggleCollapsed, collapsed }: HamburgerProps) {
  return (
    <Button
      type="text"
      style={{ color: "rgba(140,140,140,1)", fontSize: "16px", padding: 0 }}
      onClick={toggleCollapsed}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
    </Button>
  );
}

export default Hamburger;
