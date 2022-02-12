var ground,fruits,basket, basketimg;
var fruitGroup, badFruitGroup;
var score=0;

function preload() {
    badApple = loadImage("bad apple.png");
    badStrawberry = loadImage("strawberrybad.png");
    banana = loadImage("banana.png");
    dragonfruit = loadImage("Dragon fruit.png");
    lychee = loadImage("lychee.png");
    orange = loadImage("orange.png");
    forestbackground = loadImage("forest.jpg");
    grapes = loadImage("purple grapes.png");
    apple = loadImage("red apple.png");
    strawberry = loadImage("strawberry.png");
    basketimg = loadImage("basket.png")
    

}

function setup(){
    var canvas = createCanvas(1200,600);
 
    ground = createSprite(600,590,1200,20);
    basket = createSprite(600, 500, 100,100)
    basket.addImage(basketimg);
    basket.scale= 0.3
    fruitGroup = new Group();
    badFruitGroup = new Group();
    
}

function draw(){
    background(forestbackground);
   
    basket.x = World.mouseX;

    if (frameCount % 40 === 0 ){
       fruits = createSprite(random(100, 1100),0,100,100)
       fruits.velocityY = 5;
        var rand = Math.round(random(1,6));
        switch(rand){
            case 1: fruits.addImage(lychee);
            fruits.scale= 0.07
            break;
            case 2: fruits.addImage(orange);
            fruits.scale= 0.07
            break;
            case 3: fruits.addImage(grapes);
            fruits.scale= 0.07
            break;
            case 4: fruits.addImage(apple);
            fruits.scale= 0.07
            break;
            case 5: fruits.addImage(strawberry);
            fruits.scale= 0.07
            break;
            case 6: fruits.addImage(banana);
            fruits.scale= 0.07
            break;
        }
        fruitGroup.add(fruits);

        badfruits = createSprite(random(100, 1100),0,100,100)
       badfruits.velocityY = 5;
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: badfruits.addImage(badApple);
            badfruits.scale= 0.07
            break;
            case 2: badfruits.addImage(badStrawberry);
            badfruits.scale= 0.07
            break;
            case 3: badfruits.addImage(dragonfruit);
            badfruits.scale= 0.05
        }

        badFruitGroup.add(badfruits);
    }
    
    textSize(25)
    text("Score:"+score,50,50)
    
    
        for(var i = 0; i<fruitGroup.length ;i++){
         if(fruitGroup.get(i).isTouching(basket)){
             fruitGroup.get(i).destroy()
             score+=1
    }
    }
    for(var i = 0; i<badFruitGroup.length ;i++){
        if(badFruitGroup.get(i).isTouching(basket)){
            badFruitGroup.get(i).destroy()
            score-=1
   }
   }

    drawSprites();
}
