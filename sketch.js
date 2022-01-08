var path,power,runner;
var pathImg,powerImg,runnerImg
var limiteDireito,limiteEsquerdo;


function preload(){
  //imagens pré-carregadas
  runnerImg = loadAnimation("runner-1.png","runner-2.png","runner-1.png","runner-2.png");
    
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  background("black");

  path=createSprite(200,200);
  path.addImage(pathImg);
  
  path.scale=1.3;

  
  runner = createSprite(130,300,30,30);
  runner.addAnimation("movingRunner",runnerImg);
  runner.scale =0.10;
  limiteDireito = createSprite(390,200,30,400);
  limiteDireito.visible = false;
  limiteEsquerdo = createSprite(20,200,20,400);
  limiteEsquerdo.visible = false;

}


function draw() {
  background("black");
  drawSprites();
  runner.x= World.mouseX;
  runner.collide(limiteDireito);
  runner.collide(limiteEsquerdo);
  
  path.velocityY = 5;  
  if (path.y > 400){
    path.y = height/2;
  }

  
  //leftBoundary.invisible = false;
  //leftBoundary.visible = true;
  //leftBoundary.invisible = true;
  //leftBoundary.visible = false;
}



