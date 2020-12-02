/* Crie uma classe em JS chamada Aluno contendo as variáveis 
numeroAluno, nome , idade, p1 e p2,     
Crie os métodos notaFinal() - que calcula e retorna a média final do aluno - ,
 e mostra() - que retorna os valores de numeroAluno, nome e idade.    
 Faça a instanciação da classe Aluno 
 (atribuição das variáveis de instância com quaisquer valores e 
chamada dos métodos notaFinal() e mostra()).     
Adicionar o método passou() à classe Aluno a fim de verificar se o aluno passou. 
Chame o método passou() a fim de testa-lo. */

/* class Aluno{
    constructor(numeroAluno, nome, idade, n1, n2){
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.n1 = n1
        this.n2 = n2
    }
    mostra = () =>{
        let result = (this.passou) ? "Passou" : "Reprovado"
        console.log(`Nº aluno: ${this.numeroAluno}, Nome: ${this.nome}, 
        Idade: ${this.idade}, Nota final: ${this.notaFinal}, Aprovação: ${result}`)
    }
    notaFinal = () => {
        this.notaFinal = (this.n1 + this.n2) / 2
    }
    aprov = () => {
        if (notaFinal >= 6){
            this.passou = true
        }else{
            this.passou = false
        }
    }
    
}



let aluno1 = new Aluno(777, 'Lorena', 18, 10, 10)
aluno1.notaFinal()
aluno1.aprov()
aluno1.mostra() */
class Aluno{
    constructor(numeroAluno, nome, idade, n1, n2){
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.n1 = n1
        this.n2 = n2
    }
    mostra = () =>{
        let result = (this.passou) ? "Passou" : "Reprovado"
        console.log(`Nº aluno: ${this.numeroAluno}, Nome: ${this.nome}, 
        Idade: ${this.idade}, Nota final: ${this.notaFinal()}, Aprovação: ${result}`)
    }
    notaFinal = () => {
        return (this.n1 + this.n2) / 2
    }
    passou = () => {
        if (this.notaFinal() >= 6){ //this pega o objeto
            return `${this.nome} foi aprovado`
        }else{
            return `${this.nome} foi reprovado`
        }
    }
    
}



let aluno1 = new Aluno(777, 'Lorena', 18, 10, 10)
aluno1.mostra()
console.log(aluno1.passou())


let a = Number(prompt('Informe o número do aluno'))
let b = prompt('Informe o nome do aluno')
let c = Number(prompt('Informe a idade do aluno'))
let d = Number(prompt('Informe a nota 1 do aluno'))
let e = Number(prompt('Informe a nota 2 do aluno'))

let aluno2 = new Aluno(a, b, c, d, e)
aluno2.mostra()
console.log(aluno2.passou())

