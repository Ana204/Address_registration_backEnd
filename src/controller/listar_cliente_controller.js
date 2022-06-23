const db = require("../Dados/dadoscliente")

exports.get = (req, res ) => {

    var list = db.pegarDadosCliente()
    res.send({ 'data' : list })
}