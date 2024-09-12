(function ($) {
	("use strict");

	//<====== menu section start hare =======>

	// mobile menu
	$(".main-menu nav").meanmenu();

	// menu fixed
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("sticky-top animated fadeInDown");
		} else {
			fixed_top.removeClass("sticky-top fadeInDown");
		}
	});

	//<====== menu section end hare =======>

	//<====== banner js start ======>
	var swiper = new Swiper(".bannerSwiper", {
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});

	// <========about js start======>
	var swiper = new Swiper(".aboutSwiper", {
		spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
	});

	// <=======Type text area start here ======>
	$(document).ready(function () {
		const words = ["Success", "Prosperity", "Advancement"];
		let index = 0;
		let letterIndex = 0;
		let direction = 1;
		let currentWord = words[0];
		let interval;

		function typeWriter() {
			const word = words[index];
			if (letterIndex < word.length) {
				$("#typing-text").text(
					$("#typing-text").text() + word.charAt(letterIndex)
				);
				letterIndex++;
			} else {
				clearInterval(interval);
				interval = setInterval(eraseText, 150); // Delay between typing and erasing
			}
		}

		function eraseText() {
			if (letterIndex >= 0) {
				const text = currentWord.substring(0, letterIndex);
				$("#typing-text").text(text);
				letterIndex--;
			} else {
				clearInterval(interval);
				index = (index + direction) % words.length;
				if (index < 0) index = words.length - 1;
				currentWord = words[index];
				interval = setInterval(typeWriter, 150); // Delay before typing next word
			}
		}

		interval = setInterval(typeWriter, 150); // Initial delay before typing starts
	});
	// <=======Type text area end here *=======>

	// <=======WOW Animatin area start here *=======>
	new WOW().init();
	// <=======WOW Animatin area end here =======>

	// <=======cursor js start hare=====>

	var cursor = document.querySelector(".cursor");
	var cursor2 = document.querySelector(".cursor2");
	document.addEventListener("mousemove", function (e) {
		cursor.style.cssText = cursor2.style.cssText =
			"left: " + e.clientX + "px; top: " + e.clientY + "px;";
	});

	// <=======cursor js end hare=======>

	// <======= Counter up js start ========>
	$(document).ready(function () {
		$(".counter").counterUp({
			delay: 8,
			time: 2000,
		});
	});

	//  <======Counter up js end======>

	// <=====Preloader area start here ======>
	var windowOn = $(window);
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});
	// <======Preloader area end here ======>

	// <====== back to top button  start hare ======>
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("back-to-top");
		let progressValue = document.getElementById("back-to-top-icon");
		let top = document.documentElement.scrollTop;
		let calcHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		let scrollValue = Math.round((top * 100) / calcHeight);
		if (top > 100) {
			scrollProgress.style.display = "grid";
		} else {
			scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		});
		scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
	};

	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;
	// <====== back to top button  end hare ======>

})(jQuery);
