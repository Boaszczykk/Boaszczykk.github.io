function setup() {
  createCanvas(largura, altura);
  //trilha.setVolume(0.2);
  //trilha.loop();
}

function draw() {
  if(frameCount > 400){
    jogar();}else{
    telaInicial();
 }
}


function telaInicial(){
    fill("Black");
    textAlign(CENTER);
    textSize(60);
    background('rgb(100%,0%,10%)');
    fill("black");
    textStyle(BOLD);
    text('FreeWay', largura/2, altura/2);
    textSize(25);
    text('Desenvolvido por Kaylaine', largura/2,         altura-150);
}


function jogar(){
  if( placarSetas < 5 && placarWS < 5){
      background(imgEstrada);
      mostraVaca();
      movimentaVaca();
      mostraCarros();
      movimentaCarros();
      mostraPanda();
      movimentaPanda();
      mostraplacar();
      placar();
      resetar();
      atropelamento();
  }else{
    //Verifica e mostra o campeão
    if(placarSetas == 5 ){
      vacaVenceu();}
    else{
      pandaVenceu();
    }
  } 
}