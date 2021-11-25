/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});

   $(document).ready(function() {           


			document.getElementById("menu-button").addEventListener('click', function(e) {

	  	});    
  
     
     });        
              
})(jQuery);






//Scroll back to top

$(document).ready(function(){"use strict";
  
var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
var updateProgress = function () {
	var scroll = $(window).scrollTop();
	var height = $(document).height() - $(window).height();
	var progress = pathLength - (scroll * pathLength / height);
	progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);	
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.progress-wrap').addClass('active-progress');
	} else {
		jQuery('.progress-wrap').removeClass('active-progress');
	}
});				
jQuery('.progress-wrap').on('click', function(event) {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
})

});

//CAROUSEL


$(document).ready(function () {
	$('#properties-slider').slick({
	  slidesToShow: 3,
	  /*Agregue el autoplay*/
	  autoplay: true,
	  autoplaySpeed: 5000,
	  slidesToScroll: 1,
	  prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></a>',
	  nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></a>',
	  responsive: [
		  {
			  breakpoint: 1100,
			  settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  infinite: true,
			  }
		  },
		  {
			  breakpoint: 767,
			  settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  infinite: true,
			  }
		  },
		  {
			  breakpoint: 530,
			  settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  infinite: true,
			  }
		  }
	  ]
	})});
	