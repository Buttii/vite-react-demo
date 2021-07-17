import React, {ReactNode, useContext, useState} from "react";
import * as auth from "@/auth-provider"
import {User} from "@/auth-provider";
import {UserInfo} from "@/unauthenticated-app/login";
import {useMount} from "@/utils";
import {http} from "@/utils/http";


const AuthContext = React.createContext<{
    user: User | null,
    login: (data:UserInfo) => Promise<void>,
    register: (data:UserInfo) => Promise<void>,
    logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = "AuthContext"


const bootstrapUser = async () => {
    let user = null
    const token = auth.getToken()
    if(token) {
        const data = await http("me", {token})
        user = data.user
    }
    return user
}

export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState<User | null>(null)

    const login = (data: {username: string, password:string}) => auth.login(data).then(setUser)

    const register = (data: UserInfo) => auth.register(data).then(setUser)

    const logout = () => auth.logout().then(() => setUser(null))

    useMount(() => {

        bootstrapUser().then(setUser)

    })





    return <AuthContext.Provider value={{user, login, register, logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error("useAuth必须在Provider中使用！")
    return context
}