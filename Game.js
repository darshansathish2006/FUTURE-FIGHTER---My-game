class Game{
    constructor(){

    }

    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
        gameState=data.val();
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
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form = new Form();

            form.display();
        }

        player1=createSprite(200,500);
        player1.addImage("player1",LplayerImg);
        player2=createSprite(300,500);
        player2.addImage("player2",RplayerIMG);

        players = [player1,player2];
    }
    
    play(){
        form.hide();

        Player.getPlayerInfo();
        
        
        //display Backrground image
        //image(back_image,0,0,1000,800);

        var x = 100;
        var y = 200;
        var index = 0;


        drawSprites();

        for(var plr in allPlayers){
            index = index + 1;
            x = 500-allPlayers[plr].distanceX;    
            y = 500-allPlayers[plr].distanceY;
            players[index-1].x = x;
            players[index-1].y = y;
            if(index === player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr.name],x-25,y+25);
            }

        }
    }
    end(){
        console.log("gameEnded");
    
}
}