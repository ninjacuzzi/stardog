ig.module( 
	'game.entities.hud.hudcomponent'
	)
.requires(
	'impact.entity'
	)
.defines(function(){

	EntityHudcomponent = ig.Entity.extend({

		childrenHC: [],

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

	    draw: function( ok ) {
	    	if(ok){
		    	this.parent();
		    	for (var i = 0; i < this.childrenHC.length; i++)
				    this.childrenHC[i].draw( ok );
	    	}
	    }


	});

});