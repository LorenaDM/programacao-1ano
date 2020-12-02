function principal(){
    mensagem1()
    mensagem2()
}

function mensagem1(){
    console.log(`Atenção na aula`)
}

function mensagem2(){
    console.log(`Preciso ter foco para ter sucesso`)

}

function principal2(){
    mensagemDia("Pedro")
    mensagemNoite("Carlos")
}
//nome é local
function mensagemDia(nome){
    console.log(`Muito bom dia ${nome}`)
}

function mensagemNoite(nome){
    console.log(`Muito boa noite ${nome}`)
}

function principal(){
    var nro = Number(prompt("Informe um número"))
    parImpar(nro)
}

function parImpar(numero){
    if(numero % 2 == 0){
        console.log(`Par`)

    }else{
        console.log(`Impar`)

    }
}
//
function principal(){
    var nro = Number(prompt("Informe um número"))
    var nro2 = Number(prompt("Informe outro número"))
    soma(nro, nro2)//parametros
    
}

function soma(numero, numero2){
    console.log(`A soma entre os números 1 e 2 é: ${numero + numero2}`)
    
}
//
function principal(){
    var nro = Number(prompt("Informe um número"))
    var nro2 = Number(prompt("Informe outro número"))
    
    var resultado = soma(nro, nro2)//parametros
    console.log(resultado)
}

function soma(numero, numero2){
    return numero + numero2//ela volta a operação no resultado que recebe esse retorno(VAR)
    
}
//teste a função
function principal(){
    
    /* var nro = Number(prompt("Informe um número"))
    var nro2 = Number(prompt("Informe outro número"))
     */
    var resultado = divisivel(6,2)//parametros
    console.log(resultado)
}

function divisivel(numero, numero2){
    if(numero % numero2 == 0){
    return 'é divisível'//ela volta a operação no resultado que recebe esse retorno(VAR)
    }
    else{
        return 'NÃO é divisível'
    }
}

