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

	$(window).scroll(function () {
		var html = "90%",
			 css = "90%",
			 javascript = "80%",
			 jQuery = "76%",
			 framworks = "75%",
			 PSDtoHTML = "75%",
			 SEO = "70%",
			 NET = "60%";
		if (($(this).scrollTop() + $(window).innerHeight()) > $('.progress').eq(2).offset().top & $(this).scrollTop() < $('.progress').eq(7).offset().top + 100) 
		{
			$('.fill').eq(0).css("width", html).delay(100).queue(function(){
				$('.fill').eq(1).css("width", css).delay(100).queue(function(){
					$('.fill').eq(2).css("width", javascript).delay(100).queue(function(){
						$('.fill').eq(3).css("width", jQuery).delay(100).queue(function(){
							$('.fill').eq(4).css("width", framworks).delay(100).queue(function(){
								$('.fill').eq(5).css("width", PSDtoHTML).delay(100).queue(function(){
									$('.fill').eq(6).css("width", SEO).delay(100).queue(function(){
										$('.fill').eq(7).css("width", NET).delay(100).queue(function(){
											$(this).dequeue();
										});
										$(this).dequeue();
									});
									$(this).dequeue();
								});
								$(this).dequeue();
							});
							$(this).dequeue();
						});
						$(this).dequeue();
					});
					$(this).dequeue();
				});
				$(this).dequeue();
			});
		}
		// else if ($(this).scrollTop() > $('.progress').eq(7).offset().top) {
		else {
			$('.fill').css("width",0);
		} 
	})
});