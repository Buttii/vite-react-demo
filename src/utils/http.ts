import qs from "qs"

interface Config extends RequestInit {
    data?: object,
    token?: string
}

const apiUrl = import.meta.env.VITE_APP_API_URL

export const http = (endPoint: string, {data, token, ...customConfig}: Config) => {
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

    return fetch(`${apiUrl}/${endPoint}`, config)
}