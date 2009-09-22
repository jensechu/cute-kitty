$(document).ready(function(){
    var fishLeft = $('.fish').css('left');
    var fishTop = $('.fish').css('top');
    var furs = ["#F7941D", "#EBEBEB", "#636363", "#C69C6D", "#A186BE", "395A00", "#FFF220"];

    $("#picture img").click(function () {
	var choice = Math.floor(Math.random()*furs.length);
	$(this).css({ "background-color" : furs[choice] });

    });

    $("#picture img").droppable({
	drop: function() { 
	    $(this).attr({ src: "images/kitty_nom.png" });
	    $(".fish").hide();
	    $(this).addClass("eating");
	}
    });

    function reset_kitty() {
	$("#picture img").attr({ src: "images/kitty.png" });
	$('.fish').css({top: fishTop,
			left: fishLeft});
	$('.fish').fadeIn("slow");
    }

    function kitty_confused() {
	$("#picture img").attr({ src: "images/kitty_nom.png" });
    }

    $(".fish").draggable({
	drag: function() { 
	    $("#picture img").attr({ src: "images/kitty_hungry.png" });
	    revert: true
	},
	stop: function () {
	    if($("#picture img").hasClass("eating")) { 
		console.log("I'm EATING!");
		setTimeout(reset_kitty, 3000);
	    }
	    else {
		reset_kitty();
	    }
	}
	
    });
     

    var meow = ["meow", "mrrrrrrrrrow", "mew", "*purrrr*"];

    $("form").submit(function () {
	var english = $("#rawr").val()
	if(english == ""){
	    $("h1 em").append(" mrow? ");
	    setTimeout(kitty_confused, 5000);
	    return false;
	}
	
	else{
	
	$("h1 em").append(" " + english + " "); 
	return false;
	}

    });


    
    
    

});

