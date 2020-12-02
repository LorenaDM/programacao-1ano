//uma função um bloco de código que executa determinada tarefa, somente é executada mediante uma chamada específica .
 function alerta(mensagem){
    alerta(mensagem);
}
function metade(num, div){
    return num / div;
}

console.log(metade(15, 3))//passando via parametro */
 function acao(){
    console.log("Função Js")

}
acao()//precisamos CHAMAR a função 
 function sub(n1, n2){
    var res =  n1 - n2;
    console.log(res)
} 
//sub(12, 10)
 function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2,6)) 

var numeros = new Array(10,2,5,30,25);

function media(nums){
    var tam = nums.length;
    var soma = 0;
    for(var i = 0; i < tam; i++){
        soma += nums[i];
    }
    return Math.round(soma / tam);//arredonda
}
console.log(media(numeros));
 
