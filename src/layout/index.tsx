/*
 * @Author: dingling
 * @Date: 2021-11-01 10:24:14
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-22 11:52:28
 */
import React, { FC, useCallback, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TagsView from "./components/TagsView";
import { Layout } from "antd";
import styles from "./index.module.scss";
import { CollapsedContextes } from "./CollapsedContext";
import { Redirect, Route, Switch } from "react-router-dom";
import route from "@/routers/index";

const { Content } = Layout;

const Home: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // 切换内嵌菜单展开/收起
  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <div className={styles.wrapper}>
      <CollapsedContextes.Provider
        value={{
          collapsed,
          toggleCollapsed,
        }}>
        <Sidebar />
        <Layout
          style={{
            maxWidth: collapsed ? "calc(100vw - 80px)" : "calc(100vw - 200px)",
            minWidth: "960px",
          }}>
          <Content>
            <div className={styles.fixedHeader}>
              <Navbar />
              <TagsView />
            </div>
            <div className={styles.appMain}>
              <Switch>
                {route.map(({ path, Component }, index) => {
                  return (
                    <Route path={path} key={index}>
                      <div className={styles.mainContent}>
                        <Component />
                      </div>
                    </Route>
                  );
                })}
                <Redirect from="/" to="/project" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </CollapsedContextes.Provider>
    </div>
  );
};

export default Home;
