class Game {

    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
         gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState:state
        });
    }

    start(){
        player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.display();

        gon1 = createSprite(90,90);
        gon1.addAnimation('flap',dragon);
        gon1.changeAnimation('flap');
        gon1.scale = 0.7 ;
        //butterfly.frameDelay=10;
        gon1.x = mouseX;
        gon1.y=mouseY;
        
        gon2 = createSprite(620, 280);
        gon2.addAnimation('flaps', dragon2);
        gon2.changeAnimation('flaps');
        gon2.scale = 0.9 ;
        gon2.x=mouseX;
        gon2.y=mouseY;

        gon3 = createSprite(1100, height - 100);
        gon3.addAnimation('flaps', dragon3);
        gon3.changeAnimation('flaps');
       // gon3.scale = 0.9 ;
        gon3.x=mouseX;
        gon3.y=mouseY;

        dragons = [gon1,gon2,gon3];

    }

    handleElements(){
        form.hide();
      ///  form.tittleImg.position(40,50);
      ///  form.titleImg.class("gameTitleAfterEffect");

        this.resetTitle.html("Reset Game");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width/2+485,10);

        this.resetButton.class("resetButton");
        this.resetButton.position(width/2+455,20);

    }

    play(){
        this.handleElements();
        this.handleResetButton();
        var index = 0;
        for(var plr in allPlayers){
            index = index+1;

            var x = allPlayers[plr].positionX;
            var y = allPlayers[plr].positionY;
            
            flies[index-1].position.x = x;
            flies[index-1].position.y = y;
           
            if(index == player.index){
             stroke(500);
             fill("white")
             ellipse(x,y,60,60);
           }
        }
       this.handlePlayerControls();
       drawSprites();
    }

    handlePlayerControls(){
        player.x=mouseX;
        //player.update();
        player.y=mouseY;
        player.update();

    }

    handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
            players: {},
          });
          window.location.reload();
        });
    }
}