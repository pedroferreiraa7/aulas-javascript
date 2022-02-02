function carregar(){
       var msg = window.document.getElementById('imagem')
var img = window.document.getElementById('imagem')
var data= new Date()
var hora = data.getHours()
//msg.innerHtml= `agora sao ${hora} horas`//
var hora = 29

if(hora >= 0 && hora < 12) {
    //bom dia//
    img.src = 'fotododia.png.jpg'
    }else if (hora >=12 && hora <=18){
    //boa tarde//
    img.src = 'fotodatarde.png.jpg'
    }else {
    //boa noite//
    img.src = 'fotodanoite.png.jpg'
    }
}
