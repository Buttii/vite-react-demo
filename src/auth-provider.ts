import {http} from "@/utils/http";

import {UserInfo} from "@/unauthenticated-app/login"

export interface User {
    username: string,
    userId: number,
    token?: string
}

const localStorageKey = "__auth_provider_token__"

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const setToken = ({data: user}: { data: User }) => {

    window.localStorage.setItem(localStorageKey, user?.token || "")
    return user
}


export const login = (data: UserInfo) => {
    return http("login", {data, method: "POST"}).then(async response => {
        if (response.ok) {
            return setToken(await response.json())
        } else {
            return Promise.reject(await response.json())
        }
    })
}

export const register = (data: UserInfo) => {
    return http("register", {data, method: "POST"}).then(async response => {
        if (response.ok) {
            return setToken(await response.json())
        } else {
            return Promise.reject(await response.json())
        }
    })
}

export const logout = async () => {
    window.localStorage.removeItem(localStorageKey)
}