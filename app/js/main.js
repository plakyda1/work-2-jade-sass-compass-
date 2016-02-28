// ---------------------------------------JQUERY------------------------------------
$(function () {
	console.log('OK')
})
// --------------------------------------COLUMNIZER---------------------------------
$('.column__text').addClass('dontsplit');
	$('.column').columnize({
	columns: 2
});
// --------------------------------------SLIDER-------------------------------------
jQuery(document).ready(function(){

/* слайдер цен */

jQuery("#slider").slider({
	min: 0,
	max: 26000,
	values: [0,26000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 26000) { value2 = 26000; jQuery("input#maxCost").val(26000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});

// фильтрация ввода в поля
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


});

// ------------------------------------------SELECT2--------------------------------
$('select').select2();
$('.sorter__select').select2().css('width','143');
$('.select2-container').css('width','143');
// ------------------------------------ACCORDION-------------------------------------
$(document).ready(function($){
  $(".filter__link").on("click", function(event){
  		 event.preventDefault();
  		 // curet = $('.curet-img');
		$(this)
		// curet.toggleClass("curet-img_open")
		.siblings('.accordion-item')
		.stop(true, true)
		.slideToggle();
  }); //аккардеон
});
// ------------------------------------------Cлайды------------------------------------
$(document).ready(function($) {
	$('.products__slideshow-link').on('click', function(event) {
		event.preventDefault();
		var srcLitlelImg = $(this).find('img').attr("src"); //значение src маленькой картинки
			litleImg = $('.products__slideshow-link');
			bigImg = $('.products__slideshow-block-display')
		
				litleImg.removeClass('products__slideshow-link_active')//удаляем активный клас обводка

	    $(this)
	    	.addClass('products__slideshow-link_active')//добавляем обводку                                       
	      	.parent().parent()                                
	      	.siblings(bigImg)        
	      	.find("img")                                
	      	.attr("src", srcLitlelImg);                 
	  });
});
// --------------------------------------Смена вида отображения----------------------------------------
$('.filter-view__link').on('click', function(event) {
	event.preventDefault();
	console.log('dvd')
	ch($(this))
});
	previosClass = '';
	
	function ch ($this){
		item = $this.closest('.filter-view__item'),
		view = item.attr("data-view"),
		listOfItems = $('#products__list'),
		console.log(listOfItems),
		prefix = 'products__list_',
		classOfViewState = prefix + view; 
		if (previosClass == '') {
			previosClass = listOfItems.attr('class');
		} listOfItems.attr('class', previosClass+ ' ' +classOfViewState);

	}
// ------------------------------------Выбор цвета---------------------------------
	$('.filter-color__item').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('filter-color__item_active');
	});
// -------------------------------Сброс инпутов----------------------------------
$(".filt-magaz_reset").on('click', function(event) {
	event.preventDefault();
	$this=$(this)
	item = $this.siblings();
	inputs = item.find('input');
	inputs.removeAttr('checked');
});
// ---------------------------------prevent-----------------
$('.products__bay-btn').on('click', function(event) {
	event.preventDefault();
	
});