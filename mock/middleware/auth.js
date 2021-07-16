const {tokenError} = require("../utils/response")
const {decrypt} = require("../utils/auth")
const {readFile} = require("../utils/file")

function auth(ctx, next) {
    const authorization = ctx.request.header.authorization
    if (!authorization) {
        tokenError(ctx)
    } else {
        const {users} = readFile("../db/user.json") || {users: []}
        const token = authorization.substring(6)
        const {username, password} = decrypt(token)
        const user = users.find(item => item.username === username && item.password === password)
        if (!user) tokenError(ctx)
        else next()
    }

}

module.exports = auth