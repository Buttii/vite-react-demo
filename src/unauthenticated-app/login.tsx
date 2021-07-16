import React from "react";
import {Form, Input} from "antd";
import {http} from "@/utils/http";
import {LongButton} from "@/unauthenticated-app/index";

export type UserInfo = Record<"username" | "password", string>

export const Login = () => {

    const handleSubmit = (data: UserInfo) => {
        http("login", {data, method: 'post'}).then(async response => {
            if (response.ok) {
                console.log(await response.json());
            }
        })
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