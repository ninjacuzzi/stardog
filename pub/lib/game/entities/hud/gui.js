ig.module( 
	'game.entities.hud.gui'
	)
.requires(
	'game.entities.hud.textbox',
	'impact.entity'
	)
.defines(function(){

	EntityGui = ig.Entity.extend({

		dog: new ig.Image( 'media/dog.jpg' ),


	    // Load an animation sheet

	    init: function( x, y, settings ) {

	    	this.parent( x, y, settings );

	    	this.text = ig.game.spawnEntity('EntityTextbox', x + 50, y + 5, {});

	    },

	    check: function( other ) {
		    console.log(other);
		    // ... etc
		},

	    update: function() {
	    	this.parent();
	    },

	    draw: function( ok ) {
	    	if(ok){
		    	this.parent();
			    ig.system.context.fillRect(7, 357, 400, 102);	
		    	this.dog.draw(10, 180, 0, 0, 48, 48);
	    		ig.game.font.draw( 'Score: '+ 10, 17, 30);
	    		this.text.draw(true);
	    	}
	    }


	});

});