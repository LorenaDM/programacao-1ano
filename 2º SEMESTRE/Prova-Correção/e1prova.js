chefe()
function chefe(){
    var vetor = []
    var matriz = []
    do{
        let opcao = Number(prompt(`[1] Cadastra [2] Calcula a média [3] Calcula modelo`))
        switch(opcao){
            case 1: cadastra(vetor, matriz)
                    break;
            case 2: calculaMedia()
                    break;
            case 3: calculaModelo()
                    break;
        }
    }
    while (opcao != 4)
}
function cadastra(vet, mat){
    for(var i=0;i<4;i++){ // para cada carro
        var carro = new Object()
        carro.marca = prompt(`Informe marca`)
        carro.modelo = prompt(`Informe modelo`)
        carro.ano = Number(prompt(`Informe ano`))
        carro.valor = Number(prompt(`Informe valor`))
        carro.media = 0
        // insere no vetor
        vet.push(carro)
        for(var j=0;j<5;j++){ // para cada nota
            mat[i][j] = Number(prompt(`Informe a nota`))
        }
    }   
}
function calculaMedia(vet, mat){
    for(var i=0;i<4;i++){
       for(var j=0;j<5;j++){
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 5
        console.log(vet[i])
        //console.log(`A média ${soma/5} marca: ${vet[i].marca} modelo: ${vet[i].modelo} `)
    }
}
function calculaModelo(vet, mat){
    for(let j=0;j<5;j++){
        var menor = mat[0][j]
        var modelo = vet[0].modelo
        for(let i=0;i<4;i++){
            if (mat[i][j] < menor){
                menor = mat[i][j]
                modelo = vet[i].modelo
            }
        }
        console.log(`${menor} ${modelo}`)
    }
}
