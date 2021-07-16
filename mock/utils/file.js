const fs = require("fs")

const path = require("path")


function writeFile(filename, sourceData) {
    fs.writeFileSync(path.resolve(__dirname, filename), JSON.stringify(sourceData))
}

function readFile(filename) {
    const data = fs.readFileSync(path.resolve(__dirname, filename), {encoding: "utf-8"})
    return data ? JSON.parse(data) : data
}


exports.writeFile = writeFile

exports.readFile = readFile