chefe()
function chefe(){
    let matriz = [] //guarda os pontos dos times nas rodadas
    let vetor = [] //guarda os nomes, cidade e média de pontos dos times
    cadastra(matriz, vetor)
    mediaPontos(matriz, vetor)
    maiorPontos(matriz, vetor)

}//4 times e 3 rodadas
function cadastra(mat, vet){
    for(let i=0;i<4;i++){ //para cada time
        let time = new Object()
        time.nome = prompt(`Informe o nome`)
        time.cidade = prompt(`Informe a cidade`)
        time.media = 0
        vet.push(time)

        //cria o vetor na matriz
        mat[i] = [] // cada linha da matriz é um vetor
        
        for(let j=0;j<3;j++){ 
            mat[i][j] = Number(prompt(`Informe os pontos do time ${time.nome} e a qtde de pontos na rodada ${j+1}`))
        }
    }
}
function mediaPontos(mat, vet){ // mat representa a matriz na função chefe()
    for(let i=0;i<4;i++){ 
        for(let j=0;j<3;j++){
           // soma no vetor na posição i, i faz referenci a linha ouseja o cadastro
           vet[i].media = vet[i].media + mat[i][j]     
        }
        
        vet[i].media = vet[i].media / 3
    }
    
    console.log(vet)
}

function maiorPontos(mat, vet){ // mat representa a matriz na função chefe()
    for(let j=0;j<3;j++){
        let maiorpt = mat[0][j]
        let maiornome = vet[0].nome
        for(let i=0;i<4;i++){ 
           if( mat[i][j] > maiorpt)
           maiorpt = mat[i][j]
           maiornome = vet[i].nome
           
        }
        console.log( `O time ${maiornome} fez ${maiorpt} na rodada ${j+1}`)
    }
}