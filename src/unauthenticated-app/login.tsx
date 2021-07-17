import React from "react";
import {Form, Input} from "antd";
import {LongButton} from "@/unauthenticated-app/index";
import {useAuth} from "@/context/auth";

export interface UserInfo {
    username: string;
    password: string;
}

export const Login = () => {
    const {login} = useAuth()

    const handleSubmit = (data: UserInfo) => {
        login(data)
    }

    return <Form onFinish={handleSubmit}>
        <Form.Item name={"username"} rules={[{required: true, message: '请输入用户名'}]}>
            <Input placeholder={"请输入用户名"}/>
        </Form.Item>
        <Form.Item name={"password"} rules={[{required: true, message: '请输入密码'}]}>
            <Input type={"password"} placeholder={"请输入密码"}/>
        </Form.Item>
        <Form.Item>
            <LongButton htmlType={"submit"} type={"primary"}>登录</LongButton>
        </Form.Item>
    </Form>
}