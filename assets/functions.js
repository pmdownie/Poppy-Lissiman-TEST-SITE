$(document).ready(function(){
	$('#filter').on('click', function(e) {
      $(this).toggleClass("coll-dropdown-open");
    });

    $(function() {
    	var marginTop = $('.product-single h1').outerHeight(true);
    	var productInfo = $('.js-product-details');

    	$(productInfo).css({ 'marginTop': marginTop });
    });
});