consomeAPI = () =>{
    //recupera o cep do usuario
    let titulo = (document.getElementById('titulo').value)
    //vamos criar uma requisição === requsição HTTP
    let requisicao = new XMLHttpRequest()
    let url = `http://www.omdbapi.com/?t=${titulo}&apikey=ceb1544b`
    //vamos abrir a requisição e utilizar o método GET (consulta de dados)
    //temos que passar o endereço da API ou seja do recurso que queremos usar
    //PASSO 1
    requisicao.open('GET', url, true) //json: formato de dados
    //vamos obter o resultado -- envia solicitação
    //PASSO 2
    requisicao.send()
    //PASSO 3
    requisicao.onload = function(){
        let resposta = JSON.parse(requisicao.responseText)
        //vamos jogar no labels
        document.getElementById(`Title`).innerHTML = resposta.Title
        document.getElementById(`Year`).innerHTML = resposta.Year
        document.getElementById(`Rated`).innerHTML = resposta.Rated
        document.getElementById(`Released`).innerHTML = resposta.Released
        
        
    }
    
}