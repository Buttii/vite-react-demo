const Router = require("koa-router")

const fs = require("fs")
const path = require("path")


const router = new Router()

// 获取get请求参数ctx.request.query
// 获取post请求参数ctx.request.body

router.get('/', (ctx) => {


    ctx.body = "hello react-admin!"
})

// 方案：为先读取db.json文件的users，依次判断是否注册->密码是否正确
router.post("/login", ctx => {

    const data = fs.readFileSync(path.resolve(__dirname, "./db.json"), {encoding: "utf-8"})

    ctx.body = {}
})

// 方案：先判断是否注册，如已注册判断密码正确，未注册则写入db.json
router.post("/register", ctx => {
    fs.writeFileSync(path.resolve(__dirname, "./db.json"), JSON.stringify({username: "1", userId: "22"}), (err) => {
        if (err) throw err
    })
})


module.exports = router