import React from "react";
import {UserOutlined} from "@ant-design/icons";

export interface Route {
    path: string
    title: string
    icon?: React.ReactElement
    children?: Route[]
}

// 没有icon即代表不渲染至Menu上

export const routes: Route[] = [
    {
        path: "/dashboard",
        title: "首页",
        icon: React.createElement(UserOutlined)
    }, {
        path: "/table",
        title: "表格",
        icon: React.createElement(UserOutlined),
        children: [
            {
                path: "1",
                title: "表格1",
                icon: React.createElement(UserOutlined)
            }, {
                path: "2",
                title: "表格2",
                icon: React.createElement(UserOutlined)
            }
        ]
    }
]