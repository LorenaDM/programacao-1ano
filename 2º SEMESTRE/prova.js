//Lorena Delgado Moroni

class Computador{
  constructor(nomeDono, marca, modelo, ram, hd){
    this.nomeDono = nomeDono
    this.marca = marca
    this.modelo = modelo
    this.ram = ram
    this.hd = hd

  }
  upgradeRam = (x) =>{
    this.ram += x
  }
  downgradeRam = (x) =>{
    if((this.ram - x >= 0)){
      this.ram = this.ram - x
    }
    else{
      console.log(`RAM não pode ser negativo`)
    }
  } 
  upgradeHd = (x) =>{
    this.hd += x
  }
  downgradeHd = (x) =>{
    if((this.hd - x >= 0)){
      this.hd = this.hd - x
    }
    else{
      console.log(`Hd não pode ser negativo`)
    }  
  }
  mostra = () =>{
    console.log(`Nome dono: ${this.nomeDono}, Marca: ${this.marca}, Modelo: ${this.modelo}, RAM: ${this.ram}, HD: ${this.hd}`)
  }

}

let Computador1 = new Computador("Lorena", "AMD", 'Ryzen', 4, 500)
Computador1.upgradeRam(4)
Computador1.downgradeRam(2)
Computador1.downgradeHd(510)
Computador1.upgradeHd(100)
Computador1.mostra()


let Computador2 = new Computador("Lorena", "Intel", 'i7', 8, 500)
Computador2.upgradeRam(12)
Computador2.downgradeRam(6)
Computador2.downgradeHd(90)
Computador2.upgradeHd(110)
Computador2.mostra()
