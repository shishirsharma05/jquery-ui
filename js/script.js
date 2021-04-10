$(document).ready(function(){
	// jqui draggable around
	$( "#dragg" ).draggable();


	// droppable
	    $( "#draggable1" ).draggable();
    	$( "#droppable1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // resizable 
    $( "#resizable" ).resizable();

    // selectable
    $( "#selectable" ).selectable();

    // Sortable
    $("#sortable").sortable();

    // Accordion
    $("#accordion").accordion();

    // button
      $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );
     
     // autocomplete
         var availableTags = ["web","development","design","BASIC","C","C++","bootstrap","javascript","jquery", "react js", "shopify","graphic","ui","Java","ux",];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // date
    $( "#datepicker" ).datepicker();

    // dialog
    $( "#dialog" ).dialog();


});


$(document).ready(function(){


    // add class
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  
// color animantion
        var state = true;
    $( "#cbutton" ).on( "click", function() {
      if ( state ) {
        $( "#ceffect" ).animate({
          backgroundColor: "blue",
          color: "#fff",
          width: 1000
        }, 800 );
      } else {
        $( "#ceffect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 800
        }, 800 );
      }
      state = !state;
    });

    // Easing
        if ( !$( "<canvas>" )[0].getContext ) {
      $( "<div>" ).text(
        "Your browser doesn't support canvas, which is required for this demo."
      ).appendTo( "#graphs" );
      return;
    }
 
    var i = 0,
      width = 100,
      height = 100;
 
    $.each( $.easing, function( name, impl ) {
      var graph = $( "<div>" ).addClass( "graph" ).appendTo( "#graphs" ),
        text = $( "<div>" ).text( ++i + ". " + name ).appendTo( graph ),
        wrap = $( "<div>" ).appendTo( graph ).css( 'overflow', 'hidden' ),
        canvas = $( "<canvas>" ).appendTo( wrap )[ 0 ];
 
      canvas.width = width;
      canvas.height = height;
      var drawHeight = height * 0.8,
        cradius = 10;
        ctx = canvas.getContext( "2d" );
      ctx.fillStyle = "black";
 
      // Draw background
      ctx.beginPath();
      ctx.moveTo( cradius, 0 );
      ctx.quadraticCurveTo( 0, 0, 0, cradius );
      ctx.lineTo( 0, height - cradius );
      ctx.quadraticCurveTo( 0, height, cradius, height );
      ctx.lineTo( width - cradius, height );
      ctx.quadraticCurveTo( width, height, width, height - cradius );
      ctx.lineTo( width, 0 );
      ctx.lineTo( cradius, 0 );
      ctx.fill();
 
      // Draw bottom line
      ctx.strokeStyle = "#555";
      ctx.beginPath();
      ctx.moveTo( width * 0.1, drawHeight + .5 );
      ctx.lineTo( width * 0.9, drawHeight + .5 );
      ctx.stroke();
 
      // Draw top line
      ctx.strokeStyle = "#555";
      ctx.beginPath();
      ctx.moveTo( width * 0.1, drawHeight * .3 - .5 );
      ctx.lineTo( width * 0.9, drawHeight * .3 - .5 );
      ctx.stroke();
 
      // Plot easing
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo( width * 0.1, drawHeight );
      $.each( new Array( width ), function( position ) {
        var state = position / width,
          val = impl( state, position, 0, 1, width );
        ctx.lineTo( position * 0.8 + width * 0.1,
          drawHeight - drawHeight * val * 0.7 );
      });
      ctx.stroke();
 
      // Animate on click
      graph.on( "click", function() {
        wrap
          .animate( { height: "hide" }, 2000, name )
          .delay( 800 )
          .animate( { height: "show" }, 2000, name );
      });
 
      graph.width( width ).height( height + text.height() + 10 );
    });

    
    

    
});


$(document).ready(function(){
// spinner
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();



  // chinning
  $("button").click(function(){
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
  });
});


