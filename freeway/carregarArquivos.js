//variaveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];
let imgPanda;

// São Vetores
//           DIREITA      /       ESQUERDA
let xCarro= [550, 550, 550, -60, -65, -70];
let yCarro= [45, 105, 158, 215, 270, 325];
let velocidade= [23, 31, 18, 12, 29, 13];

//Vaca das Setas
let yVaca= 368;
let xVaca=450;

//Vaca do W e S
let yPanda= 368;
let xPanda=150;

//Placar
let placarWS=0;
let placarSetas=0;

//Variaveis da Tela
altura=400;
largura=600;

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgPanda = loadImage('imagens/atorPanda.png');
  
  imgCarro[0]= loadImage('imagens/carro-1.png');
  imgCarro[1]= loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  //sons
  ponto= loadSound('sons/pontos.wav');
  atropelou= loadSound('sons/colidiu.mp3');
  trilha= loadSound('sons/trilha.mp3');
}
