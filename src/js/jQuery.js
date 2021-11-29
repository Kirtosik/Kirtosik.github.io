$(document).ready(function(){  // Проверка запуска js после прогрузки страницы

$('.Hello').click(function(){  // событие клик
	$(this).toggleClass("red"); // включение и отключение классов
})

$('.Hello').dblclick(function(){  // событие двойной клик
	$(this).toggleClass("blue"); // включение и отключение классов
})

$('.Hello').mouseenter(function(){  // событие при наведении мышки
	$(this).toggleClass("red"); // включение и отключение классов
})

$('a').mouseenter(function(){  // событие при наведении мышки
	$(this).toggleClass("red"); // включение и отключение классов
})

$('.Hello').mouseleave(function(){  // событие убрали мышку
	$(this).toggleClass("red"); // включение и отключение классов
})

$('input').focus(function(){  // событие фокусировка
	 
})

$('input').change(function(){  // событие Изменение
	$('.Hello').text("Привет, " + $(this).val()); // включение и отключение классов
})

$('input').keypress(function(){  // событие нажатие клавиши вниз
	//$('.Hello').text("Привет, " + $(this).val()); // включение и отключение классов
})

$('input').keyup(function(){  // событие отпускание клавиши
	$('.Hello').text("Привет, " + $(this).val()); // включение и отключение классов
})

///////////////////////////////////////АНИМАЦИИ//////////////////////////////////////

$('p').click(function(){

	//$(this).hide(10000); // исчезновение элемента за кол-во секунд
	//$(this).delay(1000).hide(1000); // задержка перед исчезновением
	//$(this).delay(1000).show(1000); // появление эл-та с задержкой
	//$(this).animate({opacity: "0.25"},1000); // своя анимация
	//$(this).slideUp(1000); // свернулась за время
	//$(this).slideDown(1000); // развернуть за время

})


$('img').click(function(){

	$(this).fadeOut(500, function(){
		$(this).attr("src","../about_me2.jpg").fadeIn(500); // плавная смена атрибута
	});

	//$(this).addClass('red'); // добавить класс
	//$(this).removeClass('red'); // удалить класс
	//$(this).toggleClass("red blue",); // смена одного класса на другой

});


$("#BigP").click(function(){

	//$(this).text("Новое СОдержимое"); // замена содержимого
	//$(this).html("<span>Новое СОдержимое</span>"); // добавление нового тега
	//$(this).append("Новое СОдержимое"); // обавление в конец
	//$(this).prepend("Новое СОдержимое"); // добавление в начало
	//$(this).after("Новое СОдержимое"); // добавление на следующей строке
	//$(this).before("Новое СОдержимое"); // добавление на предыдущей строке
	$(this).remove(""); // удалить

});



/////////////////////////SCROLL///////////////////////////////
$(window).scroll(function(){

	let scrollDistance = $(window).scrollTop();

	$(".section").each((i, el) => {

		if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {

			$("nav a").each((i, el) => {

				if ($(el).hasClass("active")) {

					$(el).removeClass("active");
				}
			});

			$('nav li:eq('+ i +')').find('a').addClass('active');
		}

	});

});

});

//////////////////////////////////////////////////////////////

//////////////////////ANIMATION///////////////////////////////////
// анимация появления текста при прокрутке старницы до него

let options = {threshold: [0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i,el) => {

		observer.observe(el);

	});

function onEntry (entry){

	entry.forEach(change => {
		if (change.isIntersecting){


			change.target.classList.add("show-animation");
		}
	});
}






//////////////////////////////////////////////////////////////////



$('a[href^="#"]').click(function(){

	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});

});