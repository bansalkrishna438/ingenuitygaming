var bg, bgImage;
var mario, mario_running;
var mario_collided;
var brickGroup, brickImage;
var coinImage, coinsGroup;
var coinScore = 0;
var mushObstacleImage, turtleObstacleImage, obstaclesGroup;
var gameState = "PLAY";
var restartImg;
function preload() {
  bgImage = loadImage("images/bgnew1.jpg");
  mario_running = loadAnimation(
    "images/fish1.png"
  );
  brickImage = loadImage("images/wood1.png");
  coinImage = loadAnimation(
    "images/food1.png"

  );
  // Add Sounds
  coinSound = loadSound("sounds/coinSound.mp3");
  jumpSound = loadSound("sounds/jump.mp3");
  mushObstacleImage = loadAnimation(
    "images/octo1.png"
  );
  turtleObstacleImage = loadAnimation(
    "images/star1.png"
  );
  mario_collided = loadAnimation("images/fish3.png");
  dieSound = loadSound("sounds/dieSound.mp3");
  restartImg = loadImage("images/restart.png");
}
function setup() {
  createCanvas(1350,640);
  bg = createSprite(600, 300);
  bg.addImage(bgImage);
  bg.scale = 2;
  mario = createSprite(200, 520, 20, 50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.3;
  ground = createSprite(200, 580, 400, 10);
  brickGroup = new Group();
  coinsGroup = new Group();
  obstaclesGroup = new Group();
  mario.addAnimation("collided", mario_collided);
  restart = createSprite(700, 300);
  restart.addImage(restartImg);
  restart.visible = false;
  
}
function draw() {
  drawSprites();
  if (gameState == "PLAY") {
    // Make background Move
    bg.velocityX = -5;
    if (bg.x < 100) {
      bg.x = bg.width / 4;
    }
    // Make Mario Jump-Up
    if (keyDown("up")) {
      mario.velocityY = -10;
      // Mario Jump Sound
      jumpSound.play();
    }
    else if (keyDown("down")) {
      mario.velocityY = 4;
      // Mario Jump Sound
      jumpSound.play();
    }
    // Make Mario Come-Down
    mario.velocityY = mario.velocityY + 0.5;
    // Ground for Mario
    mario.collide(ground);
    ground.visible = false;
    generateBricks();
    // Stay on Bricks
    for (var i = 0; i < brickGroup.length; i++) {
      var temp = brickGroup.get(i);
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }
    // Mario Issue
    if (mario.x < 200) mario.x = 200;
    if (mario.y < 50) mario.y = 50;
    generateCoins();
    // Collect Coins
    for (var i = 0; i < coinsGroup.length; i++) {
      var temp = coinsGroup.get(i);
      if (temp.isTouching(mario)) {
        coinScore++;
        //Coin Sound
        coinSound.play();
        temp.destroy();
        temp = null;
      }
    }
    generateObstacles();
    if (obstaclesGroup.isTouching(mario)) {
      dieSound.play();
      gameState = "END";
    }
  }   
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);
    brickGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = .8;
    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }
  // Score Card
  textSize(30);
  fill("black");
  text("hit the baits: " + coinScore, 600, 50);
}
function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200, 120, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.3;
    brick.velocityX = -5;
    brick.lifetime = 250;
    brickGroup.add(brick);
  }
}
function generateCoins() {
  if (frameCount % 80 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = Math.round(random(80, 350));
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.2;
    coin.velocityX = -2;
    coin.lifetime = 500;
    coinsGroup.add(coin);
  }
}
function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 555, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.3;
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushObstacleImage);
        break;
      case 2:
        obstacle.addAnimation("turtle", turtleObstacleImage);
        break;
      default:
        break;
    }
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}
function restartGame() {
  gameState = "PLAY";
  obstaclesGroup.destroyEach();
  brickGroup.destroyEach();
  coinsGroup.destroyEach();
  mario.changeAnimation("running", mario_running);
  mario.scale = 0.3;
  coinScore = 0;
  restart.visible = false;
}