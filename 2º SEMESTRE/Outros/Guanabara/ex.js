var biclicletas =[]
do{

    //cria bicicleta no singular
    var bicicleta = new Object()
    bicicleta.codigo = Number(prompt("Digite o código"))
    //verifica se o cód já existe
    //percorre o vetor bicicletaS
    var achou = false //supomos que não achamos 
    for(var i =0; i < bicicletas.length; i++){//varre o vetor
        if(bicicleta.codigo == bicicletas[i].codigo){
            //achei
            achou = true
            break//para de procurar
        }
    }

    if(achou == false){
    bicicleta.modelo = prompt("Digite o modelo")
    bicicleta.preco = Number(prompt("Digite o preço"))
    bicicleta.qtde = Number(prompt("Digite a quantidade"))
        //vetor paradata
    var vetorFabr = prompt("Digite a data da fabricação no formato: dd/mm/aaaa").split('/')
    //obj na data já explodido acima
    bicicleta.fabricacao = new Date(vetorFabr[2], vetorFabr[1]-1, vetorFabr[0])
    }
    else{
        alert("Código já existe")
    }
    
    //add ao vetor bicletas no plural
    biclicletas.push(bicicleta)
    var resp = prompt("Gostaria de continuar ? [S]/[N]")

}
while (resp != 'N')
//processamento 
//percorrer o vetor
var soma = 0;
for(var i =0; i < bicicletas.length; i++)

var media = 0;
soma = soma + bicicletas[i].preco
media = soma/bicicletas.length
console.log(`A media é de : ${media}`)
//percorrewr o vetor para encontara o modelo com menor quantidade
var menorQtde = bicicletas[0].qtde // 1ª bike tem menor quantidade
var modeloMenorQtde = bicicletas[0].modelo // 1ª bicicleta tem menor qtde
for(var i = 0; i < bicicletas.length; i++){
    if(bicicletas[i].qtde < menorQtde){
        menorQtde = bicicletas[i].qtde // atualiza quantidades
        modeloMenorQtde = bicicletas[i].modelo // atualiza modelo

    }
}
console.log(`Modelo  ${modeloMenorQtde} tem menor qtde de ${menorQtde}`)
//data inicial
var vetorDI = prompt("Informe data inicial - dd/mm/aaaa").split('/')
var dataInicial = new Date(vetorDI[2], vetorDI[1]-1, vetorDI[0])
//data final
varDF = prompt("Informe data final - dd/mm/aaaa").split('/')
var dataFinal = new Date(vetorDF[2], vetorDF[1]-1, vetorDF[0])
//percorre o vetor
for(var i = 0; i < bicicletas.length; i++){
    if((bicicletas[i].fabricacao > dataInicial) && (bicicletas[i].fabricacao < dataFinal)){
        console.log(bicicletas[i])
    }
}
//obter o modelo do usuário
var modelo = prompt("Informeo modelo da bicicleta")
//percirre o vcetor
for(var i = 0; i < bicicletas.length; i++){
    if(bicicletas[i].modelo.slice(0, 3) == modelo.slice(0, 3)){
        console.log(bicicletas[i])
    }
}




