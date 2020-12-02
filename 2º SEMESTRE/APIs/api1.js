
consomeAPI = () =>{
    //recupera o cep do usuario
    let cep = Number(document.getElementById('cep').value)
    //vamos criar uma requisição === requsição HTTP
    let requisicao = new XMLHttpRequest()
    //vamos abrir a requisição e utilizar o método GET (consulta de dados)
    //temos que passar o endereço da API ou seja do recurso que queremos usar
    //PASSO 1
    requisicao.open('GET', `https://viacep.com.br/ws/${cep}/json/`, true) //json: formato de dados
    //vamos obter o resultado
    //PASSO 2
    requisicao.send()
    let resposta
    //ao receber a reposta
    //PASSO 3
    requisicao.onload = () => {
        //verifiva se deu certo - se obtivemos o resultado com sucesso, fomos no servidor e volramos
        //verifica se o estado chegou
        //verifica se o staus fo atingido                       == 200 
        if ((requisicao.readyState == 4) && (requisicao.status >= 200) && (requisicao.status <= 400)) {
            //pegamos o resultado e transforma em JSON (formato de dados na forma de par chave/valor)
            resposta = JSON.parse(requisicao.responseText)
            //vamos jogar no labels
            document.getElementById(`logradouro`).innerHTML = resposta.logradouro
            document.getElementById(`bairro`).innerHTML = resposta.bairro
            document.getElementById(`localidade`).innerHTML = resposta.localidade
            document.getElementById(`UF`).innerHTML = resposta.uf
        }
        else {
            console.log(`Requisição sem resposta`)
        }
    }
    
}