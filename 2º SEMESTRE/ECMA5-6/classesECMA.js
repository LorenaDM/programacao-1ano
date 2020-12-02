//vamos programar orientado a objetos

//criando uma classe chamada Veiculo
class Veiculo{

    //método constructor
    constructor(marca, modelo, ano, motor, velocidade){
        this.marca = marca //this representa o objetos sendo criado
        this.modelo = modelo
        this.ano = ano
        this.motor = motor //true (ligado) ou false (desligado)
        this.velocidade = velocidade

    }
    mostra = () => {
        //console.log(this) //this representa o objeto que chama o método
        let status = (this.motor) ? "Ligado" : "Desligado"
        console.log(`Marca ${this.marca} e modelo ${this.modelo}, 
        Ano: ${this.ano}, Motor: ${status}, Velocidade: ${this.velocidade}`)
    }
    //ligado
    ligar = () => {
        this.motor = true
    }
    //desligado
    desliga = () => {
        this.motor = false
    }
    acelerar = (x) => {
        this.acelerar = this.acelerar + x
    }
    frear = (x) => {
        this.frear = this.frear - x
    }
}

//cria um objeto da classe Veiculo
let objeto1 = new Veiculo("GM", 'Onyx', 2009, false, 0) //this representa objeto1
objeto1.ligar()
objeto1.acelerar(80)
objeto1.frear(30)
objeto1.mostra() //this representa


//cria um oputro objeto da classe Veiculo
let objeto2 = new Veiculo("Fiat", "Palio", 2006, false, 0) //this representa objeto2
objeto2.ligar() // a ordem impporta
objeto2.acelerar(80)
objeto2.frear(20)
objeto2.mostra()//this representa

//=================================================//
/* class itensAcampamento{
    constructor(marca, equipamento, ano){
        this.marca = marca 
        this.equipamento = equipamento
        this.ano = ano
    }
    mostra(){
        console.log(this)
    }

}

//cria um objeto da classe itensAcampamento
let objeto1 = new itensAcampamento("Deuter", "Rede", 2019) 
objeto1.mostra() 
let objeto2 = new itensAcampamento("Nautika", "Barraca", 2018) 
objeto2.mostra()  */