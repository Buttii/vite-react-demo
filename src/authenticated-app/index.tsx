import React, {useState} from "react";
import {Layout} from 'antd';
import {Nav} from "./Nav"
import {Top} from "./Top"

import styled from "@emotion/styled"


export default function AuthenticatedApp() {

    const [collapsed, setCollapsed] = useState(false)



    return (
        <Container>
            {/*这里可以配置写*/}
            <Nav collapsed={collapsed}/>
            <Container className="site-layout">
                <Top collapsed={collapsed} setCollapsed={setCollapsed}/>
                <Layout.Content>
                    Content
                </Layout.Content>
            </Container>
        </Container>
    )
}

const Container = styled(Layout)`
  height: 100vh;

  .ant-layout-content {
    background-color: #fff;
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
  }
`