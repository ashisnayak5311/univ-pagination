(function ( $ ) {
 
    $.fn.greenify = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
 
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
    
    // Usage example:
    //$( "a" ).greenify(); -- default calling type
	/*$( "a" ).greenify({
	    color: "orange"	   -- Extended calling type with Accepting Options
	});*/
 // ========================================******=============================== //
    
    $.fn.showLinkLocation = function() {
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
        return this;
    };
    
// Usage example:
// $( "a" ).showLinkLocation();
    
//Before plugin is called:
//<a href="page.html">Foo</a>
 
// After plugin is called: 
//<a href="page.html">Foo (page.html)</a>
 // ========================================******=============================== //
    
}( jQuery ));
