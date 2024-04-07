var running
var bg
var stand,boyStand
var jumping
var invisibleGround
var block1Img,block1
var block2Img,block2
var block4Img,block4
var snailImg,snail
var coinImg,coin
var coinImg1,coin1
var coinImg2,coin2
var coinImg3,coin3
var coinImg4,coin4
var coinImg5,coin5
var snailflip
var boyDead,dead
var gamestate="play"
var score=0
var block3, block3Img
var monster1Img,monster1
var nutsGroup,nuts
var ground


function preload(){
  stand=loadImage("assests/standing.png")
  running=loadAnimation("assests/running/running1.png","assests/running/running2.png","assests/running/running3.png","assests/running/running4.png","assests/running/running5.png","assests/running/running6.png","assests/running/running7.png","assests/running/running8.png")
  jumping=loadAnimation("assests/jump/jump1.png","assests/jump/jump2.png","assests/jump/jump3.png","assests/jump/jump4.png","assests/jump/jump5.png","assests/jump/jump6.png")
  block1Img=loadImage("assests/blockset1bgremoved.png")
  block2Img=loadImage("assests/blockset1bgremoved.png")
  bg=loadImage("realbg.webp")
  snailImg=loadAnimation("assests/snail1.png","assests/snail2.png","assests/snail3.png")
  coinImg=loadImage("assests/coin-removebg-preview.png")
  coinImg1=loadImage("assests/coin-removebg-preview.png")
  coinImg2=loadImage("assests/coin-removebg-preview.png")
  coinImg3=loadImage("assests/coin-removebg-preview.png")
  coinImg4=loadImage("assests/coin-removebg-preview.png")
  coinImg5=loadImage("assests/coin-removebg-preview.png")
  snailflip=loadAnimation("snail1flip.png","snail2flip.png","snail3flip.png")
  dead=loadAnimation("assests/dead/dead1.png","assests/dead/dead2.png","assests/dead/dead3.png")
  block3Img=loadImage("assests/blockset1bgremoved.png")
 monster1Img=loadImage("assests/mushrom1-removebg-preview.png")
 block4Img=loadImage("assests/blockset1bgremoved.png")
   }

function setup() {
  createCanvas(1400,500);
  // ground=createSprite(600,250,2500,600)
  // ground.addImage("background",bg)
  // ground.scale=2


   nutsGroup=new Group()
 

  boyStand=createSprite(100,295)
  boyStand.addImage("stand",stand)
  boyStand.addAnimation("go",running)
  boyStand.addAnimation("jump",jumping)
boyStand.addAnimation("deadly",dead)
  snail=createSprite(500,268,100,100)
  snail.addAnimation("snaily",snailImg)
  snail.addAnimation("snaily2",snailflip)
  snail.scale=0.9
  snail.velocityX=-1

  invisibleGround=createSprite(600,450,1800,10)
  invisibleGround.visible=false

block1=createSprite(450,300,1200,10)
block1.addImage("obstacle1",block1Img)
block1.scale=0.6
block1.debug=true
block1.setCollider("rectangle",0,0,230,50)

block2=createSprite(600,200,1200,10)
block2.addImage("obstacle2",block2Img)
block2.scale=0.6
block2.debug=true
block2.setCollider("rectangle",0,0,230,50)

block3=createSprite(800,300,1200,10)
block3.addImage("obstacle3",block3Img)
block3.scale=0.6
block3.debug=true
block3.setCollider("rectangle",0,0,230,50)

block4=createSprite(1000,300,1200,10)
block4.addImage("obstacle4",block4Img)
block4.scale=0.6
block4.debug=true
block4.setCollider("rectangle",0,0,230,50)

monster1=createSprite(1100,420,300,600)
monster1.addImage("monstery",monster1Img)
monster1.scale=0.3
monster1.velocityX=-1

coin=createSprite(500,268,100,100)
coin.addImage("coiny",coinImg)
coin.scale=0.1

coin1=createSprite(550,268,100,100)
coin1.addImage("coiny1",coinImg1)
coin1.scale=0.1

coin2=createSprite(500,268,100,100)
coin2.addImage("coiny2",coinImg2)
coin2.scale=0.1

coin3=createSprite(600,268,100,100)
coin3.addImage("coiny3",coinImg3)
coin3.scale=0.1

coin4=createSprite(650,268,100,100)
coin4.addImage("coiny4",coinImg4)
coin4.scale=0.1

coin5=createSprite(700,268,100,100)
coin5.addImage("coiny5",coinImg5)
coin5.scale=0.1

}



 
function draw() {
  
  if(gamestate==="play"){
    background(bg)
    //image(bg,width*6,0,width*6,height)
   //camera.position.x=boyStand.x
  if(keyDown(RIGHT_ARROW)){
boyStand.changeAnimation("go",running)
boyStand.x=boyStand.x+5
  }
  if(boyStand.position.x>1600){
gamestate="win"



  }
 
  
  if(keyDown(UP_ARROW)&&boyStand.y>272){
    boyStand.changeAnimation("jump",jumping)
    boyStand.velocityY=-15
    console.log(boyStand.y)
    
    
      }
      if(boyStand.collide(coin)){
       coin.destroy()
       score=score+1
        
        }
if(boyStand.collide(coin1)){
  coin1.destroy()

}
if(boyStand.collide(coin2)){
  coin2.destroy()
  }
  if(boyStand.collide(coin3)){
    coin3.destroy()
  }
  if(boyStand.collide(coin4)){
    coin4.destroy()
  }
  if(boyStand.collide(coin5)){
    coin5.destroy()
  }
if(snail.x<380){
snail.velocityX=1
snail.changeAnimation("snaily2",snailflip)
}

if(snail.x>500){
  snail.velocityX=-1
  snail.changeAnimation("snaily",snail)
  
  
  }
  if(boyStand.collide(snail)){
    boyStand.changeAnimation("deadly",dead)
    boyStand.velocityY=0
    boyStand.velocityX=0
gamestate="end"
  }

  if(boyStand.collide(monster1)){
    boyStand.changeAnimation("deadly",dead)
    boyStand.velocityY=0
    boyStand.velocityX=0
gamestate="end"
  }
  if(keyDown("space")){
shootNuts()


  }
  if(nutsGroup.collide(snail)){

  snail.destroy()
  nutsGroup.destroyEach()
  }
  if(nutsGroup.collide(monster1)){

    monster1.destroy()
    nutsGroup.destroyEach()
    }


boyStand.velocityY+=1
boyStand.collide(invisibleGround)
boyStand.collide(block1)
boyStand.collide(block2)
boyStand.collide(block3)
boyStand.collide(block4)
  drawSprites();
}else if(gamestate==="end"){
  background(0)
fill ("white")
textSize(40)
text ("oops you lost dumbo!!",width/2,height/2)

  
}
if(gamestate==="win"){
nutsGroup.destroyEach()
snail.destroy()
block1.destroy()
fill ("blue")
textSize(40)
text ("kiddos to you!!!! ",width/2,height/2)
}
}
function shootNuts(){
nuts=createSprite(boyStand.x,boyStand.y,10,10)
nuts.velocityX=2
nutsGroup.add(nuts)



}