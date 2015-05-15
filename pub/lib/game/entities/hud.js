ig.module( 
	'game.entities.hud'
	)
.requires(
	'impact.entity'
	)
.defines(function(){

	EntityHud = ig.Entity.extend({

		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,

		size: {x: 48, y: 48},
		health: 50,

		speed: 100,
		dog: new ig.Image( 'media/dog.jpg' ),

	    // Load an animation sheet

	    init: function( x, y, settings ) {

	    	this.parent( x, y, settings );

	    },

	    check: function( other ) {
		    console.log(other);
		    // ... etc
		},

	    update: function() {
	    	this.parent();
	    },

	    draw: function() {
	    	this.parent();
	    	this.dog.draw(10, 180);
	    	ig.game.font.draw( 'Score: '+ 10, 17, 30);
	    }


	});

});