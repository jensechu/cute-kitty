$(document).ready(function(){
    var fishLeft = $('.fish').css('left');
    var fishTop = $('.fish').css('top');
    var furs = ["#FFFFFF", "#F7941D", "#EBEBEB", "#636363", "#C69C6D", "#A186BE", "395A00", "#FFF220"];

    $("#picture img").click(function () {
	var choice = Math.floor(Math.random()*furs.length);
	$(this).css({ "background-color" : furs[choice] });

    });

    $("#picture img").droppable({
	drop: function() { 
	    $(this).attr({ src: "images/kitty_nom.png" });
	    $(".fish").hide();
	    $(this).addClass("eating");
	    $("#catty").toggleClass("placeholder");
	}
    });

    $(".fish").draggable({
	drag: function() { 
	    $("#picture img").attr({ src: "images/kitty_hungry.png" });
	    revert: true
	},
	stop: function () {
	    if($("#picture img").hasClass("eating")) { 
		setTimeout(reset_kitty, 2000);

	    }
	    else {
		reset_kitty();
	    }
	}
	
    });


    function reset_meow() {
	$("h3").html("&nbsp");
	$("h1").html("&nbsp");
    }
     
    function reset_kitty() {
	$("#picture img").attr({ src: "images/kitty.png" });
	$('.fish').css({top: fishTop,
			left: fishLeft});
	$('.fish').fadeIn("slow");
	$("#catty").toggleClass("placeholder");
    }

    $("form").submit(function () {
	var english = $("#rawr").val();
	var count = english.length;
	
	if(english == ""){
	    $("h1").html(" mrow? ");
	    $("#picture img").attr({ src: "images/kitty_confused.png" });
	    setTimeout(reset_kitty, 1000);
	    setTimeout(reset_meow, 1000)
	}
 	else {	
	    $("h3").html(" " + english + " ");
	    $("#picture img").attr({ src: "images/kitty_meow.png" });
	    setTimeout(reset_kitty, 1000);
	}

	if(count <= 3){
	    $("h1").html(" mew ");
	    setTimeout(reset_meow, 2000)
	}
	
	if(count == 5){	
	    $("h1").html(" Meoww ");
	    setTimeout(reset_meow, 2000)
	}

	if(count >= 6){	
	    $("h1").html(" rawr ");
	    setTimeout(reset_meow, 2000)
	}
	

	return false;

    });


    
    
    

});

