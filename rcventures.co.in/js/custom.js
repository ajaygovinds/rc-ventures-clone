jQuery(document).ready(function(){
	
	/*Add Class Js to html*/
	jQuery('html').addClass('js');	
								
    /*=================================== TOPSEARCH ==============================*/
	var headertext = jQuery('#headertext');
	var outerafterheader = jQuery('#outerafterheader');
	var outerslider = jQuery('#outerslider');
	var outersliderplax = jQuery('#outerslider.parallax');
	var submitbutton = jQuery("#topsearchform input#searchsubmit");
	var topsearchtext = jQuery("#topsearchform input#s");
	var textfocusout = function(){
		if(!topsearchtext.is(":focus") && topsearchtext.val()==""){
			submitbutton.fadeTo(300,0.5);
			topsearchtext.animate({"width":"100px"},1000,"easeOutQuart");
		}
	};
	
	topsearchtext.focusin(function(){
		submitbutton.fadeTo(300,1);
		topsearchtext.animate({"width":"125px"},1000,"easeOutQuart");
	});
	topsearchtext.focusout(textfocusout);
	
	var headertextheight = headertext.css("height");
	jQuery(window).scroll(function(evt){
		if(headertext.offset().top>0){
			headertext.addClass("sticky");
			outerafterheader.addClass("sticky");
			outersliderplax.addClass("sticky");
			outerslider.addClass("sticky");
		}else{
			headertext.removeClass("sticky");
			outerafterheader.removeClass("sticky");
			outersliderplax.removeClass("sticky");
			outerslider.removeClass("sticky");
		}
	});
	headertext.mouseenter(function(){
		if(headertext.offset().top>0){
			headertext.removeClass("sticky");
			outerafterheader.removeClass("sticky");
			outersliderplax.removeClass("sticky");
		}
	});
	headertext.mouseleave(function(){
		if(headertext.offset().top>0){
			headertext.addClass("sticky");
			outerafterheader.addClass("sticky");
			outersliderplax.addClass("sticky");
		}
	});
	/*=================================== MENU ===================================*/
    jQuery("ul.sf-menu").supersubs({ 
    minWidth		: 12,		/* requires em unit. */
    maxWidth		: 15,		/* requires em unit. */
    extraWidth		: 0	/* extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values */
                           /* due to slight rounding differences and font-family */
    }).superfish();  /* 
						call supersubs first, then superfish, so that subs are 
                        not display:none when measuring. Call before initialising 
                        containing tabs for same reason. 
					 */
					 
	/* ==== Mobile Menu ==== */				 
	/* prepend menu icon */
	jQuery('section#navigation nav').prepend('<div id="menu-icon">Menu</div>');
	
	/* toggle nav */
	jQuery("#menu-icon").click( function(){
		if(jQuery("#topnav").hasClass("navmobile")){
			jQuery("#topnav").removeClass("navmobile");
		}else{
			jQuery("#topnav").addClass("navmobile");
		}
		jQuery("#topnav").slideToggle();
		jQuery(this).toggleClass("active");
	});
	

	
	/*=================================== TABS AND TOGGLE ===================================*/
	/*jQuery tab */
	jQuery(".tab-content").hide(); /* Hide all content */
	jQuery("ul.tabs li:first").addClass("active").show(); /* Activate first tab */
	jQuery(".tab-content:first").show(); /* Show first tab content */
	/* On Click Event */
	jQuery("ul.tabs li").click(function() {
		jQuery("ul.tabs li").removeClass("active"); /* Remove any "active" class */
		jQuery(this).addClass("active"); /* Add "active" class to selected tab */
		jQuery(".tab-content").hide(); /* Hide all tab content */
		var activeTab = jQuery(this).find("a").attr("href"); /* Find the rel attribute value to identify the active tab + content */
		jQuery(activeTab).fadeIn(200); /* Fade in the active content */
		return false;
	});
	
	/*jQuery toggle*/
	jQuery(".toggle_container").hide();
	jQuery("h2.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("slow");
	});
	

	/*=================================== SOCIAL ICON ===================================*/
	jQuery('ul.sn li a').hover(
		function() {
			var iconimg = jQuery(this).children();
			iconimg.stop(true,true);
			iconimg.fadeOut(500);
		},
		function() {
			var iconimg = jQuery(this).children();
			iconimg.stop(true,true);
			iconimg.fadeIn(500);
		}
	)


});