let atropelaVaca= false;
let atropelaPanda= false;

function atropelamento(){
  for(let i= 0; i< imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 30, 30);
    
    if(atropelaVaca){
    // Vaca Atropelada
      yVaca=368;
      
      
      if(placarSetas>0){ // evita placar negativo
        placarSetas -=1;
        atropelou.play();
         }
    }
    
    atropelaPanda = collideRectRect(xPanda, yPanda, 28, 28, xCarro[i], yCarro[i], 30, 30);
    
    if(atropelaPanda){
    // Panda Atropelado
      yPanda=368;
      
      if(placarWS>0){ // evita placar negativo
        placarWS -=1;
        atropelou.play();
         }
    }
  }
}