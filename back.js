function verificador(){
    var data_atual = new Date()
    var data_ano = data_atual.getFullYear()
    var ano = window.document.getElementById("txt_ano")
    var sexo = window.document.getElementById("res")
    var resultado = window.document.getElementById("dados")
    
    if(ano.value.length == 0 || ano.value > data_ano || ano.value <= 0){
         window.alert(`[ ERRO ]: verifique o ano de nascimento`)
    } else{
        var form = window.document.getElementsByName("form_s")
        var idade = data_ano - Number(ano.value)
        var genero =""
        var img = window.document.createElement("img")
        img.setAttribute('id','foto')
        if(form[0].checked){
            genero = "Masculino"
            if(idade >= 0 && idade <=14){
               // criança 
               img.setAttribute('src','img/menino.jpg')
               img.style.inlineSize="33%"
            } else if(idade >= 15 && idade <= 19){
              // joven
              img.setAttribute('src','img/jovem_m.jpg')
              img.style.inlineSize="33%"
            } else if(idade >=20 && idade <= 59){
                // adulto
                img.setAttribute('src','img/homem_adulto.jpg')
                img.style.inlineSize="33%"
            } else {
                // idoso
                img.setAttribute('src','img/homem_velho.jpg')
                img.style.inlineSize="33%"
            }
        } else {
            genero = "Feminino"
            if(idade >= 0 && idade <=14){
                // criança 
                img.setAttribute('src','img/menina_cr.jpg')
                img.style.inlineSize="33%"
             } else if(idade >=  15 && idade <= 19){
               // joven
               img.setAttribute('src','img/jovem_mu.jpg')
               img.style.inlineSize="33%"
             } else if(idade >= 20 && idade <= 59){
                 // adulto
                 img.setAttribute('src','img/mulher_adulta.jpg')
                 img.style.inlineSize="33%"
             } else {
                 // idoso
                 img.setAttribute('src','img/mulher_velha.jpg')
                 img.style.inlineSize="33%"
             }}}
        var img0= window.document.getElementById("img")
        resultado.style.textAlign ="center"
        resultado.style.top="30px"
        resultado.style.font="sans-serif"
        resultado.style.fontSize="13px"
        resultado.innerHTML=`Detectado pessoa do gênero ${genero} e com ${idade} anos `
        resultado.style.textAlign ="center"
        resultado.style.padding="20px"
        resultado.appendChild(img)
}