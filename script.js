function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       img.setAttribute('width', '80%')
       img.setAttribute('height', '300px')
      
       if (fsex[0].checked){
           genero = 'Homem'
                if(idade >=0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'menino.jpg')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'jovem-homem.jpg')
                } else if (idade < 60){
                    //adulto
                    img.setAttribute('src', 'homem-adulto.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'senhor.jpg')
                }
                res.innerHTML = 'Detectamos um ' + genero + ' com ' + idade + ' anos.'
       } else {
           genero = 'Mulher'
                if(idade >=0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'menina.jpg')
                } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
                } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
                } else {
                //idoso
                img.setAttribute('src', 'senhora.jpg')
                }
                res.innerHTML = 'Detectamos uma ' + genero + ' com ' + idade + ' anos.'
       }
       res.style.textAlign = 'center'

       res.appendChild(img)
       

    }
}