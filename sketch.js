var avion,dragon;
var avionAnimation,dragonImg;
var gameState = "play";
var obstacle,obstaclesGroup,obstacleImg;
var gameOver, wintext;
var attack,attackGroup,attackImg;
var life;
var score = 1000;

function preload()
{
    avionAnimation = loadAnimation("./Assets/avion.png","./Assets/avion2.png","./Assets/avion3.png","./Assets/avion4.png","./Assets/avion5.png","./Assets/avion6.png","./Assets/avion7.png","./Assets/avion8.png");
    dragonImg = loadImage("./Assets/dragon.png");
    backgroundImg = loadImage("./Assets/background.jpg");
    background2Img = loadImage("./Assets/winbackground.jpg");
    obstacleImg = loadImage("./Assets/Obstacle.png");
    gameOverImg = loadImage("./Assets/Game Over.png");
    wintextImg = loadImage("./Assets/wintext.png");
    attackImg = loadImage("./Assets/attack.png");
    life1Img = loadImage("./Assets/Life/1.png");
    life2Img = loadImage("./Assets/Life/2.png");
    life3Img = loadImage("./Assets/Life/3.png");
    life4Img = loadImage("./Assets/Life/4.png");
    life5Img = loadImage("./Assets/Life/5.png");
    life6Img = loadImage("./Assets/Life/6.png");
    life7Img = loadImage("./Assets/Life/7.png");
    life8Img = loadImage("./Assets/Life/8.png");
    life9Img = loadImage("./Assets/Life/9.png");
    life10Img = loadImage("./Assets/Life/10.png");
    life11Img = loadImage("./Assets/Life/11.png");
    life12Img = loadImage("./Assets/Life/12.png");
    life13Img = loadImage("./Assets/Life/13.png");
    life14Img = loadImage("./Assets/Life/14.png");
    life15Img = loadImage("./Assets/Life/15.png");
    life16Img = loadImage("./Assets/Life/16.png");
    life17Img = loadImage("./Assets/Life/17.png");
    life18Img = loadImage("./Assets/Life/18.png");
    life19Img = loadImage("./Assets/Life/19.png");
    life20Img = loadImage("./Assets/Life/20.png");
}

function setup() 
{
    createCanvas(windowWidth,windowHeight);

    avion = createSprite(width/10,height/2,20,20);
    avion.addAnimation("avion",avionAnimation);
    avion.scale=1.1;
    dragon = createSprite(width-140,height/2-20,20,20);
    dragon.addImage("dragon",dragonImg);
    dragon.scale=3;
    
    
    obstaclesGroup = new Group();
    attackGroup = new Group();

    gameOver = createSprite(width/2,height/2- 50);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 2;
    gameOver.visible = false;

    wintext = createSprite(width/2,height/2- 50);
    wintext.addImage(wintextImg);
    wintext.scale = 5;
    wintext.visible = false;

    life = createSprite(width-150,height/6,20,20);
    life.addImage(life1Img)
}

function draw() 
{
    var invisibleBlock = createSprite(windowWidth/2,windowHeight-140,windowWidth,10)
    invisibleBlock.visible = false;
    avion.collide(invisibleBlock);
    var invisibleBlock2 = createSprite(windowWidth/2,30,windowWidth,10)
    invisibleBlock2.visible = false;
    avion.collide(invisibleBlock2);
    var invisibleBlock3 = createSprite(windowWidth-windowWidth/4,windowHeight/2,10,windowHeight)
    invisibleBlock3.visible = false;
    avion.collide(invisibleBlock3);

    image(backgroundImg,0,0,windowWidth,windowHeight);

    edges= createEdgeSprites();
    avion.collide(edges);
    if (gameState === "play")
    {
        spawnObstacles();
    }
    if (gameState === "play"||gameState === "play2"||gameState === "play3")
    {
        if (keyDown("UP_ARROW"))
        {
            avion.y = avion.y-5;
        }
        if (keyDown("RIGHT_ARROW"))
        {
            avion.x = avion.x+5;
        }
        if (keyDown("LEFT_ARROW"))
        {
            avion.x = avion.x -5; 
        }
        if (keyDown("DOWN_ARROW"))
        {
            avion.y = avion.y +5; 
        }
        if (avion.isTouching(obstaclesGroup))
        {
            avion.destroy();
            gameState = "End";
        }
        if (dragon.isTouching(attackGroup))
        {
            score = score-1;
        }
        if (score === 400)
        {
            dragon.visible = false;
            gameState = "win";
        }
        spawnAttack();
        setlife();
    }
    if (gameState === "play2")
    {
        spawnObstacles2();
    }
    if (gameState === "play3")
    {
        spawnObstacles3();
    }
    if (gameState === "End")
    {
        gameOver.visible = true;
    }        
    if (gameState === "win")
    {
        image(background2Img,0,0,windowWidth,windowHeight);
        life.visible = false;
        wintext.visible = true;
    }
    drawSprites();
}

