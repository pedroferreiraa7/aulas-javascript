function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res  =document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }else {
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'homen'
        if( idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'foto-bebe-h.jpg')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-h.png')
        }else if(idade <50){
            //adulto
            img.setAttribute('src','foto-adulto-h.png')
        }else {
            //idoso
            img.setAttribute('src', 'foto-idoso-h.png')
        }
        } else if(fsex[1].checked){
        genero = "mulher"
        if( idade>= 0 && idade <10){
            //Criança
            img.setAttribute('src', 'foto-bebe-m.png')
        }else if (idade <= 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-m.png')
        }else if(idade <50){
            //adulto
            img.setAttribute('src', 'foto-adulto-m.png')
        }else{
            //idoso
            img.setAttribute('src', 'foto-idoso-m.jpg')
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
 }
  
}
    