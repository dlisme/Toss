/*
 * 侧边栏
 * @Author: dingling
 * @Date: 2021-11-01 10:27:24
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-22 11:31:37
 */

import // AppstoreOutlined,
// PieChartOutlined,
// DesktopOutlined,
// ContainerOutlined,
// MailOutlined,
"@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import styles from "@/layout/index.module.scss";
import logo from "@/assets/logo.svg";
import { useCollapsedContext } from "@/layout/CollapsedContext";
// import * as Icons from "@ant-design/icons";
import Axios from "axios";
import { apiUrl } from "@/config/request";
import ProjectSlider from "./ProjectSlider";
import * as Icons from "@ant-design/icons";

// const { SubMenu } = Menu;

interface MenuInter {
  icon: string;
  projectNo: number;
  projectName: string;
  // projectAddress
  list: [
    {
      name: string;
      menuId: string;
      url: string;
    }
  ];
  menuId: string;
  url: string;
}

function Home() {
  const [navList, setMenu] = useState<MenuInter[]>([]);

  const { collapsed } = useCollapsedContext();

  const [isProjectSlider, setProjectSlider] = useState(false);
  const [projectNo, setProjectNo] = useState(undefined);

  useEffect(() => {
    handleProject();
    // 当param改变的时候获取
  }, []);

  const handleProject = () => {
    Axios.get(`${apiUrl}/project/projectList`)
      .then(res => {
        if (res.data.code === 200) {
          setMenu(res.data.data);
          console.log(navList);

          console.log("获取项目列表成功");
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleCreateProject = () => {
    Axios.post(`${apiUrl}/project/creatProject`, {
      projectName: "Fitness",
      projectAddress: "https://Fitness.com",
      projectNo: 2,
      icon: "ClockCircleOutlined",
    })
      .then(res => {
        if (res.data.code === 200) {
          console.log("新建成功");
          handleProject();
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onMouse = (value: any) => {
    setProjectNo(value);
    setProjectSlider(true);
  };

  const mouseLeave = () => {
    setProjectSlider(false);
  };

  return (
    <div className={styles.sider}>
      <div className={styles.logo} onClick={handleCreateProject}>
        <img src={logo} />
      </div>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        className={styles.scrollbarWrapper}
        style={collapsed ? { width: "80px" } : { width: "200px" }}>
        {navList.flatMap(item => {
          const Icon = (Icons as any)[item.icon];
          return (
            <Menu.Item
              icon={Icon && <Icon />}
              key={item.projectNo}
              onClick={() => {
                onMouse(item.projectNo);
              }}>
              {item.projectName}
            </Menu.Item>
          );
        })}
      </Menu>

      <div
        className={styles.projectSliderAction}
        onMouseLeave={mouseLeave}
        style={{
          left: `${collapsed ? "80px" : "200px"}`,
          position: "absolute",
          background: "#6667ab",
        }}>
        {isProjectSlider && <ProjectSlider projectNo={projectNo} />}
      </div>
    </div>
  );
}

export default Home;
