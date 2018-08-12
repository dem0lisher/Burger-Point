(function(){
	
	var myLazyLoad = new LazyLoad({
		elements_selector: ".lazy"
	});

	var videoLazyLoad = new LazyLoad({
		elements_selector: ".lazy-video"
	});

	var menuBtn = document.getElementById('menu-btn');
	menuBtn.addEventListener('click', openNav);

	var overlay = document.getElementById('overlay');
	overlay.addEventListener('click', closeNav);

	function openNav(){
		var sideNav = document.getElementById('header-menu');
		var overlay = document.getElementById('overlay');
		sideNav.style.width = "250px";
		overlay.style.display = "block";
	}

	function closeNav(){
		var sideNav = document.getElementById('header-menu');
		var overlay = document.getElementById('overlay');
		sideNav.style.width = "0";
		overlay.style.display = "none";
	}

})();