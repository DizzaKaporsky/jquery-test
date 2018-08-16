$(document).ready(function(){

//console.log( $('.post').text() );

//$('.post').before('<li>rtyuiop </li>');

//$('.post').html('qqwertyu <i>rrrpopo</i>');

//$('.foo b').closest('ul').hide();
	//.find('b')
	//.addClass('qwertyu');

	

	$('.video-wrap').slick();

	$('.custom-select').selectize();

	function calculateCartPrice() {
		var price = 0;
		$('#cart tr').each(function (){
			var priceItem = $(this).find('.price').text() * $(this).find('input').val();
			price = price + priceItem;
		});
		$('#price').text(price);
	}
	calculateCartPrice();

	$('#cart input').on('change', function(){
		calculateCartPrice();
	});

});