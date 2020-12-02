/* Implemente em JS uma classe chamada Rio contendo as variáveis 
nome, nível e poluído. Essa classe deve possuir o método construtor,
 e ainda os métodos:
•	chover(float): que aumenta o nível atual do rio;
•	ensolarar(float): que diminui o nível atual do rio;
•	limpar(): que limpa o rio;
•	sujar(): que polui o rio;
•	mostra(): que mostra todas as informações do rio.

Finalmente, cria dois Rios (cada um deve utilizar um construtor diferente) 
e teste os métodos criados. */

class Rio{
    constructor(nome, nivel, poluicao){
        this.nome = nome
        this.nivel = nivel
        this.poluicao = poluicao

    }
    chover = (x) => {
        this.nivel += x
    }
    ensolarar = (x) => {
        if(this.nivel - x >=0){
            this.nivel -= x
        }
    }
    limpar = () =>{
        this.poluicao = false
    } 
    sujar = () =>{
        this.poluicao = true
    }
    mostra = () => {
        let aux = this.poluicao ? "Sujo" : "Limpo"
        console.log(`Rio ${this.nome}, Nível: ${this.nivel}mm, está ${aux}`)
    }
}


let Rio1 = new Rio("Canoas", 10.000)
Rio1.chover()
Rio1.limpar()
Rio1.mostra()

let Rio2 = new Rio("Mogi", 50.000)
Rio2.ensolarar()
Rio2.sujar()
Rio2.mostra()
