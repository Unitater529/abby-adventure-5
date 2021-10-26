var PLAY = 1;
var END = 0;
var gameState = PLAY;
var fox1;
var farm;
var monster;
var monster1, monster2;
var food,food1,food2,food3;
var score=0;
var foods;
var monsterGroup;
var foodGroup;


function preload(){
fox1=loadAnimation("images/fox-1.png","images/fox-2.png","images/fox-3.png","images/fox-4.png","images/fox-5.png");
farm=loadImage("images/farm1.png");
monster1=loadImage("images/Monster-01.png")
monster2=loadImage("images/Monster-02.png")
food=loadImage("images/donut-1.png")
food1=loadImage("images/banana1.png")
food2=loadImage("images/peanut-1.png")
food3=loadImage("images/treat1.png")



}


function setup(){
createCanvas(displayWidth,displayHeight);
farm1 = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.2,displayHeight*1.2);
fox = createSprite(250,displayHeight/2+50,displayWidth,displayHeight);

fox.addAnimation("fox1",fox1);
farm1.addImage(farm);
farm1.scale= 2.3;
 monsterGroup= createGroup();
 foodGroup= createGroup();


}

function draw(){
   
  if (farm1.x<0){
      farm1.x=farm1.width/2;
  }
    farm1.velocityX= -10;
  spawn();
  drawSprites();
  textSize(20)
  text("Score: " + score, 500, 50);
    
  spawnFood();
}


function spawn(){
if (frameCount % 60===0 ){
    monster = createSprite(displayWidth/2-10,displayHeight/3,50,100)
    monster.velocityY= 10
    monster.x= random(50,displayWidth)

    var rand=Math.round(random(1,2));
    switch(rand){
        case 1 :
            monster.addImage(monster1);
            break;
        case 2 :
            monster.addImage(monster2);
            break;
    }
    monster.scale=0.09
    monsterGroup.add(monster);
}


}

function spawnFood(){
    if (frameCount% 80===0){
        foods = createSprite(displayWidth/2,displayHeight/2+100,50,70);
        foods.velocityX=-6;
        foods.x=random(100,displayWidth)
        

        var rand=Math.round(random(1,4))
        switch(rand){
case 1 :
    foods.addImage(food)
    break;
case 2 :
    foods.addImage(food1)
    break;
case 3 :
    foods.addImage(food2)
    break;
case 4 :
    foods.addImage(food3)
    break;
    
    

        }
foods.scale=0.3
foodGroup.add(foods);


    }
    
}
