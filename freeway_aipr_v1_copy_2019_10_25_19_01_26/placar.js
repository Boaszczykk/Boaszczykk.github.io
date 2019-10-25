//Placar
function placar(){
 if(yVaca < 10){
    placarSetas += 1;
    ponto.play();
}
  
  if(yPanda < 10){
    placarWS += 1;
    ponto.play();
}
}

//resetar cada vez que faz ponto
function resetar(){
 if(yVaca < 10){
    yVaca = 368;}
  
 if(yPanda < 10){
    yPanda = 368;}
}


function mostraplacar(){
  textSize(30);
  fill("black");
  text(placarSetas, 3/5*largura, 30);
  text(placarWS, largura/3, 30);
}

function pandaVenceu(){
  image(imgEstrada, 0, 0, 600, 400);
  image(imgPanda, largura/2 - 100, altura/2 - 100, 200, 200);
  textSize(40);
  fill("white");
  textAlign(CENTER);
  text("Panda Venceu!", largura/2, altura/2 - 130);
  

}//Fim do Letras Venceu

function vacaVenceu(){
  image(imgEstrada, 0, 0, 600, 400);
  image(imgVaca, largura/2 - 100, altura/2 - 100, 200, 200);
  textSize(40);
  fill("black");
  textAlign(CENTER);
  text("Vaquinha Venceu!", largura/2 , altura/2 - 130);

}//Fim do Setas Venceu