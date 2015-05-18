ig.module(
    
    'game.entities.hud.textbox'
    
)

.requires(
    
    'game.entities.hud.hudcomponent'

)

.defines(function() {
    
    EntityTextbox = EntityHudcomponent.extend ({
        
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(200, 0, 0, 0.7)',
    size: {x: 24, y: 32},
    
    
    textfont: new ig.Font( 'media/04b03.font.png'),
    text:'loooooooool does it even make sense or i m not the neo hey this is the end\n', // set in Weltmeister
    print: [],
    realprint: '',
    printc: 0,
    linec: 0,
        
    duration: 5,
    durationTimer: null,
    nextEmit: null,
    
    
    init: function( x, y, settings ) {
        this.parent( x, y, settings );
        this.durationTimer = new ig.Timer();
        this.nextEmit = new ig.Timer();
        this.x = x;
        this.y = y;

        this.durationTimer.set( 5 );
    },
    
    writetext: function() {
            
    var canx = ig.system.getDrawPos( this.x ),
    cany = ig.system.getDrawPos( this.y ),
    rectw = this.textfont.widthForString( this.realprint ) * 2,
    recth = this.textfont.heightForString( this.realprint ) * 2;
    

        //ig.system.context.fillRect( 10, 10, 100, 100);
        
    if( this.durationTimer.delta() < 0 && this.nextEmit.delta() >= 0 ) {
        
        ig.system.context.fillRect( canx, cany, rectw + 2, recth + 2 );
        
        var text = this.text;
                
        this.print = text.split("");
        
        var i = 0;
            
        while ( i < 1 ) {
            if ( this.printc <= this.print.length && this.realprint.length <= this.print.length ) {
        
                this.realprint = this.realprint + this.print[this.printc];
                this.printc = this.printc + 1;
                this.linec = this.linec + 1;
                i = i + 1;
                
                if ( this.linec >= this.size.x && this.realprint.charAt(this.realprint.length-1) == " " ) { // line break problem manually solved.
                    
                    this.realprint = this.realprint + '\n';
                    this.linec = 0;
                }
            
            } else {
                this.printc = 0;
                this.linec = 0;
                break;
            }
        } 
            
        this.textfont.draw ( this.realprint, this.x + 2, this.y + 2, ig.Font.ALIGN.LEFT );
                
    } else {
            
            this.realprint = '';
    
        }
        
        
    },
    
    draw: function (ok){
        if(ok) {
            this.writetext();
            this.parent( ok );
        }        
    },
    
    
    
    update: function(){
        
    
          
     this.parent();
     
     
    },
    
    
    
    
    });
    

});
