const db = require("../Dados/dadoscliente")

exports.post = (req , res) =>{

    var dados_cliente = req.body

    if(dados_cliente.Nome == '' || dados_cliente.Nome == undefined || dados_cliente.Nome == null){
       return res.send("Preencha o campo nome")
    } 
    else if(dados_cliente.Email == '' || dados_cliente.Email == undefined || dados_cliente.Email == null){
        return res.send("Prencha o campo email")
    }
    else if(dados_cliente.Telefone == '' || dados_cliente.Telefone == undefined || dados_cliente == null){
        return res.send("Preencha o campo telefone")
    }
    else if (dados_cliente.Cep == '' || dados_cliente.Cep == undefined || dados_cliente == null) {
        return res.send("Preencha o campo cep")
    } 
    else {
        
        var dados ={
            Id:dados_cliente.Id,
            Nome:dados_cliente.Nome,
            Email:dados_cliente.Email,
            Telefone:dados_cliente.Telefone,
            Cep:dados_cliente.Cep
        }

    
    db.salvarDadosCliente(dados)
    console.log(db.pegarDadosCliente())

    res.send("Usuario cadastrado com sucesso !!")
    }



}





