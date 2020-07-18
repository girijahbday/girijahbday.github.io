//HIDDEN ELEMENTS

$(".lightsoff,.song,.eat,.balloon,.message,.refresh,.gift,li,#vid").hide();


//BUTTON 1= PARTY

$(".party").click(function () {
	alert(`BEFORE YOU GO FUTHER THESE ARE THE RULES:-
	
	1.GIVE '5 SECONDS' BEFORE TAPPING ANY BUTTON

	2.BY CHANCE THE ANIMATION DISRUPTS RELOAD THE PAGE
	
	PRESS "OK" AND ENJOY
	HAPPY BIRTHDAY!!!`);
	$(".lightsoff").toggle("", function () {});
	$("h1").css("color", "#d63447")
	$(".screen").css("background-color", "#000");
	$(".screen").css('background-size', 'cover')
	$(".song").toggle("slow", function () {});
	$(".party").fadeOut(function () {});
	$("this").css("color", "#f00");
});


//BUTTON 2=SONG

$(".song").on("click", function () {
	alert('TAP THE CAKE!! TO EAT IT VIRTUALYY!!PRESS OK TO CONTINUE');
	var audio1 = $("#audio1")[0];
	audio1.play(100);
	$(".lightsoff").fadeOut();
	$(".eat").fadeIn(1000)
	$(".song").fadeOut(function () {
		$(".cake").on('click', function () {
			$(".cake").animate({
				width: "1000px",
				height: "1000px",
			}, 1500);
			$(".cake,.eat").fadeOut()

			$(".balloon").toggle(2500);
			$(".message").toggle(2500).css('color: #3cd615e');
		})
	});
});

//nosecret 
$('.balloon').on('click', function () {
	var audio4 = $('#pop')[0];
	audio4.play(100);

})
$('.h').on('click', function () {

	$('.h').fadeOut(100)
})
$('.a').on('click', function () {

	$('.a').fadeOut(100)
})
$('.p').on('click', function () {

	$('.p').fadeOut(100)
})
$('.p1').on('click', function () {

	$('.p1').fadeOut(100)
})
$('.y').on('click', function () {

	$('.y').fadeOut(100)
})
$('.b').on('click', function () {

	$('.b').fadeOut(100)
})
$('.i').on('click', function () {

	$('.i').fadeOut(100)
})
$('.t').on('click', function () {

	$('.t').fadeOut(100)
})
$('.d').on('click', function () {

	$('.d').fadeOut(100)
})
$('.a1').on('click', function () {

	$('.a1').fadeOut(100)
})
$('.1').on('click', function () {

	$('.1').fadeOut(100)
})
$('.2').on('click', function () {

	$('.2').fadeOut(100)
})
$('.3').on('click', function () {

	$('.3').fadeOut(100)
})
$('.4').on('click', function () {

	$('.4').fadeOut(100)
})
$('.5').on('click', function () {

	$('.5').fadeOut(100)
})
$('.6').on('click', function () {

	$('.6').fadeOut(100)
})
$('.7').on('click', function () {

	$('.7').fadeOut(100)
})
$('.8').on('click', function () {

	$('.8').fadeOut(100)
})
$('.9').on('click', function () {

	$('.9').fadeOut(100)
})
$('.10').on('click', function () {

	$('.10').fadeOut(100)
})


//secret 

$(".secret").on("click", function () {
	$('.balloon,footer').fadeOut();
	$('h1').html('<center><--WELCOME TO GAME OF FLAMES-->	</center>').css('color', '#ffc60b')
	$('.message').html("<center><h1>CONGRATS!!  CORRECT BALLOON!!<br>THERE ARE 2 FLAMES, ONE HAS A GOOD PRESENT<br>OTHER ONE DOESN'T &#128540!! </h1><br></center>").css('color', '#94fc13');
	$('.lightsoff').fadeIn(100);
	$('.flame1,.flame2').css('margin-top', '200px');
	$('.flame1').css('padding-right', '450px');
	$('.flame2').css('padding-left', '450px');

	//Flame1 animation
	$('.flame1').on('click', function () {
		audio1.pause()
		audio1.currentTime = 0.0;
		$('.flame2,.flame1,.head,br').fadeOut(100);
		$('.message').css('color', 'blue');
		$('.carousel-caption').css('color','#f00');
		var audio2 = $("#playdate")[0];
		audio2.play(100);
		$(".gift,li,footer,.refresh").fadeIn(1000);


		$('h1').html('<center><--&#128081 WELCOME TO FLAMES OF GIFT &#128081-->	</center>').css('color', '#31089ff')
		$('footer').html("<center><h1>DON'T FORGET TO CHECK OUT OTHER FLAME!!</h1><br></center>");
	})
	//Flame2 animation
	$('.flame2').on('click', function () {
		audio1.pause()
		audio1.currentTime = 0.0;
		document.getElementById('vid').play();
		$('.flame2,.flame1,.head,br').fadeOut(100);
		$('.message').css('color', 'blue');
		$('h1').html('<center><h><-- WELCOME TO FLAMES OF EMBARRASSMENT--><h1>	</center>').css('color', '#59d4e8')
		var audio3 = $('#laugh')[0];
		audio3.play(100);
		$('footer').html("<center><h1>YOUR PRESENT IS IN THE OTHER FLAME &#128514!!</h1><br></center>");
		$('#vid,.refresh,footer').fadeIn();

	})
});
