/*
该路由为无须认证的，由于为mock数据，故未抽离control层
 */

const Router = require("koa-router")
const {readFile, writeFile} = require("../utils/file")
const {requestSuccess, requestError} = require("../utils/response")
const {encrypt} = require("../utils/auth")

const router = new Router()

// 获取get请求参数ctx.request.query
// 获取post请求参数ctx.request.body

router.get("/", (ctx) => {
    ctx.body = "hello react-admin!"
})

router.post("/login", ctx => {
    const {username, password} = ctx.request.body
    const {users} = readFile("../db/user.json") || {users: []}
    const user = users.find(item => item.username === username && item.password === password)
    if (!user) requestError(ctx, "账号或密码错误")
    else {
        const res = {
            username: user.username,
            userId: user.userId,
            token: encrypt({username, password})
        }
        requestSuccess(ctx, res)
    }
})

// 方案：先判断是否注册，如已注册判断密码正确，未注册则写入/mock/db/user.json
router.post("/register", ctx => {
    const {username, password} = ctx.request.body
    const {users} = readFile("../db/user.json") || {users: []}
    const flag = users.some(user => user.username === username)
    if (flag) {
        const user = users.find(item => item.username === username && item.password === password)
        if (!user) requestError(ctx, "账号已存在！")
        else {
            const res = {
                username: user.username,
                userId: user.userId,
                token: encrypt({username, password})
            }
            requestSuccess(ctx, res)
        }
    } else {
        const lastUserId = users[users.length - 1]?.userId || 0
        users.push({username, password, userId: lastUserId + 1})
        writeFile("../db/user.json", {users})
        const res = {
            username,
            userId: lastUserId + 1,
            token: encrypt({username, password})
        }
        requestSuccess(ctx, res)
    }
})


module.exports = router