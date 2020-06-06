// This is a JavaScript file
$(document).on("click","#verificar", function(){
var idade= $("#idade").val();
var nome= $("#nome").val();
var imagem;

 if(idade >= 18){
imagem = ('<br><center><img src="https://pm1.narvii.com/6464/8a10e42a37eb827bf0eb8b8f449d0ede74fb4034_00.jpg" width="250px">');

$("#result").html('<center>Seu nome é '+nome+ '<br><center> Você tem '+idade+ ' anos, e é maior de idade.' + imagem);

}

else if(idade<18){
imagem=('<br><center><img src="https://www.plazahoteis.com.br/wp-content/uploads/2019/07/gatinho-filhote-plaza-hoteis-jul19.jpg" width="300px">');

$("#result").html('<center>Seu nome é '+nome+ '<br><center> Você tem '+idade+ ' anos, e é menor de idade.' + imagem);
}

  });
