import React from "react";
import { Button, Card, Checkbox, Divider, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";

const CheckboxGroup = Checkbox.Group;

function FormItem() {
  const [form] = useForm();

  const permissionList = {
    msg: "success",
    menuList: [
      {
        menuId: 1,
        parentId: 0,
        parentName: null,
        name: "线索管理",
        url: "admin/clue",
        perms: "admin:clue:list",
        type: 0,
        icon: "NodeIndexOutlined",
        orderNum: null,
        open: null,
        list: [
          {
            menuId: 2,
            parentId: 1,
            parentName: null,
            name: "新线索",
            url: "admin/clue/newClue",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 3,
            parentId: 1,
            parentName: null,
            name: "回流线索",
            url: "admin/clue/backflowClue",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 4,
            parentId: 1,
            parentName: null,
            name: "公海地",
            url: "admin/clue/recycleClue",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
        ],
      },
      {
        menuId: 5,
        parentId: 0,
        parentName: null,
        name: "工单管理",
        url: "admin/workOrder",
        perms: null,
        type: 0,
        icon: "BulbOutlined",
        orderNum: null,
        open: null,
        list: [
          {
            menuId: 6,
            parentId: 5,
            parentName: null,
            name: "评估管理",
            url: "admin/workOrder/assess",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 7,
            parentId: 5,
            parentName: null,
            name: "派单管理",
            url: "admin/workOrder/dispatch",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
        ],
      },
      {
        menuId: 8,
        parentId: 0,
        parentName: null,
        name: "拍场管理",
        url: "admin/auctionConfig",
        perms: null,
        type: 0,
        icon: "SettingOutlined",
        orderNum: null,
        open: null,
        list: [
          {
            menuId: 9,
            parentId: 8,
            parentName: null,
            name: "暗拍配置",
            url: "admin/auctionConfig/shotConfig",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
        ],
      },
      {
        menuId: 10,
        parentId: 0,
        parentName: null,
        name: "区域管理",
        url: "admin/area",
        perms: null,
        type: 0,
        icon: "GlobalOutlined",
        orderNum: null,
        open: null,
        list: [
          {
            menuId: 11,
            parentId: 10,
            parentName: null,
            name: "地区管理",
            url: "admin/area/region",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 12,
            parentId: 10,
            parentName: null,
            name: "战区管理",
            url: "admin/area/zone",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 13,
            parentId: 10,
            parentName: null,
            name: "区域管理",
            url: "admin/area/district",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
        ],
      },
      {
        menuId: 14,
        parentId: 0,
        parentName: null,
        name: "系统管理",
        url: "admin/system",
        perms: "",
        type: 0,
        icon: "DesktopOutlined",
        orderNum: null,
        open: null,
        list: [
          {
            menuId: 15,
            parentId: 14,
            parentName: null,
            name: "用户管理",
            url: "admin/system/user",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 16,
            parentId: 14,
            parentName: null,
            name: "权限管理",
            url: "admin/system/permissions",
            perms: "admin:role:info,admin:role:update",
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
        ],
      },
      {
        menuId: 17,
        parentId: 0,
        parentName: null,
        name: "排班管理",
        url: "admin/roster",
        perms: null,
        type: 0,
        icon: "ClockCircleOutlined",
        orderNum: null,
        open: null,
        list: [
          {
            menuId: 18,
            parentId: 17,
            parentName: null,
            name: "排班设置",
            url: "admin/roster/setting",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
          {
            menuId: 19,
            parentId: 17,
            parentName: null,
            name: "排班统计",
            url: "admin/roster/record",
            perms: null,
            type: 1,
            icon: null,
            orderNum: null,
            open: null,
            list: [],
          },
        ],
      },
    ],
    code: "200",
    permissions: ["admin:role:update", "admin:clue:list", "admin:role:info"],
  };

  return (
    <Form
      layout="vertical"
      style={{
        margin: "30px 45px 48px",
      }}
      form={form}>
      <Form.Item
        label="角色名称"
        name="roleName"
        style={{
          marginBottom: 15,
        }}>
        <Input placeholder="角色名称" />
      </Form.Item>

      <Form.Item required>
        {permissionList.menuList.map(({ name, menuId, list }: any) => {
          return (
            <Card
              title={
                <>
                  <Divider
                    type="vertical"
                    style={{
                      borderLeft: "2px solid #40a9ff",
                    }}
                  />
                  {name}
                </>
              }
              key={`card_${menuId}`}
              extra={
                <Checkbox
                // checked={list.length === checkedItemListDict[menuId]?.length}
                // onChange={e => permissionCheckChange(e, menuId)}
                />
              }
              style={{
                marginBottom: 15,
              }}>
              <CheckboxGroup
                options={list.map(
                  ({ name: permissionName, menuId: permissionId }: any) => {
                    return {
                      label: permissionName,
                      value: permissionId,
                    };
                  }
                )}
                // value={checkedItemListDict[menuId]}
                // onChange={e => handlePermissionChange(e, menuId)}
              />
            </Card>
          );
        })}
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            marginRight: 15,
            width: 95,
          }}>
          提交
        </Button>
        <Button
          htmlType="reset"
          style={{
            width: 95,
          }}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormItem;
