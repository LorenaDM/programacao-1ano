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
    comprar = (x) =>{
      this.qtde += x
    }
    vender = (x) =>{
      this.qtde -= x
    }
    aumentar = (x) =>{
      this.preco += x
    }
    diminuir = (x) =>{
      this.preco -= x
    }

    mostra = () =>{
      console.log(`Produto: ${this.descricao}, ID: ${this.id}, QTDE: ${this.qtde}, Preço: ${this.preco}`)
    }





   
}

let Produto1 = new Produto(7, "Arroz", 5, 30)
Produto1.comprar(5)
Produto1.aumentar(10)
Produto1.mostra()


let Produto2 = new Produto(5, "Feijão", 8, 20)
Produto1.vender(6)
Produto1.diminuir(4)
Produto2.mostra()