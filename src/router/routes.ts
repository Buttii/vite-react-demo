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
        path: "/documentation",
        title: "文档",
        icon: React.createElement(UserOutlined)
    }, {
        path: "/guide",
        title: "引导页"
    }, {
        path: "/permissions",
        title: "权限测试页面",
        children: [
            {
                path: "page",
                title: "页面权限"
            }, {
                path: "directive",
                title: "指令权限"
            }, {
                path: "role",
                title: "角色权限"
            }
        ]
    }, {
        path: "icon",
        title: "图标"
    }, {
        path: "components",
        title: "组件",
        children: [
            {
                path: "tinymce",
                title: "服务本编辑器"
            }, {
                path: "markdown",
                title: "Markdown"
            }, {
                path: "json-editor",
                title: "JSON编辑器"
            }, {
                path: "split-pane",
                title: "SplitPane"
            }, {
                path: "avatar-upload",
                title: "头像上传"
            }, {
                path: "drop-zone",
                title: "DropZone"
            }, {
                path: "sticky",
                title: "Sticky"
            }, {
                path: "count-to",
                title: "Count To"
            }, {
                path: "mixin",
                title: "小组件"
            },  {
                path: "drag",
                title: "拖拽相关"
            }
        ]
    }, {
        path: "/charts",
        title: "图表",
        children: [
            {
                path: "keyboard",
                title: "键盘图表"
            }, {
                path: "line",
                title: "折线图"
            }, {
                path: "mixin-chart",
                title: "混合图表"
            }
        ]
    }, {
        path: "/routes",
        title: "路由嵌套"
    }, {
        path: "/table",
        title: "Table"
    }, {
        path: "/example",
        title: "综合实例"
    }, {
        path: "/tab",
        title: "Tab"
    }, {
        path: "/error-page",
        title: "错误页面"
    }, {
        path: "/error-log",
        title: "错误日志"
    }, {
        path: "/excel",
        title: "Excel"
    }, {
        path: "zip",
        title: "Zip"
    }, {
        path: "/pdf",
        title: "PDF"
    }, {
        path: "theme",
        title: "换肤"
    }, {
        path: "clipboard",
        title: "Clipboard"
    }, {
        path: "international",
        title: "国际化"
    }, {
        path: "/",
        title: "外链"
    }
]