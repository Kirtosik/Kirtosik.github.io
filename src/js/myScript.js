window.onload = function () {
			    document.body.classList.add('loaded_hiding');
			    window.setTimeout(function () {
			      document.body.classList.add('loaded');
			      document.body.classList.remove('loaded_hiding');
			    	}, 500);
			  }


//let var1 = prompt("Здравстввуйте! Я рад приветствтовать Вас на своём сайте! Перед началом прошу пройти маленький опрос нужный мне для статистики. Какой тип сайта вам нужен? Для выбора варианта напишите его порядковый номер. 1) Сайт-визитка (10000р)  2) Интернет-магазин (20000р)  3) Сайт компании (30000р)", "1");

//let var2 = prompt("Спасибо, осталось совсем чуть-чуть! Какой дизайн сайта Вы хотите? 1) Минимализм (5000р) 2) Корпаративный дизайн (10000р) 3) Свой Дизайн со всеми правками (от 50000р)");

//let var3 = prompt("Последний вопрос! Ваш сайт должен быть: 1) Адаптивный (10000р) 2) Не адаптивный (0р)");

/*

if (var1 == "1") {var1 = 10000};
if (var1 == "2") {var1 = 20000};
if (var1 == "3") {var1 = 30000};

//alert(var1);

if (var2 == "1") {var2 = 5000};
if (var2 == "2") {var2 = 10000};
if (var2 == "3") {var2 = 50000};

//alert(var2);

if (var3 == "1") {var3 = 10000};
if (var3 == "2"){var3 = 0};

//alert(var3);

let summ = var1 + var2 + var3;


//alert ("Спасибо за уделенное время! Ориентировочная цена Вашего сайта: " + summ + " рублей")
*/
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


