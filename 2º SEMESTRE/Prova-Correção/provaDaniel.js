
//chama
chefe()
//cria
function chefe(){
    //declarar o vetor de escopo global
    let vetor = []
    //declarar o vetor de escopo global
    let vetor2 = []
    //Menu de opções para o usuário
  do{
    let opcao = Number(prompt(`Escolha uma das opções: \n [1] Cadastrar Pessoa \n [2] Cadastrar Imóvel  \n [3] Valor Total \n [4] Mais Rica \n [5] Sair`)) 
    //verifica quala  opção
    switch(opcao){
        case 1: cadastraPessoa(vetor)
                break
        case 2: cadastraImovel(vetor2)
                break

        case 3: ConsultaBens(vetor, vetor2)
                break

        case 4: ImCaro(vetor, vetor2)
                break

        case 5: console.log(`Grato por usar nosso software`)
                break
    
        default: console.log(`Opção inválida`)
        }
    }
    while(opcao != 5)
} 

//1) cadastrar 1 pessoa contendo rg, cpf e nome
function cadastraPessoa(vet){
    //CRIA UM obj no singular
    let pessoa = new Object()
    pessoa.nome = prompt("Informe o nome")
    pessoa.rg = prompt("Informe o RG")
    pessoa.cpf = prompt("Informe o CPF")
    //coloco pessoa em um conjunto de pessoaS
    vet.push(pessoa)//obs que na verdade vai inseriri nop vetor
}

//2) cadastrar 1 imóvel contendo código, endereço, tamanho, tipo,
// valor e rg do dono. 
//Não pode criar imóvel de pessoa que não esteja cadastrada
function cadastraImovel(vet2){
     //CRIA UM obj no singular
     let imovel = new Object()
     imovel.endereco = prompt("Informe o endereço")
     imovel.rg = prompt("Informe o RG do dono")
     imovel.cod = Number(prompt("Informe o código do imóvel"))
     imovel.tam = Number(prompt("Informe o tamanho em metros"))
     imovel.preco = Number(prompt("Informe o valor"))
     imovel.endereco = prompt("Informe o tipo")
     //coloco imovel em um conjunto de imoveis
     vet2.push(imovel)//obs que na verdade vai inseriri nop vetor
    //verificar se pode inserir(se já existe)
    for(let i = 0; i < pessoa.length;i++){
        if(pessoa[i].rg == false){
            console.log(`Cadastro cancelado, a pessoa não existe`)
            return 0 //sai da funçaõ, pois iremos cadastrar
        }
    }
    
}

//3) A partir de um RG informado, calcula e mostra o valor total em imóvel desta pessoa, mostrando também o nome 
function ConsultaBens(vet, vet2){
    rgConfere = prompt("Informe o rg para consulta") 
    soma = 0
    nomePessoa = vet[0].nome
    for(let i=0;i < imovel.length;i++){
        if (rgConfere == vet2[i].rg){
            soma = soma + vet2[i].preco
            nomePessoa = vet[i].nome
              
        }  
    }
    console.log(`Valor total em imóveis do(a) ${nomePessoa} é: ${soma}`)
}

//4) Calcula e mostra o cpf da pessoa que tem o imóvel mais caro
function ImCaro(vet, vet2){
    maisCaro = vet2[0].preco //suposmos que seja o 1
    for(let i = 0; i < imovel.length; i++){
        if (vet2[i].preco >= maisCaro){
            maisRica = vet[i].cpf

        }
            
    }
    console.log(` O CPF ${maisRica} pertence a pessoa que possui o imóvel mais caro`)
}
