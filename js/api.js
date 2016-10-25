//Show/hide top right social menu
jQuery( document ).ready(function() {
	jQuery("#socialbutton").click( function(){
			jQuery(".socialicons").animate({
				left:'toggle',
				opacity: 'toggle'
			}, 200 );			
			return false;
	})
	jQuery('#socialbutton').toggle(function() {
    	jQuery(this).html("<img src='/bucklandesign/wp-content/themes/bucklan-design/images/arrow-right-small.png' id='socialarrow' /> Close");
	}, function() {
    	jQuery(this).html("<img src='/bucklandesign/wp-content/themes/bucklan-design/images/arrow-left-small.png' id='socialarrow' /> More");
	});
});