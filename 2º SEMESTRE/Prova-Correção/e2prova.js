function cadastraPessoa(pes){
    var objeto = new Object()
    objeto.rg = prompt(`RG`)
    objeto.cpf = prompt(`CPF`)
    objeto.nome = prompt(`Nome`)
    // insere no vetor
    pes.push(objeto)
}
function cadastraImovel(imv, pes){
    var objeto = new Object()
    objeto.codigo = prompt(`Codigo`)
    objeto.endereco = prompt(`Endereco`)
    objeto.tamanho = prompt(`Tamanho`)
    objeto.tipo = prompt(`Tipo`)
    objeto.valor =  prompt(`Valor`)
    objeto.rg = prompt(`Rg`)
    for(let i=0;i<pes.length;i++){
        if (pes[i].rg == objeto.rg){    //errei aqui
            imv.push(objeto)
            return 0 // sai do for e da função
        }
    }
   
}
function calculaTotal(imv, pes){
    let rg = prompt(`Informe RG`)
    let soma = 0
    for(let i=0;i<imv.length;i++){
        if (imv[i].rg == rg){
            soma = soma + imv[i].valor
        }
    }
    let nome
    for(let i=0;i<pes.length;i++){
        if (pes[i].rg == rg){
            nome = pes[i].nome
            break
        }
    }
    console.log(`${soma} ${nome}`)
} 
function calculaCpf(imv, pes){
    let maisCaro = imv[0].valor
    let rg = imv[0].rg
    for(let i=1;i<imv.length;i++){
        if (imv[i].valor > maisCaro){
            maisCaro = imv[i].valor
            rg = imv[i].rg
        }
    }  
    let cpf
    for(let i=0;i<pes.length;i++){
        if (pes[i].rg == rg){
            cpf = pes[i].cpf
            break
        }
    }
    console.log(cpf)
}


