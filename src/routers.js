const express = require("express")
const router = express.Router()

const forms_controller = require("./controller/formscontroller")
const list_cliente_controller = require("./controller/listar_cliente_controller")

router.post("/", forms_controller.post)
router.get("/list/", list_cliente_controller.get)


module.exports = router