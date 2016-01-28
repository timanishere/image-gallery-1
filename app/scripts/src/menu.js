//------ MENU FUNCTION STARTS HERE ------//

// -- TOGGLE MENU LIST --//
$(function() {
	var $burgerMenu = $('.burger-menu');
	var $menuList = $('.menu-sml-screen');
	var $subMenuList = $('.submenu-sml-screen');
	var $smlMenuContainer = $('.sml-menu-container');

	$burgerMenu.click(function() {
		//-- Make it hide/show
		//$menuList.toggle();

		//-- Make it slide up/down
		$smlMenuContainer.css('display', 'block');
		$menuList.slideToggle();
		$subMenuList.hide();
	});

	// -- HIDES MENU LIST --//
	$(window).resize(function() {
		var browserScreen = $(this).innerWidth();
		var breakpoint = 630;

		if(browserScreen > breakpoint) {
			$menuList.css('display', 'none');
			$subMenuList.css('display', 'none');
			$subMenuList.css('left', 100 + '%');
		}
		console.log('Your current broser size is: ' + browserScreen);
	});
});

//------ MENU FUNCTION ENDS HERE ------//


//------ SUBMENU FUNCTION STARTS HERE ------//
$(function() {
	var $subMenuList = $('.submenu-sml-screen');
	var $menuList = $('.menu-sml-screen li');
	var $menuSmlScreen = $('.menu-sml-screen');

	// MENU LIST
	var $menu_1 = $menuList.eq(0);
	var $menu_2 = $menuList.eq(1);
	var $menu_3 = $menuList.eq(2);
	var $menu_4 = $menuList.eq(3);
	var $menu_5 = $menuList.eq(4);


	// SUBMENU LIST
	var $sub_1 = $subMenuList.eq(0);
	var $sub_2 = $subMenuList.eq(1);
	var $sub_3 = $subMenuList.eq(2);
	var $sub_4 = $subMenuList.eq(3);
	var $sub_5 = $subMenuList.eq(4);


	// GO BACK
	var $go_back = $('.go-back-icon');

	
	//-- MENU 1 FUNCTION --/
	$menu_1.click(function() {
		$subMenuList.css('display', 'block');
		$sub_1.animate({'left': 0 + '%'});
		//console.log('you clicked on menu 1');
	});
	
	//-- MENU 2 FUNCTION --/
	$menu_2.click(function() {
		$subMenuList.css('display', 'block');
		$sub_2.animate({'left': 0 + '%'});
		//console.log('you clicked on menu 1');
	});

	//-- MENU 3 FUNCTION --/
	$menu_3.click(function() {
		$subMenuList.css('display', 'block');
		$sub_3.animate({'left': 0 + '%'});
		//console.log('you clicked on menu 1');
	});

	//-- MENU 4 FUNCTION --/
	$menu_4.click(function() {
		$subMenuList.css('display', 'block');
		$sub_4.animate({'left': 0 + '%'});
		//console.log('you clicked on menu 1');
	});

	//-- MENU 5 FUNCTION --/
	$menu_5.click(function() {
		$subMenuList.css('display', 'block');
		$sub_5.animate({'left': 0 + '%'});
		//console.log('you clicked on menu 1');
	});

	// -- GO BACK --//
	$go_back.click(function() {
		$subMenuList.css({'display': 'block'});
		$subMenuList.animate({'left': 100 + '%'});
	});
	
});
//------ SUBMENU FUNCTION ENDS HERE ------//