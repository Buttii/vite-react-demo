/*
该路由为需要认证的路由，即校验token
 */
const Router = require("koa-router")
const {decrypt} = require("../utils/auth")
const {readFile} = require("../utils/file")
const {requestSuccess} = require("../utils/response")

const router = new Router()

const auth = require("../middleware/auth")

router.use(auth)

// 获取get请求参数ctx.request.query
// 获取post请求参数ctx.request.body


router.get('/me', ctx => {
    const token = ctx.request.header.authorization.substring(6)
    const {username} = decrypt(token)
    const {users} = readFile("../db/user.json") || {users: []}
    const user = users.find(item => item.username === username)
    const res = {
        username: user.username,
        userId: user.userId,
        token
    }
    requestSuccess(ctx, {user: res})
})
module.exports = router