chefe()
//let funciona somente onde é declarada LOCAL
function chefe(){
    //declarar matriz
    let matriz = [] //uma matriz é um vetor
    //Declarar a matriz de alunos(TRêS ALUNOS)
    let vetor = [] // representa dados doas alunos NOME E RG
    cadastra(matriz, vetor)//cadastra 3 alunos
    consultaMediaAlunos(matriz, vetor)//calcula a média das notas
    calculaMediaProva(matriz)
    MaiorNota(matriz, vetor)
}

function cadastra(mat, vet){//espaço na memoria é diferente
    for(let i=0;i<3;i++){//são 3 alunos //LINHA
        let objeto = new Object()
        objeto.nome = prompt(`Nome do aluno: `)
        objeto.rg = prompt(`Digite o rg do aluno`)
        objeto.media = 0 //vamos considerar que no cadastro a media do aluno 0
        //insere alunos no vetor
        vet.push(objeto)

        matriz[i] = []//cada linha da matriz é um vetor
        // Antes da entrada das notas de um aluno, solicitar  o nome e o rg dele.
        alert(`Informe 4 notas do aluno ${objeto.nome}`)

        for(let j=0;j<4;j++){          //são 4 notas //COLUNA
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat, vet) {//mat representa a matriz da função chefe()
    for(let i=0;i<3;i++){ //LINHA p/ cada aluno
        for(let j=0;j<4;j++){  //COLUNA p/ cada nota
            //soma no vetor na posição
            vet[i].media = vet[i].media + mat[i][j]
        }
        //acabaram as notas do aluno i
        vet[i].media = vet[i].media /4
    }
    //acabaram os alunos
    console.log(vet)     //(`Valor das médias ${medias}`)
}  

function calculaMaiorNotaProva(mat, vet){
    for(let j=0;j<4;j++){ // para cada prova
        let maiorNota = mat[0][j] // assumo que a maior nota é do primeiro aluno
        let nomeMaiorNota = vet[0].nome // assumo que o nome do aluno com maior nota é o 1o. ano
        for(let i=0;i<3;i++){
            if (mat[i][j] > maiorNota){
                maiorNota = mat[i][j] // atualiza nota
                nomeMaiorNota = vet[i].nome // atualiza nome
            }
        }
        console.log(`A prova ${j+1} tem a maior nota ${maiorNota} do aluno ${nomeMaiorNota}`)
    }
}

function calculaMediaProvas(mat){
    for(let j=0;j<4;j++){
        let media = 0
        for(let i=0;i<3;i++){
            media = media + mat[i][j]
        }
        console.log(`A média da prova ${j+1} é ${media/3}`)
    }
}
