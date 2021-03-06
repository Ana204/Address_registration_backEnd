const db = require("../Dados/dadoscliente")

exports.post = (req , res) =>{

    var dados_cliente = req.body

    if(dados_cliente.Nome == '' || dados_cliente.Nome == undefined || dados_cliente.Nome == null){
       return res.send({result: "Preencha o campo nome"})
    } 
    else if(dados_cliente.Email == '' || dados_cliente.Email == undefined || dados_cliente.Email == null){
        return res.send({result:"Prencha o campo email"})
    }
    else if(dados_cliente.Telefone == '' || dados_cliente.Telefone == undefined || dados_cliente.Telefone == null){
        return res.send({result:"Preencha o campo telefone"})
    }
    else if (dados_cliente.Cep == '' || dados_cliente.Cep == undefined || dados_cliente.Cep == null) {
        return res.send({result:"Preencha o campo cep"})
    }  
    else if (dados_cliente.Logradouro == '' || dados_cliente.Logradouro == undefined || dados_cliente.Logradouro == null) {
        return res.send({result:"Preencha o campo rua"})
     }
    else if (dados_cliente.Bairro == '' || dados_cliente.Bairro == undefined || dados_cliente.Bairro == null) {
        return res.send({result:"Preencha o campo bairro"})
    } 
    else if (dados_cliente.Cidade == '' || dados_cliente.Cidade == undefined || dados_cliente.Cidade == null) {
        return res.send({result:"Preencha o campo cidade"})
    } 
    else if (dados_cliente.Uf == '' || dados_cliente.Uf == undefined || dados_cliente.Uf == null) {
        return res.send({result:"Preencha o campo uf"})
    } 
    else if (dados_cliente.CasaNumero == '' || dados_cliente.CasaNumero == undefined || dados_cliente.CasaNumero == null) {
        return res.send({result:"Preencha o campo numero da casa"})
    } 
    else {
        
        var dados ={
            Id:dados_cliente.Id,
            Nome:dados_cliente.Nome,
            Email:dados_cliente.Email,
            Telefone:dados_cliente.Telefone,
            Cep:dados_cliente.Cep,
            
            Logradouro:dados_cliente.Logradouro,
            Complemento:dados_cliente.Complemento,
            Bairro:dados_cliente.Bairro,
            Cidade:dados_cliente.Cidade,
            Uf:dados_cliente.Uf,
            CasaNumero:dados_cliente.CasaNumero
        }

    
    db.salvarDadosCliente(dados)
    console.log(db.pegarDadosCliente())

    //console.log(dados_cliente)

    res.send({result: "Usuario cadastrado com sucesso !!"})
    }



}





