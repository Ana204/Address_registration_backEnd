let dados_clientes = []

module.exports = {
    salvarDadosCliente(dados){
        dados_clientes.push(dados)
    }, 
    pegarDadosCliente(){
        return dados_clientes
    }
}