function spawnObstacles()
{
    if (frameCount%50 === 0)
    {
        var obstacle = createSprite(windowWidth/2+(windowWidth/4));
        obstacle.y = Math.round(random(120,400));
        obstacle.addImage(obstacleImg);
        obstacle.scale=1.5;
        obstacle.velocityX = -6;
        obstacle.lifetime = 150;

        obstaclesGroup.add(obstacle);
    }
    if (frameCount%500 === 0)
    {
        gameState = "play2";
    }
}
function spawnObstacles2()
{
    if (frameCount%50 === 0)
    {
        var obstacle = createSprite(windowWidth/2+(windowWidth/4));
        obstacle.y = Math.round(random(120,400));
        obstacle.addImage(obstacleImg);
        obstacle.scale=1;
        obstacle.velocityX = -6;
        obstacle.lifetime = 150;

        obstaclesGroup.add(obstacle);

        var obstacle = createSprite(windowWidth/2+(windowWidth/4));
        obstacle.y = Math.round(random(10,400));
        obstacle.addImage(obstacleImg);
        obstacle.scale=1;
        obstacle.velocityX = -6;
        obstacle.lifetime = 150;

        obstaclesGroup.add(obstacle);

        var obstacle = createSprite(windowWidth/2+(windowWidth/4));
        obstacle.y = Math.round(random(100,400));
        obstacle.addImage(obstacleImg);
        obstacle.scale=1;
        obstacle.velocityX = -6;
        obstacle.lifetime = 150;

        obstaclesGroup.add(obstacle);

    }
    if (frameCount%1000 === 0)
    {
        gameState = "play3";
    }
}
function spawnObstacles3()
{
  if (frameCount%75 === 0)
  {
    var obstacle = createSprite(windowWidth/2+(windowWidth/4));
    obstacle.y = Math.round(random(100,400));
    obstacle.addImage(obstacleImg);
    obstacle.scale=4;
    obstacle.velocityX = -5;
    obstacle.lifetime = 150;

    obstaclesGroup.add(obstacle);
  }
  if (frameCount%1600 === 0)
  {
      gameState = "play";
  }
}
function spawnAttack()
{
    if (frameCount%150 === 0)
    {
        var attack = createSprite();
        attack.y = avion.y;
        attack.x = avion.x;
        attack.addImage(attackImg);
        attack.scale=1.5;
        attack.velocityX = 7;
        attack.lifetime = 150;

        attackGroup.add(attack);
    }
}
function setlife()
{
    if (score === 970)
    {
        life.addImage(life2Img);
    }
    if (score === 940)
    {
        life.addImage(life3Img);
    }
    if (score === 910)
    {
        life.addImage(life4Img);
    }
    if (score === 880)
    {
        life.addImage(life5Img);
    }
    if (score === 850)
    {
        life.addImage(life6Img);
    }
    if (score === 820)
    {
        life.addImage(life7Img);
    }
    if (score === 790)
    {
        life.addImage(life8Img);
    }
    if (score === 760)
    {
        life.addImage(life9Img);
    }
    if (score === 730)
    {
        life.addImage(life10Img);
    }
    if (score === 700)
    {
        life.addImage(life11Img);
    }
    if (score === 670)
    {
        life.addImage(life12Img);
    }
    if (score === 640)
    {
        life.addImage(life13Img);
    }
    if (score === 610)
    {
        life.addImage(life14Img);
    }
    //if (score === 580)
    //{
    //    life.addImage(life15Img);
    //}
    if (score === 550)
    {
        life.addImage(life16Img);
    }
    if (score === 520)
    {
        life.addImage(life17Img);
    }
    if (score === 490)
    {
        life.addImage(life18Img);
    }
    if (score === 460)
    {
        life.addImage(life19Img);
    }
    if (score === 430)
    {
        life.addImage(life20Img);
    }
}
