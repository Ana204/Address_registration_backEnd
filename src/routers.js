const express = require("express")
const router = express.Router()

const forms_controller = require("./controller/formscontroller")

router.post("/", forms_controller.post)


module.exports = router