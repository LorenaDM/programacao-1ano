function chefe(){ 
    //solicitar os dados para o usuario
    var num = Number(prompt("Informe um número"))
    var num2 = Number(prompt("Informe outro número"))
    var operador = prompt("Informe uma operação: [+], [-], [/] ou [*]")
    
    var result = calculadora(num, num2, operador)
    
    console.log(`O resultado da operação é ${result}`)

}
//função recebe 3 valores como parametro
function calculadora(num, num2, operador){
    switch(operador){
        case '+': return num + num2
        case '-': return num - num2
        case '*': return num * num2
        case '/': 
                 if(num2 != 0){
                     return num / num2
                 }
                 else{
                     return `Impossível divisão por zero`
                 }    
    
    }
}
chefe()