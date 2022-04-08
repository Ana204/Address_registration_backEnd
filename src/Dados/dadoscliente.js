let dados_clientes = []

module.exports = {
    //func para salvar os dados no array
    salvarDadosCliente(dados){
        dados_clientes.push(dados)
    }, 
    
    //func para devolver os dados do array
    pegarDadosCliente(){
        return dados_clientes
    }
}
