const express = require("express")
const app = express()
const router = require("./routers")

app.use(express.json())
app.use(router)

app.listen(8081, function(){
    console.log("Server running")
})