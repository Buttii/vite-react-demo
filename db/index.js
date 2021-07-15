const Koa = require("koa")
const app = new Koa()
const router = require("./router")
const bodyParser = require("koa-bodyparser")

app.use(bodyParser())

// 启动路由
app.use(router.routes())

app.use(router.allowedMethods())


app.listen(5000, () => {
    console.log("server on: http://127.0.0.1:5000")
})