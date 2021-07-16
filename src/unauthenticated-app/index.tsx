// 未认证页面入口文件
import React, {useState} from "react";
import {Login} from "@/unauthenticated-app/login";
import {Register} from "@/unauthenticated-app/register";
import {Button, Card} from "antd";
import styled from "@emotion/styled";

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)

    return <Container>
        <ShadowCard>
            {isRegister ? <Register/> : <Login/>}
            <LongButton type={"link"} onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "已注册去登录" : "未注册去注册"}
            </LongButton>
        </ShadowCard>
    </Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ShadowCard = styled(Card)`
  width: 400px;
  padding: 32px 40px;
  border-radius: 3px;


  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
`

export const LongButton = styled(Button)`
  width: 100%
`