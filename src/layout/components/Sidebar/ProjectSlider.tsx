/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:27
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-22 11:28:05
 */
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Axios from "axios";
import { apiUrl } from "@/config/request";
import { NavLink } from "react-router-dom";
// import * as Icons from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface menuProps {
  id: string;
  url: string;
  name: string;
  parentId: number;
  projectNo: number;
  list: {
    id: string;
    url: string;
    name: string;
    parentId: number;
    projectNo: number;
  }[];
}

function App({ projectNo }: { projectNo?: number }) {
  const [permissionList, SetPermissionList] = useState<menuProps[]>([]);

  useEffect(() => {
    handleProjectNo();
    // 当param改变的时候获取
  }, [projectNo]);

  const handleProjectNo = () => {
    Axios.post(`${apiUrl}/project/projectPermissions`, {
      projectNo,
    })
      .then(res => {
        if (res.data.code === 200) {
          SetPermissionList(res.data.data);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        style={{
          height: "100vh",
          width: "200px",
          zIndex: 999,
        }}>
        <Menu theme="light" mode="inline">
          {permissionList.flatMap(item => {
            // const Icon = (Icons as any)[item.icon];
            return item.list?.length ? (
              <SubMenu
                // icon={Icon && <Icon />}
                key={item.id}
                title={item.name}>
                {item.list.map(menuItem => {
                  return (
                    <Menu.Item key={menuItem.id}>
                      <NavLink to={`${menuItem.url}`}>
                        <span> {menuItem.name}</span>
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={item.id}>
                <NavLink to={`${item.url}`}>
                  <span>{item.name}</span>
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </Layout>
  );
}

export default App;
