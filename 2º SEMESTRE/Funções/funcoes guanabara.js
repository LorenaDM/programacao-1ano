///////////////////PAR IMPAR////////////////////
 function parimp(n){//parametro
if(n % 2 == 0){//ação
    return ('é par')
}
else{
    return('impar')//retorno
}

}
let res = parimp(7) // chamada
console.log(res) 
///////////////////SOMA////////////////////
 function soma(n1=0, n2=0){
    return n1 + n2
}
let res = soma(10, 5)
console.log(res) 
///
 let v = function(x){
    return x*2
}
console.log(v(5)) 
///Fatorial///
 function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c 
    }
    return fat
}
console.log(fatorial(5)) 
///Fatorial recursividade////
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }

}
console.log(fatorial(5))