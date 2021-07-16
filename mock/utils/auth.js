const jwt = require("jsonwebtoken")
const secret = "Buttii"


function encrypt(data) {
    return jwt.sign(data, secret)
}

function decrypt(token) {
    return jwt.verify(token, secret)
}


exports.encrypt = encrypt
exports.decrypt = decrypt