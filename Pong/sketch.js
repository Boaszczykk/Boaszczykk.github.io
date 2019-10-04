//Tela
let larguraTela=1280;
let alturaTela=600;
let metadeTela= larguraTela/2;

let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

//Variaveis em JavaScript da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX= 10;
let velocidadeY= 10;
let raio = diametro/2;
let aumentoVelocidade=2;

//Variaveis das raquetes
let alturaRaquete = 110;
let larguraRaquete =10;
let xMinhaRaquete= larguraTela - larguraRaquete;
let yMinhaRaquete=alturaTela/2 - alturaRaquete/2;
let velocidadeRaquetes=20;


let xRaqueteOponente= 0;
let yRaqueteOponente= alturaTela/2 - alturaRaquete/2;

//Placar
let meuPlacar=0;
let placarOponente=0;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura= "+largura)
  console.log("Altura= "+altura)
}

// Um looping sempre, desenha o que tem dentro.
function draw() {
  background(51);
  stroke("grey");
  strokeWeight(2);
  line(metadeTela, 0, metadeTela, alturaTela);
  if(frameCount<200)
    telaInicial();
  else
    jogar();
  
}//Fim da função DRAW

function telaInicial(){
    fill("Lime");
    rect(larguraTela/4, 0, metadeTela, alturaTela);
    textAlign(CENTER);
    textSize(20)
    fill("black");
    text("Ping Pong do Programador", metadeTela, alturaTela/2);
  }

function jogar(){
  if(meuPlacar<5 && placarOponente <5){
    mostraBolinha();
    movimentaBolinha();
    detectaColisão();
    mostraRaquete();
    movimentaMinhaRaquete();
    movimentoRaqueteOponente();
    detectaColisaoBolinhaRaquetes();
    mostraPlacar();
  }else{
    //vereficar e mostrar o campeão
    if(meuPlacar==5){
      setasVenceu();
    }else{
      letrasVenceu();
    }
}
  
  function letrasVenceu(){
  
    fill("purple");
    rect(0, 0, metadeTela, alturaTela);
    textSize(40);
    fill("White");
    textAlign(CENTER);
    text("Letras Venceu", metadeTela/2, alturaTela/2);
  }
  function setasVenceu(){
  
    fill("purple");
    rect(metadeTela,0, larguraTela, alturaTela);
    textSize(40);
    fill("White");
    textAlign(CENTER);
    text("Setas Venceu", metadeTela+metadeTela/2, alturaTela/2);
  }

function mostraPlacar(){

  textSize(30);
  fill("DeepPink");
  text(meuPlacar, metadeTela+metadeTela/2, 30);
  text(placarOponente, metadeTela/2, 30);
}

function detectaColisaoBolinhaRaquetes(){
 
  //Colisão com a MinhaRaquete
  tocouMinhaRaquete=collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  
     if(tocouMinhaRaquete){
  //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0)
      velocidadeX *= -1;
      somRaquetada.play();
  }
  
  //Colisão com a Raquete Oponente
  tocouRaqueteOponente=collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  
  if(tocouRaqueteOponente){
  //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0)
      velocidadeX *= -1;
    somRaquetada.play();
  
  }
}

function movimentaMinhaRaquete(){

    if(keyIsDown(UP_ARROW)){
      if(yMinhaRaquete >0 )//teto
       yMinhaRaquete -= velocidadeRaquetes;}
    
    if(keyIsDown(DOWN_ARROW)){
      if(yMinhaRaquete < (alturaTela-alturaRaquete))//Chão
       yMinhaRaquete += velocidadeRaquetes;}
  
    if(keyIsDown(RIGHT_ARROW)){
       if(xMinhaRaquete < (larguraTela - larguraRaquete))//parede direita
       xMinhaRaquete += velocidadeRaquetes;}
    
    if(keyIsDown(LEFT_ARROW)){
      if(xMinhaRaquete > (metadeTela + larguraRaquete))//parede esquerda
       xMinhaRaquete -= velocidadeRaquetes;}
}
  
function movimentoRaqueteOponente(){
    
    if(keyIsDown(87)){
      if(yRaqueteOponente >0 )//W teto
         yRaqueteOponente -= velocidadeRaquetes;}
    
    if(keyIsDown(83)){
      if(yRaqueteOponente < alturaTela-alturaRaquete)// S Chão
         yRaqueteOponente += velocidadeRaquetes;}
  
    if(keyIsDown(68)){
       if(xRaqueteOponente + larguraRaquete <(metadeTela -larguraRaquete))//D parede direita
          xRaqueteOponente += velocidadeRaquetes;}
    
    if(keyIsDown(65)){
      if(xRaqueteOponente > 0)//A parede esquerda
         xRaqueteOponente -= velocidadeRaquetes;}
}

function mostraRaquete(){
  fill("#32a8a8");
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete)

  fill("#f00034");
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
  
}

function mostraBolinha(){

  //Bolinha no centro
  fill("deepPink");//para preencher a bolinha
  noStroke();
  circle(xBolinha, yBolinha, diametro);
}//fim mostra bolinha

function movimentaBolinha(){

   //Incremento de velocidade
  //xBolinha = xBolinha + velocidade; // Para fazer a bolinha se     mexer tem que fazer a variavel igual ela mesma e somar com uma     quantia, essa quantia foi definida por uma variavel
  //yBolinha = yBolinha + velocidade;
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
} //fim movimenta bolinha

function detectaColisão(){

  //Colisão com as bordas laterais
  
  //Lado direito - Meu lado 
  if (xBolinha + raio >= largura){
   velocidadeX = velocidadeX *= -1;
   placarOponente +=1;
   somPonto.play();
   velocidadeX -=aumentoVelocidade;
   velocidadeY -=aumentoVelocidade;
}
  
  // Lado esquerdo - lado oponente
  if (xBolinha - raio<= 0){
   velocidadeX = velocidadeX *= -1;
   meuPlacar +=1;
   somPonto.play();
   velocidadeX +=aumentoVelocidade;
   velocidadeY +=aumentoVelocidade;
}
  
  //Superior e Inferior
  if (yBolinha + raio >= altura || yBolinha - raio<=0 ){
   velocidadeY = velocidadeY *= -1;
}
} }//fim detecta colisão