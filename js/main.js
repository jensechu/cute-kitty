$(document).ready(function(){

    var furs = ["#F7941D", "#EBEBEB", "#636363", "#C69C6D", "#A186BE", "395A00", "#FFF220"];

    $("#picture img").click(function () {
	var choice = Math.floor(Math.random()*furs.length);
	$(this).css({ "background-color" : furs[choice] });

    });


    $("#picture img").draggable();

    $("#picture img").droppable({
	drop: function() { 
	    $(this).attr({ src: "images/kitty_nom.png" });
	    $(".fish").css({ "display" : "none" });
	    $(".fish").reset();
	}
    });

    $(".fish").draggable({
	drag: function() { 
	    $("#picture img").attr({ src: "images/kitty_hungry.png" });
	    revert: true
	},
	stop: function () {
	    $("#picture img").attr({ src: "images/kitty.png" });
	}
	
    });
     

    var meow = ["meow", "mrrrrrrrrrow", "mew"];

    $("#mrow").click(function () {
	var mew = Math.floor(Math.random()*meow.length);
	$("h1 em").html(" " +  meow[mew] + " "); 
	return false;

    });

	

    
    
    

});

