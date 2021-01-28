class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.reset = createButton('Reset');
   
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();

    }
  
    display(){

      background(bgImg);
     
      this.input.position(300, 350);
      this.button.position(420, 420);
      this.reset.position(750, 10);
  
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(300,350);
      });
  
       this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
   
      })
  }
}
  