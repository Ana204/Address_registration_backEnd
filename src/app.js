const express = require("express")
const app = express()

const router = require("./routers")
const server = require("./server")

app.use(server)
app.use(router)

