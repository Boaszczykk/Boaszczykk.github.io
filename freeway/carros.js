//Carros
function mostraCarros(){
  
  for(let i= 0; i < imgCarro.length; i++)
    
  image(imgCarro[i], xCarro[i], yCarro[i], 30, 30);
} //Iteração

function movimentaCarros(){
  
  for(let i= 0; i < imgCarro.length; i++){
    
    if(i < 3){
    // Carros que andam para esquerda 
      xCarro[i] -= velocidade[i];
    
    // Fim da Linha
    if(xCarro[i] < -55)
      xCarro[i] = 605;
      velocidade[i] = ceil(random(2,9))
      
    }else{
    // Carro que andam para Direita
    xCarro[i] += velocidade[i];
      
    if(xCarro[i] > 605)
    xCarro[i] = -55;
    velocidade[i] = ceil(random(2,9));
    }
  }
}