var ground,moon,moon1;
var moonImg;
var trex,i=15,j=0;
var wall1,wall2,wall3;
var gameState=0,s;

function preview(){
  moonImg = loadImage("images/moon.png");
}

function setup() {
  createCanvas(1200,800);
  //moon = createSprite(1000, 100, 50, 50);
  //moon.addImage("moon",moonImg);
  ground = createSprite(600,750,1200,10);  
  ground.visible = false;
  trex = createSprite(100,715,25,55);
  trex.shapeColor = "green";
  wall1 = createSprite(10,400,10,800);
  wall1.visible = false;
  wall3 = createSprite(600,20,1200,10);
  wall3.visible = false;
  wall2 = createSprite(1190,400,10,800);
  wall2.visible = false;
  moon = createSprite(1200,0,0,0);  
  moon.visible = false;
  moon1 = createSprite(0,0,0,0);  
  moon1.visible = false;
}

function draw() {
  background(0)  

  //pregame
  if (gameState===0)
  {
    trex.visible = true;
    textSize(50);
    text("Welcome to the Game", 300,100);

    textSize(30);
    text("press space to start the Game", 350,200);

    if (keyDown("space"))
    {
      gameState=1;
    }
  }

  console.log(gameState);

  //gameState=1
  if(gameState===1)
  {
      if(keyDown(RIGHT_ARROW))
    {
      trex.x+=15;
    }

    if(keyDown(LEFT_ARROW))
    {
      trex.x-=15;
    }

    if(keyDown(UP_ARROW))
    {
      trex.y-=15;
    }

    if(keyDown(DOWN_ARROW))
    {
      trex.y+=15;
    }
    s = Math.round(random(1,2));
    //console.log(s);

    //horizontal moons
    if(frameCount%75===0)
    {
      i++;
      
      if(s===1)
      {
        moon = createSprite(0,random(50,750),50,50);
        moon.lifetime = 75; 
        moon.velocityX=i;        
        
        //moon.velocityX+=20;
      }
      else
      {
        moon = createSprite(1200,random(50,750),50,50);
        moon.lifetime = 75;
        moon.velocityX=-i;        
        //moon.velocityX-=20;
      }     
      
    }

    //vertical moons
    if(frameCount%100===0)
    {      
      
      if(s===1)
      {
        moon1 = createSprite(random(25,1175),0,50,50);
        moon1.lifetime = 99; 
        moon1.velocityY=i; 
        //moon.velocityX+=20;
      }
      else
      {
        moon1 = createSprite(random(25,1175),800,50,50);
        moon1.lifetime = 99; 
        moon1.velocityY=-i;
        //moon.velocityX-=20;
      }     
      
    }    

    trex.collide(wall1);
    trex.collide(wall2);
    trex.collide(ground);
    
  }

  if(trex.isTouching(moon))
  {
    gameState=2;
  }    

  if(trex.isTouching(moon1))
  {
    gameState=2;
  }

  //endgame
  if(gameState===2)
  {
    textSize(50);
    text("GAME OVER",450,350);
    textSize(30);
    text("Press r to restart",475,500);
  }

  if (gameState===2)
  {
    trex.visible=false;

    if(keyDown("r"))
    {
      gameState=0;
    }
  }
  
  drawSprites();
}