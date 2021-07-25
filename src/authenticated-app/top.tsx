import React from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Layout} from "antd";
import styled from "@emotion/styled";


export const Top = (
    {collapsed, setCollapsed}: { collapsed: boolean, setCollapsed: (value: boolean) => void }
) => {

    const toggle = () => setCollapsed(!collapsed)

    return (
        <TopContainer>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                onClick: toggle,
            })}
        </TopContainer>
    )
}

const TopContainer = styled(Layout.Header)`
  &.ant-layout-header {
    background-color: #fff;
    padding: 0 24px;
  }
`