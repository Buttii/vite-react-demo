import React from "react";
import {http} from "@/utils/http";
import {Button, Form, Input} from "antd";
import {UserInfo} from "@/unauthenticated-app/login";


export const Register = () => {

    const handleSubmit = (data: UserInfo) => {
        http("register", {data, method: 'post'}).then(async response => {
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
            <Button htmlType={"submit"} type={"primary"}>注册</Button>
        </Form.Item>
    </Form>
}