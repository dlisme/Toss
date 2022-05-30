/*
 * 面包屑
 *
 * @Author: dingling
 * @Date: 2021-11-01 10:24:14
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-22 11:54:51
 */
import React from "react";
import { Breadcrumb } from "antd";
import styles from "@/layout/index.module.scss";

function TagsView() {
  return (
    <div className={styles.tagsView}>
      <Breadcrumb>
        <Breadcrumb.Item>Fitness</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>APP管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>轮播图</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default TagsView;
