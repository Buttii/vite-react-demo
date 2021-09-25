import React from "react";
import {
  UserOutlined,
  LockOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
export interface Route {
  path: string;
  title: string;
  icon?: JSX.Element;
  children?: Route[];
  component?: string
}

// 没有icon即代表不渲染至Menu上

export const routes: Route[] = [
  {
    path: "/dashboard",
    title: "首页",
    icon: React.createElement(UserOutlined),
    component: "@/screen/dashboard"
  },
  {
    path: "/permissions",
    title: "权限测试页面",
    icon: React.createElement(LockOutlined),
    children: [
      {
        path: "page",
        title: "页面权限",
      },
      {
        path: "role",
        title: "角色权限",
      },
    ],
  },
  {
    path: "/charts",
    title: "图表",
    icon: React.createElement(AreaChartOutlined),
    children: [
      {
        path: "keyboard",
        title: "键盘图表",
      },
      {
        path: "line",
        title: "折线图",
      },
      {
        path: "mixin-charts",
        title: "混合图表",
      },
    ],
  }
];
