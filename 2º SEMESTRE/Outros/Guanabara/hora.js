function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#result')
    if(fano.Value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')

    }
    else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
        if(fsex[0].cheked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img-crianco.jpeg')

            }else if (idade < 21){
                img.setAttribute('src', 'img-jovem.jpeg')

            }else if(idade < 60){
                img.setAttribute('src', 'img-adulto.jpeg')

            }else{
                img.setAttribute('src', 'img-idoso.jpeg')

            }
        }
        else if(fsex[1].cheked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img-crianca.jpeg')

            }else if (idade < 21){
                img.setAttribute('src', 'img-adolescente.jpeg')

            }else if(idade < 60){
                img.setAttribute('src', 'img-adulta.jpeg')

            }else{
                img.setAttribute('src', 'img-idosa.jpeg')

            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }






}