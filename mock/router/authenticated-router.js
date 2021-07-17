/*
该路由为需要认证的路由，即校验token
 */
const Router = require("koa-router")

const router = new Router()

const auth = require("../middleware/auth")

router.use(auth)

// 获取get请求参数ctx.request.query
// 获取post请求参数ctx.request.body





module.exports = router