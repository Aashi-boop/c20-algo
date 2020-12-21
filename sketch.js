var fr,mr;


function setup() 
{
  createCanvas(800,400);

  fr=createSprite(200, 200, 50, 80);
  mr=createSprite(400,200,80,30);

  fr.shapeColor="green"
  mr.shapeColor="blue"

  

  mr.velocityX= -2
  fr.velocityX= 2;
 

}

function draw() {
  background(0);  


 // mr.x=World.mouseX;
 // mr.y=World.mouseY;

  drawSprites();

  console.log(fr.x + "    fr.x")
  console.log(mr.x + "    mr.x")
  console.log(mr.x-fr.x + "     mr-fr");
  console.log(fr.x-mr.x + "fr-mr");
  console.log(mr.width/2 + fr.width/2 + "    sum of half width")


 
   if(mr.x-fr.x < mr.width/2 + fr.width/2 &&
     fr.x-mr.x < mr.width/2 + fr.width/2 &&
    fr.y-mr.y < mr.height/2 + fr.height/2 &&
     mr.y-fr.y < mr.height/2 + fr.height/2 )
   {
   fr.shapeColor="red"
   mr.shapeColor="red"
   
 mr.velocityX= mr.velocityX*(-1);
 fr.velocityX= fr.velocityX*(-1);

 
   }
 else
  {
   fr.shapeColor="green"
  mr.shapeColor="blue"
  }
  
}


