chefe()

function chefe(){
    //declarar matriz
    let matriz = [] //uma matriz é um vetor
    //vamos criar a matriz com 3 linhas
    matriz[0] = [] //cada linha da matriz é um vetor
    matriz[1] = []
    matriz[2] = []

    cadastra(matriz)//cadastra 3 alunos

    consultaMediaAlunos(matriz)//calcula a média das notas

}

function cadastra(mat){
    for(let i=0;i<3;i++){//são 3 alunos //LINHA
        // Antes da entrada das notas de um aluno, solicitar  o nome e o rg dele.
        let nome = prompt(`Nome do aluno: `)
        let rg = Number(prompt(`Digite o rg do aluno`))
        alert(`Informe 4 notas ${i+1}`)
        for(let j=0;j<4;j++){           //COLUNA
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat) {//mat representa a matriz da função chefe()
    let medias = [0,0,0]
    for(let i=0;i<3;i++){ //LINHA p/ cada aluno
        for(let j=0;j<4;j++){  //COLUNA p/ cada nota
            //soma no vetor na posição
            medias[i] = medias[i] + mat[i][j]
        }
        //acabaram as notas do aluno i
        medias[i] = medias[i] /4
    }
    //acabaram os alunoas
    console.log(`Valor das médias ${medias}`)
}    
// Calcular e mostrar a media de cada prova(4 provas)
function calculaMediaProva(mat){
    let provas = [0,0,0]
    for(let j=0;j<4;j++){
        for(let i=0;i<3;i++){ 
            //soma no vetor na posição
            provas[j] = provas[j] + mat[j][i]
        }
  
        provas[j] = provas[j] /3
    }
    //acabaram os alunoas
    console.log(`Valor das médias ${provas}`)
}    

// calcular e mostrar a maior nota de cada prova
function MaiorNota(mat){
    let MaiorN = mat[0][0]
    let provas = [0,0,0]
    for(let j=0;j<4;j++){
        for(let i=0;i<3;i++){ 
            if(mat[j][i] > MaiorN){
                MaiorN = mat[j][i]
            }
        }
    }
    
    console.log(`Maior Nota ${Maiorn}`)
}