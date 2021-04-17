var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg, fairy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairy = createSprite(150,500);
	fairy.addAnimation("fairy", fairyImg);
	fairy.scale = 0.25;
	fairy.setCollider("rectangle",500,-50,110,120);
	fairyVoice.play();
	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
	Engine.update(engine);
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
	keyPressed();
	if(fairy.isTouching(star)){
		Matter.Body.setStatic(starBody,true);
	}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX = -5;
	}

	else if(keyDown("RIGHT_ARROW")){
		fairy.velocityX = 4;
	}else{
	fairy.velocityX = 0;}
	//writw code to move fairy left and right
	
}
