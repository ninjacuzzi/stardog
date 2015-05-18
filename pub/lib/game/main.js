ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.image',
	'game.levels.2',
	'game.entities.player',
	'game.entities.hud.hud'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/04b03.font.png' ),
	
	heart: new ig.Image( 'media/heart_16.png' ),

	init: function() {
		this.socket = new io();
		this.socket.connect();

		$.ajax({
		    url: '/api',
		    type: 'GET',
		    success: function(res) {
		    	console.log(res);
		    }
		});

		ig.music.add( 'media/5.ogg' );
		//ig.music.play();

		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.SPACE, 'space');

		this.loadLevel(Level2);

		ig.game.spawnEntity('EntityPlayer', 0, 0, {});
		
		this.hud = ig.game.spawnEntity('EntityHud', 10, 180, {});

	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
		var player = this.getEntitiesByType(EntityPlayer)[0];
		if(player){
			this.screen.x = player.pos.x - ig.system.width/2;
			this.screen.y = player.pos.y - ig.system.height/2;

			if(player.vel.x!=0 || player.vel.y!=0)
				;//this.socket.emit('position', {nickname:this.nickname, x:player.pos.x, y:player.pos.y});
		}



	},
	
	draw: function() {


		// Draw all entities and backgroundMaps
		this.parent();
		
		// Add your own drawing code here
		this.heart.draw( 10, 10 );
		this.heart.draw( 30, 10 );
		this.heart.draw( 50, 10 );

		this.hud.draw(true);
	}

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
