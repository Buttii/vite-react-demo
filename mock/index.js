const Koa = require("koa")
const app = new Koa()
const unauthenticatedRouter = require("./router/unauthenticated-router")
const authenticatedRouter = require('./router/authenticated-router')
const bodyParser = require("koa-bodyparser")

app.use(bodyParser())

// 启动路由
app.use(unauthenticatedRouter.routes())
app.use(unauthenticatedRouter.allowedMethods())



app.use(authenticatedRouter.routes())
app.use(authenticatedRouter.allowedMethods())

app.listen(5000, () => {
    console.log("server on: http://127.0.0.1:5000")
})