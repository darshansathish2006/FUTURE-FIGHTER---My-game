class Form{

    constructor(){
      this.title = createElement("h2");
      this.input=createInput("Name");
      this.button=createButton("play");
      this.greeting=createElement("h2");
      this.reset=createButton("restart");      
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        this.reset.hide();
    }

    display(){
        this.title.html("MULTI-SHOOTER");
        this.title.position(350,50);
        this.title.style('font-size','70px');
        this.title.style('color','yellow');
        this.input.position(550,150);
        this.input.style('width','200px');
        this.input.style('height','20px');
        this.input.style('background','lavender');
        this.button.position(560,250);
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('background','lightpink');
        this.reset.position(900,660);
        this.reset.style('width','100px');
        this.reset.style('height','30px');
        this.reset.style('background','lightpink');  


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("WELCOME"+player.name + "Waiting for another player to log in");
            this.greeting.position(400,250);
            //this.greeting.style('font-size','100px');
            //this.greeting.style('color','white');
        });
        
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
    }
}