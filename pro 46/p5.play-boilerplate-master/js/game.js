class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
       
      }

        xPlayer = createSprite(400, 400, 100, 100);
        xPlayer.addImage(xImg);
       xPlayer.scale = 0.7;

        b1 = createSprite(150, 150, 200, 200);
        b2 = createSprite(400, 150, 200, 200);
        b3 = createSprite(650, 150, 200, 200);

        b4 = createSprite(150, 400, 200, 200);
        b5 = createSprite(400, 400, 200, 200);
        b6 = createSprite(650, 400, 200, 200);

        b7 = createSprite(150, 650, 200, 200);
        b8 = createSprite(400, 650, 200, 200);
        b9 = createSprite(650, 650, 200, 200);
     

       
        
    }
  
    play(){
        background(127);
        form.hide();
        stroke("black");
        strokeWeight(15);
        line(30, 30, 30, 770)
        line(275, 30, 275, 770);
        line(527, 30, 527, 770);
        line(770, 30, 770, 770);

        line(30, 30, 770, 30);
        line(30, 275, 770, 275);
        line(30, 527, 770, 527);
        line(30, 770, 770, 770);
    
        b1.shapecolor = "red";
        b2.shapecolor = "white";
        b3.shapecolor = "white";
        b4.shapecolor = "white";
        b5.shapecolor = "white";
        b6.shapecolor = "white";
        b7.shapecolor = "white";
        b8.shapecolor = "white";
        b9.shapecolor = "white";   

    

      drawSprites();
      
    }

  
  
  playing(){
   turn_1();

   }

  turn_1(){

    if(mousePressedOver(b1)){
      xPlayer.visible = true;
      xPlayer.x = 75;
      xPlayer.y = 75;

    } 
    else if (mousePressedOver(b2)){
      
    }
    
    
    
   
  }

}