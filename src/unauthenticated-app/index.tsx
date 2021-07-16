// 未认证页面入口文件
import React, {useState} from "react";
import {Login} from "@/unauthenticated-app/login";
import {Register} from "@/unauthenticated-app/register";
import { Button } from "antd";

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)

    return <div>
        {isRegister ? <Register/> : <Login/>}
        <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "已注册去登录" : "未注册去注册"}
        </Button>
    </div>
}