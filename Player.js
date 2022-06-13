class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.lifeLine = 100;
        this.distanceX = 0;
        this.distanceY = 0;
    }

    getCount(){
        database.ref('playerCount').on('value',(data)=>{
            playerCount=data.val();
        })
    }

    updateCount(){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name  : this.name,
            distanceX  : this.distanceX,
            distanceY : this.distanceY
        })
    }

  static getPlayerInfo(){
      database.ref('players').on("value",(data)=>{
          allPlayers = data.val();
      })
  }
  
}