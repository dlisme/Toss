import React, { MouseEvent } from "react";
import styles from "./index.module.scss";
import {
  PlusSquareOutlined,
  RotateRightOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, Tooltip, Upload } from "antd";

interface NavProps {
  title: string;
  handleExport?: (value?: Object) => void;
  handleCreate?: (value: Object) => void;
  props?: any;
  confirm?: (e?: MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: MouseEvent<HTMLElement>) => void;
}

function NavHeader({
  title,
  handleCreate,
  handleExport,
  props,
  confirm,
  onCancel,
}: NavProps) {
  return (
    <div className={styles.add}>
      <div
        style={{
          display: "flex",
        }}>
        <span className={styles.tip}>{title}</span>
        <span
          style={{
            marginLeft: 10,
            fontSize: 14,
          }}>
          <EditOutlined />
          <DeleteOutlined
            style={{
              marginLeft: 5,
              color: "#ccc",
            }}
          />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        {props && (
          <Popconfirm
            placement="topLeft"
            title={"是否下载模板？"}
            onConfirm={confirm}
            onCancel={onCancel}
            okText={
              <Upload {...props} withCredentials={true}>
                直接导入
              </Upload>
            }
            cancelText="下载模板">
            <Tooltip title="批量导入数据">
              {/* <Upload {...props} withCredentials={true}> */}
              <Button
                type="text"
                style={{
                  marginRight: 10,
                }}
                icon={
                  <UploadOutlined
                    style={{
                      fontSize: "22px",
                      color: "#ccc",
                    }}
                  />
                }></Button>
              {/* </Upload> */}
            </Tooltip>
          </Popconfirm>
        )}

        {handleExport ? (
          <Tooltip title="导出数据">
            <RotateRightOutlined
              style={{ fontSize: "22px", color: "#ccc", marginRight: "15px" }}
              onClick={handleExport}
            />
          </Tooltip>
        ) : undefined}

        {handleCreate ? (
          <Tooltip title="新增">
            <PlusSquareOutlined
              style={{
                fontSize: "22px",
                color: "#40A9FF",
              }}
              onClick={handleCreate}
            />
          </Tooltip>
        ) : undefined}
      </div>
    </div>
  );
}

export default NavHeader;
