/* Implemente em JS uma classe chamada Produto contendo as variáveis
 id , descrição , qtde  e preco . 
 Essa classe deve possuir o método construtor e ainda os métodos: 
•comprar(int x):que compra um produto aumentando em x a quantidade em estoque;
•vender(int x): que vende um produto diminuindo em x a quantidade em estoque;
•aumentar(float x): que aumenta o preço do produto em x unidades; 
•diminuir(float x): que diminui o preço do produto em x unidades; 
•mostra(): que mostra todas as informações do produto  
 Finalmente que cria dois Produtos  e teste os métodos criados. */

class Produto{
    constructor(id, descricao, qtde, preco){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }
    comprar = (x) => {
        this.qtde = this.qtde + x
    }
    vender = (x) =>{
        if((this.qtde - x) >= 0){
            this.qtde = this.qtde - x
        }
        else{
            console.log(`Estoque insuficiente`)
        }
    }
    aumentar = (x) =>{
        this.preco += x
    }
    diminuir = (x) =>{
        if((this.preco - x >= 0)){
            this.preco = this.preco -x
        }
        else{
            console.log(`Preço não pode ser negativo`)
        }
        
    }
    mostra = () =>{
        console.log(`${this.descricao} tem ${this.qtde} com preço de R$ ${this.preco}`)
    }
}



let Produto1 = new Produto(1, "Álcool", 10, 20)
Produto1.comprar(10)
Produto1.aumentar(2)
Produto1.mostra()

let Produto2 = new Produto(2, "Máscara", 50, 3)
Produto2.vender(5)
Produto2.diminuir(4)
Produto2.mostra()
