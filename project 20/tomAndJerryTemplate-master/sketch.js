var backgrounds,backgroundImg;
var jerry,jerryImg,jerryImg2;
var tom,tomImg,tomImg2,tomImg3;


function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png");
    jerryImg=loadImage("images/jerryOne.png");
    jerryImg2=loadImage("images/jerryTwo.png","images/jerryThree.png",);

    tomImg=loadImage("images/tomOne.png");
    tomImg2=loadImage("images/tomTwo.png","images/Three.png");
    tomImg3=loadImage("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    backgrounds = createSprite(500,500);
    backgrounds.addImage("landscape",backgroundImg);
    //create tom and jerry sprites here
     tom = createSprite(900,700);
     tom.addImage("cat",tomImg);
     tom.scale=0.15;

     jerry = createSprite(200,700);
     jerry.addImage("mouse",jerryImg);
     jerry.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if (tom.x-jerry.x<(tom.width-jerry.width)/2 && 
     tom.y-jerry.y<(tom.height-jerry.height)/2 ) {
         
         tom.addAnimation("tomstops",tomImg3);
         tom.changeAnimation("tomstops",tomImg3);
         tom.velocityX=0;
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if (keyCode===LEFT_ARROW) {
       tom.velocityX=-5;
       tom.addAnimation("tomruns",tomImg2);
       tom.changeAnimation("tomruns",tomImg2);

       jerry.addAnimation("jerrylaugh",jerryImg2);
       jerry.changeAnimation("jerrylaugh",jerryImg2);

   }

}
