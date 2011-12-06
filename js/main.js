$(document).ready(function(){
    var furs = ["#FFFFFF", "#F7941D", "#EBEBEB", "#636363", "#C69C6D", "#A186BE", "395A00", "#FFF220"];

    $("#picture img").click(function () {
	var choice = Math.floor(Math.random()*furs.length);
	$(this).css({ "background-color" : furs[choice] });

    });

    var fishLeft = $('.fish').css('left');
    var fishTop = $('.fish').css('top');
    
    function reset_kitty() {
	$("#picture img").attr({ src: "images/kitty.png" });
	$('.fish').css({top: fishTop,
			left: fishLeft});
	$('.fish').fadeIn("slow");
    }

    $("#picture img").droppable({
	drop: function() { 
	    $(this).attr({ src: "images/kitty_nom.png" });
	    $(this).addClass("eating");
	    $(".fish").hide();
	}
    });

    $(".fish").draggable({
	drag: function() { 
	    $("#picture img").attr({ src: "images/kitty_hungry.png" });
	    revert: true;
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
	$("h3").text("");
	$("h1").text("");
	$("#kitty-speech").removeClass("kitty-bubble");
	$("#user-speech").removeClass("input-bubble");
	$("#user-input").val("");
    }


    $("form").submit(function () {
	var english = $("#user-input").val();
	var count = english.length;

	$("#kitty-speech").addClass("kitty-bubble");
	
	if(english == ""){
	    $("h1").text(" mrow? ");
	    $("#picture img").attr({ src: "images/kitty_confused.png" });
	}

 	else {
	    $("#user-speech").addClass("input-bubble");	
	    $("h3").text(" " + english + " ");
	    $("#picture img").attr({ src: "images/kitty_meow.png" });
	    

	    if(count <= 4){
		$("h1").text(" mew ");
	    }
	    
	    if(count >= 5){	
		$("h1").text(" Meoww ");
	    }

	    if(count == 10){	
		$("h1").text(" rawr ");
	    }

	}
	setTimeout(reset_kitty, 2000);
	setTimeout(reset_meow, 2000);

	return false;

    });


    
    
    

});

