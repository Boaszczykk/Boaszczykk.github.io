//Vaca
function mostraVaca(){
  image(imgVaca, xVaca, yVaca, 28, 28);
}

function movimentaVaca(){
  if(keyIsDown(UP_ARROW)){
    //yVaca= yVaca -3;
    if(yVaca>5)
      yVaca -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yVaca<365)
      yVaca +=10;
  }
}

//Panda
function mostraPanda(){
  image(imgPanda, xPanda, yPanda, 28, 28);
}

function movimentaPanda(){
  if(keyIsDown(87)){
    //yVaca= yVaca -3;
    if(yPanda>5)
      yPanda -=10;
  }
  if(keyIsDown(83)){
    if(yPanda<365)
      yPanda +=10;
  }
}