import React from 'react'
import './App.css'


import {FullPageLoading} from "@/components/lib";
import {useAuth} from "@/context/auth";

const UnauthenticatedApp = React.lazy(() => import("@/unauthenticated-app"))
const AuthenticatedApp = React.lazy(() => import("@/authenticated-app"))

function App() {
    const {user} = useAuth()

    return <div className="App">
        <React.Suspense fallback={<FullPageLoading/>}>
            {user?.token ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
        </React.Suspense>
    </div>
}

export default App
