/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:18
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:25:04
 */
import React, { useEffect, useState } from "react";
import SearchTree from "@/components/SearchTree";
import Axios from "axios";
import { apiUrl } from "@/config/request";
import { Tabs } from "antd";
import styles from "@/common.module.scss";
import Staff from "./Staff";
import SubDepartment from "./SubDepartment";
import Permission from "./Permission";

const { TabPane } = Tabs;

interface DepartmentListProps {
  name: string;
  pid: number;
  id: number;
  list?: any[];
}

function Department() {
  const [list, setList] = useState<DepartmentListProps[]>([]);
  const [selected, setSelected] = useState<any>();
  const [key, setKey] = useState(undefined);

  useEffect(() => {
    handleDepartment();
    // 当param改变的时候获取
  }, []);

  const handleDepartment = async () => {
    await Axios.post(`${apiUrl}/department/departmentList`)
      .then(res => {
        if (res.data.code === 200) {
          setList(res.data.data);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSelect = (title: any, e: any) => {
    setKey(title[0]);
    setSelected(e.node);
  };

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
      }}>
      <SearchTree list={list} handleSelect={handleSelect} name="部门管理" />
      <div
        style={{
          flex: 3,
          marginLeft: 15,
          overflow: "hidden",
        }}>
        {selected?.key === 5 ? (
          <Tabs type="card" className={styles.cardTab}>
            <TabPane key="1" tab="成员">
              <Staff selected={key} />
            </TabPane>
          </Tabs>
        ) : (
          <Tabs type="card" className={styles.cardTab}>
            {selected?.children && (
              <TabPane key="0" tab="子部门">
                <SubDepartment
                  list={selected.children?.map((item: any) => ({
                    ...item,
                    children: undefined,
                  }))}
                />
              </TabPane>
            )}

            <TabPane key="1" tab="成员">
              <Staff selected={key} />
            </TabPane>

            <TabPane key="2" tab="角色组">
              <Permission />
            </TabPane>
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default Department;
