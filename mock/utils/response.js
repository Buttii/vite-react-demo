function requestSuccess(ctx, data) {
    ctx.status = 200
    ctx.body = {
        message: "请求成功！",
        data
    }
}

function tokenError(ctx) {
    ctx.status = 401
    ctx.body = {
        message: "无效token"
    }
}

function requestError(ctx, message) {
    ctx.status = 403
    ctx.body = {
        message
    }
}

exports.requestSuccess = requestSuccess
exports.tokenError = tokenError
exports.requestError = requestError