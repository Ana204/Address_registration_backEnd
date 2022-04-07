const db = require("../Dados/dadoscliente")

exports.post = (req , res) =>{

    var dados_cliente = req.body
   
    var dados ={
            Id:dados_cliente.Id,
            Nome:dados_cliente.Nome,
            Email:dados_cliente.Email,
            Telefone:dados_cliente.Telefone,
            Cep:dados_cliente.Cep
        }

    
    db.salvarDadosCliente(dados)
    console.log(db.pegarDadosCliente())
}



