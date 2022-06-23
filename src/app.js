const express = require("express")
const app = express()
const router = require("./routers")
const cors = require("cors")

app.use(cors())

app.use(express.json())
app.use(router)

app.listen(8081, function(){
    console.log("Server running")
})