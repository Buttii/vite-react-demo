import React, {useMemo} from "react";
import {Menu, Layout} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {routes, Route} from "@/router/routes";

export const Nav = ({collapsed}: {collapsed:boolean}) => {

    const getMenuItem = (routes: Route[]) => {
        return routes.map(({path, title, icon, children}) => {
            if(!icon) return null
            if(!children) return <Menu.Item key={path} icon={icon}>{title}</Menu.Item>
            return <Menu.SubMenu key={path} icon={icon} title={title}>
                {getMenuItem(children)}
            </Menu.SubMenu>
        })
    }
    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/dashboard"]}>
                {getMenuItem(routes)}
            </Menu>
        </Layout.Sider>
    )
}