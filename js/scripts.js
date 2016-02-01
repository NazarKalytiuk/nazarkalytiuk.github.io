$(document).ready(function(){
	$('.project__img__button').on('click', function(){
		var index = $(this).parent().parent().index();
		$('.project .ripple').eq(index).addClass('rippling').delay(300).queue(function(){
			$('.project__layer').eq(index).addClass('project__layer--active');
			$('.ripple').removeClass('rippling');
			$(this).dequeue();
		})
	});

	$('.project__layer__button').on('click', function(){
		var index = $(this).parent().parent().index();
		$('.project__layer').eq(index).removeClass('project__layer--active');
	});


	$('.fab .button').on('click', function(){
		$('.fab').addClass('active').delay(100).queue(function(){
			if(window.innerHeight > window.innerWidth) {
				$('.fab.active').css('height', "32rem");
				$('.fab.active').css('width', "32rem");
			}
			else {
				$('.fab.active').css('height', "32rem");
				$('.fab.active').css('width', "32rem");
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
});