import qs from "qs"
import {useAuth} from "@/context/auth";
import * as auth from "@/auth-provider"

interface Config extends RequestInit {
    data?: object,
    token?: string
}

const apiUrl = import.meta.env.VITE_APP_API_URL

export const http = (endPoint: string, {data, token, ...customConfig}: Config = {}) => {
    const config = {
        method: "GET",
        headers: {
            authorization: token ? `Bearer${token}` : "",
            "Content-Type": "application/json"
        },
        ...customConfig
    }

    if (config.method.toUpperCase() === 'GET') {
        endPoint += qs.stringify(data)
    }else {
        config.body = JSON.stringify(data)
    }

    return window.fetch(`${apiUrl}/${endPoint}`, config).then(async response => {
        if(response.status === 401) {
            await auth.logout()
            window.location.reload()
            return Promise.reject({message: "请重新登录"})
        }
        const data = await response.json()
        if(response.ok) {
            return data
        }else {
            return Promise.reject(data)
        }
    })
}

export const useHttp = (...[endPoint, config]: Parameters<typeof http>) => {
    const {user} = useAuth()
    return http(endPoint, {...config, token: user?.token })
}