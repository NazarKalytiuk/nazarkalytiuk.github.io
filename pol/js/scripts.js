$(document).ready(function(){
	$('.project__img__button').on('click', function(){
		var index = $(this).parent().parent().index();
		$('.project .ripple').eq(index).addClass('rippling').delay(300).queue(function(){
			$('.project__layer').eq(index).addClass('project__layer--active');
			$('.ripple').removeClass('rippling');
			$(this).dequeue();
		})
	});

	$('.form__submit').on('click', function(){
		$('.form__submit').addClass('form__submit--active');
		$('.form__submit i').addClass('sending').delay(1500).queue(function(){
			$('.form__submit i').removeClass('sending');
			$('.form__submit').removeClass('form__submit--active');
			$(this).dequeue();
		});
	});

	$('.project__layer__button').on('click', function(){
		var index = $(this).parent().parent().index();
		$('.project__layer').eq(index).removeClass('project__layer--active');
	});

	$('.fab .button').on('click', function(){
		$('.fab').addClass('active').delay(100).queue(function(){
			if(window.innerWidth > 600)
			{
				$('.fab.active').css('height', "32rem");
				$('.fab.active').css('width', "32rem");
			}
			else {
				$('.fab.active').css('height', "100%");
				$('.fab.active').css('width', "100%");
			}
			$(this).dequeue();
		})
		$('.fab .ripple').addClass('rippling');
		$('.fab__button-wrapper').addClass('clicked').delay(1000).queue(function(){
			$('.fab__layer-content').addClass('active');
			$('.fab .ripple').removeClass('rippling');
			$('.fab').addClass('shadow');
			$(this).dequeue();
		});
	});

	$('.fab .fab__layer__close').on('click', function(){
		$('.fab').css('width','100px');
		$('.fab').css('height','100px');
			$(".fab").removeClass('active'); // скрываем его
			$('.fab').removeClass('shadow');
			$(".fab__layer-content").removeClass('active'); 
			$(".fab__button-wrapper").removeClass('clicked'); 
		});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var tw = $(".fab"); // тут указываем ID элемента
		if (!tw.is(e.target) // если клик был не по нашему блоку
			&& tw.has(e.target).length === 0) 
		    { // и не по его дочерним элементам
		    	$('.fab').css('width','100px');
		    	$('.fab').css('height','100px');
			$(".fab").removeClass('active'); // скрываем его
			$('.fab').removeClass('shadow');
			$(".fab__layer-content").removeClass('active'); 
			$(".fab__button-wrapper").removeClass('clicked'); 
		}
	});

	$(window).scroll(function () {
		var capabilities = ["90%","90%","80%","76%","75%","75%","70%","60%"];
		if (($(this).scrollTop() + $(window).innerHeight()) > $('.progress').eq(2).offset().top & $(this).scrollTop() < $('.progress').eq(7).offset().top + 100) 
		{
			for(i=0; i<=7; ++i)
			{
				$('.fill').eq(i).css("width", capabilities[i]);
			}
		}
		else 
		{
			for(i=0; i<=7; ++i)
			{
				$('.fill').eq(i).css("width", 0);
			}
		} 
	})

	$('a[href^="#"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		if(true){
			$('body').animate( { scrollTop: destination }, 500 );
		} else {
			$('html').animate( { scrollTop: destination }, 1000 );
		}
		return false;
	});


	$('.ripple').on('click', function(e){
		$(this).append('<div class="ripple--active ripple--animate"></div>').delay(10000).queue(function(){
			$(this).children('.ripple--active').remove();
			$(this).dequeue();
		});
		var ripple = $(this).children('.ripple--active'),
			 x = (e.pageX - $(this).offset().left), 
			 y = (e.pageY - $(this).offset().top);
		ripple.css('top',y).css('left',x);
	})
});