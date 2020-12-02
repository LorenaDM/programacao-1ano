var repeticao = 0;

//while -> Precisamos d euma váriavel inicial
/* while(repeticao < 10){
    console.log(`Olá mundo número: ${repeticao}` );
    repeticao ++; //ou +=1
}
console.log("Cheguei até o final"); */

/* for(var numero = 0; numero <10; numero++){//+=2
    console.log("Olámundi")
} */

/* do{
    console.log("Olá mundo")
}while(nome == 'Lorena') */


//continue

/* for(var i =0;i <= 10; i++){
    if(i == 2 || i == 3){
        continue;//pulou o numero pedido
    }
    console.log(i)
} */
//break
/* for(var i =0;i <= 10; i++){
    if(i == 2 || i == 3){
        break;//para antes dcondição pedida
    }
    console.log(i)
} */
var n = 0;
while(n < 10){
    if(n == 5){
        break;//para antes dcondição pedida
    }
    console.log(n);
    n++
} 