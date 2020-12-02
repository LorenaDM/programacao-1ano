
class Produto {

    constructor(id, descricao, qtde, preco){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }

    comprar = (x) => {
        this.qtde = this.qtde + x
    }

    vender = (x) => {
        if ((this.qtde - x) >= 0){
            this.qtde = this.qtde - x
        }
        else {
            console.log(`Estoque insuficiente`)
        }
    }

    aumentar = (x) => {
        this.preco += x
    }

    diminuir = (x) => {
        if ((this.preco - x >= 0)){
            this.preco =  this.preco - x 
        }
        else {
            console.log(`Preço não pode ser negativo`)
        }
        
    }

    mostra = () => {
        console.log(`${this.descricao} tem ${this.qtde} com preço de R$ ${this.preco}`)
    } 
}

let produto1 = new Produto(1, "Álcool em gel", 10, 20)
produto1.comprar(10)
produto1.aumentar(2)
produto1.mostra()

let produto2 = new Produto(2, "Máscara", 50, 3)
produto2.vender(5)
produto2.diminuir(1)
produto2.mostra()