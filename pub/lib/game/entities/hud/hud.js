ig.module( 
	'game.entities.hud.hud'
	)
.requires(
    'game.entities.hud.textbox',
	'game.entities.hud.hudcomponent'
	)
.defines(function(){

	EntityHud = EntityHudcomponent.extend({

	    // Load an animation sheet
		dog: new ig.Image( 'media/dog.jpg' ),

	    init: function( x, y, settings ) {

	    	this.parent( x, y, settings );
	    	var textbox1 = ig.game.spawnEntity('EntityTextbox', x + 50, y + 5, {});
	    	this.childrenHC.push(textbox1);

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
			    ig.system.context.fillRect(7, 357, 400, 102);	
		    	this.dog.draw(10, 180, 0, 0, 48, 48);
	    		ig.game.font.draw( 'Score: '+ 10, 17, 30);
		    	this.parent( ok );
	    	}
	    }


	});

});