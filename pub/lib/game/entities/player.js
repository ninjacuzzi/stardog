ig.module( 
	'game.entities.player'
	)
.requires(
	'impact.entity'
	)
.defines(function(){

	EntityPlayer = ig.Entity.extend({

		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,

		size: {x: 32, y: 32},
		health: 50,

		speed: 100,

	    // Load an animation sheet
	    animSheet: new ig.AnimationSheet( 'media/RPG_maker_vx_wolf_Neo_style_by_Neofox462.png', 32, 32 ),

	    init: function( x, y, settings ) {
	    	this.parent( x, y, settings );

			this.addAnim( 'up', 0.21, [36, 37, 38, 37] );
	    	this.addAnim( 'down', 0.21, [0, 1, 2, 1] );
	    	this.addAnim( 'left', 0.21, [12, 13, 14, 13] );
	    	this.addAnim( 'right', 0.21, [24, 25, 26, 25] );

	    	this.currentAnim = this.anims.down;
	    	this.directionHor = 'none';
	    	this.directionVer = 'down';
	    	this.moveHor = 'none';
	    	this.moveVer = 'none';
	    	this.state = 'idle';
	    },

	    check: function( other ) {
		    console.log(other);
		    // ... etc
		},

	    update: function() {

	    	if(ig.input.state('up') && !ig.input.state('down')){
	    		this.vel.y = -this.speed;
	    		this.currentAnim = this.anims.up;
	    		this.directionVer = 'up';
	    		this.state = 'isMoving';
	    		if(!ig.input.state('left') && !ig.input.state('right'))
	    			this.directionHor = 'none';
	    	}
	    	if(ig.input.state('down') && !ig.input.state('up')){
	    		this.vel.y =  this.speed;
	    		this.currentAnim = this.anims.down;
	    		this.directionVer = 'down';
		    	this.moveVer = 'down';
	    		this.state = 'isMoving';
	    		if(!ig.input.state('left') && !ig.input.state('right'))
	    			this.directionHor = 'none';
	    	}
	    	if(ig.input.state('left') && !ig.input.state('right')){
	    		this.vel.x = -this.speed;
	    		this.currentAnim = this.anims.left;
	    		this.directionHor = 'left';
		    	this.moveHor = 'left';
	    		this.state = 'isMoving';
	    		if(!ig.input.state('up') && !ig.input.state('down'))
	    			this.directionVer = 'none';
	    	}
	    	if(ig.input.state('right') && !ig.input.state('left')){
	    		this.vel.x = this.speed;
	    		this.currentAnim = this.anims.right;
	    		this.directionHor = 'right';
		    	this.moveHor = 'right';
	    		this.state = 'isMoving';
	    		if(!ig.input.state('up') && !ig.input.state('down'))
	    			this.directionVer = 'none';
	    	}
	    	if(!ig.input.state('up') && !ig.input.state('down')){
	    		this.vel.y = 0;
		    	this.moveVer = 'none';	    		
	    	}
	    	if(!ig.input.state('left') && !ig.input.state('right')){
	    		this.vel.x = 0;
		    	this.moveHor = 'none';	    		
	    	}
	    	if(!ig.input.state('up') && !ig.input.state('down') && !ig.input.state('left') && !ig.input.state('right'))
	    		this.state = 'idle';
	    	
	    	this.parent();
	    }

	});

});