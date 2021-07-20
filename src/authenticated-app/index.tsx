import React, {useState} from "react";
import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import styled from "@emotion/styled"

const {Header, Sider, Content} = Layout;

export default function AuthenticatedApp() {

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => setCollapsed(!collapsed)

    return (
        <Container>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Container className="site-layout">
                <Header className="site-layout-background">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content>
                    Content
                </Content>
            </Container>
        </Container>
    )
}

const Container = styled(Layout)`
  height: 100vh;

  .ant-layout-header {
    background-color: #fff;
    padding: 0;

    .trigger {
      padding: 0 24px;
    }
  }

  .ant-layout-content {
    background-color: #fff;
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
  }
`