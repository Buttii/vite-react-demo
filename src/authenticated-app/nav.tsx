import React from "react";
import {Menu, Layout} from "antd";
import {routes, Route} from "@/router/routes";
import styled from "@emotion/styled";

export const Nav = ({collapsed}: { collapsed: boolean }) => {
    const getMenuItem = (routes: Route[]) => {
        return routes.map(({path, title, icon, children}) => {
            if (!children) return <Menu.Item key={path} icon={icon}>{title}</Menu.Item>
            return <Menu.SubMenu key={path} icon={icon} title={title}>
                {getMenuItem(children)}
            </Menu.SubMenu>
        })
    }
    return (
        <Left trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/dashboard"]}>
                {getMenuItem(routes)}
            </Menu>
        </Left>
    )
}


const Left = styled(Layout.Sider)`
  overflow-x: hidden;
  overflow-y: auto;
`