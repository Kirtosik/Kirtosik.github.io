window.onload = function () {
			    document.body.classList.add('loaded_hiding');
			    window.setTimeout(function () {
			      document.body.classList.add('loaded');
			      document.body.classList.remove('loaded_hiding');
			    	}, 500);
			  };

new WOW().init();

$("#inputTel").mask("+7(999) 999-9999");


function countup(className){ //className - имя класса, в котором есть число
        var countBlockTop = $("."+className).offset().top; //смещение блока с числом относительно верхнего края	
        var windowHeight = window.innerHeight;//высота окна браузера
	var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал
				
	$(window).scroll( function (){
		if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
			show = false; //если мы видим число, то больше его не надо показывать
						
			$('.'+className).spincrement({ //вызов плагина с параметрами 
				from: 1,               //начинать с 1
				duration: 4000,        //задержка счетчика
			});
		}
	})	
}

$(function() {
	countup("number", $(".number").text());

});

$('form').change(function(){ 
	let var1 = select1.value;
	let var2 = select2.value;
	let var3 = select3.value;
	let time1 = 0;
	let time2 = 0;
	let time3 = 0;


if (var1 == "Option0") {var1 = 0; time1 = 0};
if (var1 == "Option1") {var1 = 10000; time1 = 5};
if (var1 == "Option2") {var1 = 20000; time1 = 10};
if (var1 == "Option3") {var1 = 30000; time1 = 8};

if (var2 == "Option0") {var2 = 0; time2 = 0};
if (var2 == "Option1") {var2 = 5000;  time2 = 5};
if (var2 == "Option2") {var2 = 10000; time2 = 9};
if (var2 == "Option3") {var2 = 50000; time2 = 10};



if (var3 == "Option1") {var3 = 10000; time3 = 3};
if (var3 == "Option2" || var3 == "Option0"){var3 = 0; time3 = 0};
let sumTime = time1 + time2 + time3;
let summ = var1 + var2 + var3;
let timeName = 0;


if (sumTime == 21) {
	timeName = " день";
}

if (sumTime == 22 || sumTime == 23){
	timeName = " дня";
}

if (sumTime >= 5 && sumTime <=20 ){
	timeName = " дней"
}



$('.time').text(sumTime + timeName);


$('.sum').text(summ);

});

$('a[href^="#"]').click(function(){

	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});

});
