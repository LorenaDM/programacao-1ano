
chefe()
function chefe(){
    let matriz = [] //guarda os pontos dos times nas rodadas
    let vetor = [] //guarda os nomes, cidade e média de pontos dos times
    
    do{
        let opcao = Number(prompt(`Escolha uma das opções: \n [1] Cadastrar Carro \n [2] Media \n [3] Modelo \n [4] Sair`)) 
        //verifica quala  opção
        switch(opcao){
            case 1: cadastraCarro(matriz, vetor)
                    break;

            case 2: Media(matriz, vetor)
                    break;
    
            case 3: Modelo(matriz, vetor)
                    break;
    
            case 4: console.log(`Grato por usar nosso software`)
                    break;
        
            default: console.log(`Opção inválida`)
            
        }
       
    }  
    while(opcao != 4)
}

function cadastraCarro(mat, vet){
    for(let i=0; i < 4;i++){ 
        let carro = new Object()
        carro.marca = prompt(`Informe o marca`)
        carro.modelo = prompt(`Informe a modelo`)
        carro.ano = Number(prompt("Informe o ano XXXX"))
        carro.preco = Number(prompt("Informe o valor"))
        vet.push(carro)

        //cria o vetor na matriz
        mat[i] = [] // cada linha da matriz é um vetor
        

        for(let i=0;i < vet.length;i++){ 
                for(let j=0;j<5;j++){ // 5 notas
                mat[i][j] = Number(prompt(`Informe a nota do carro ${carro.modelo} na avaliação ${j+1}`))
            }
    
        }
    }    
}

//2) calcular e mostrar a média de notas de cada carro, 
//informe junto a marca e modelo do carro

function Media(mat, vet){ // mat representa a matriz na função chefe()
    for(let i=0;i < 4;i++){ 
        for(let j=0;j<5;j++){
           // soma no vetor na posição i, i faz referenci a linha ou seja o cadastro
           vet[i].notas = vet[i].notas + mat[i][j]     
        }
        
        vet[i].notas = vet[i].notas / 5
        console.log(`De acordo com a Guia Quatro Rodas da Editora Abril, O carro ${modelo[i]} ${marca[i]} obteve a média de ${vet[i].notas}`)
    }
    
  
}

//3) calcular e mostrar o modelo do carro com menor nota em cada avaliação

function Modelo(mat, vet){
    for(let j=0;j<5;j++){
        let menorNota = mat[0][j]
        let menoRmodelo = vet[0].modelo
        
        for(let i=0;i< 4;i++){ 
           if( mat[i][j] < menorNota)
           menorNota = mat[i][j]
           menoRmodelo = vet[i].modelo
           
        }
        console.log( `O time ${menoRmodelo} fez ${menorNota} na rodada ${j+1}`)
    }
}