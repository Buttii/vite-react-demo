import React from 'react'
import './App.css'

import {UnauthenticatedApp} from "@/unauthenticated-app";
import {AuthenticatedApp} from "@/authenticated-app";
import {useAuth} from "@/context/auth";

function App() {
    const {user} = useAuth()

    return <div className="App">
        {
            <div>{user?.token}</div>
        }
        {user?.token ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
}

export default App
