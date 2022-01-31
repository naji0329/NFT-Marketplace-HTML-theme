
// header
(function () {
	const header = $('.js-header'),
		items = header.find('.js-header-item'),
		burger = header.find('.js-header-burger'),
		mobile = header.find('.js-header-mobile');

	items.each(function () {
		const item = $(this),
			head = item.find('.js-header-head'),
			body = item.find('.js-header-body');

		head.on('click', function (e) {
			e.stopPropagation();

			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
			} else {
				items.removeClass('active');
			}
		});

		body.on('click', function (e) {
			e.stopPropagation();
		});

		$('html, body').on('click', function () {
			items.removeClass('active');
		});

	});

	burger.on('click', function (e) {
		e.stopPropagation();

		burger.toggleClass('active');
		mobile.toggleClass('visible');
	});

}());

// notifications popup
(function () {
	const header = $('.js-header'),
		popup = header.find('.notifications_popup'),
		icon = header.find('.js-notifications-icon');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	});

}());
//  change log
(function () {
	const changelog = $('.changelog'),
		log = changelog.find('.overflow_log'),
		more = changelog.find('.more_log'),
		text = changelog.find('.change_text');
	text.innerHTML = "New Heading";
	more.on('click', function (e) {
		e.stopPropagation();
		log.toggleClass('visible');
		text.innerHTML = "New Heading";
	});
}());
// avatar popup
(function () {
	const header = $('.js-header'),
		popup = header.find('.avatar_popup'),
		icon = header.find('.header__avatar');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());


$(".dark").on('click', function (e) {
	$(".body").addClass("is__dark")
	$(".light").removeClass("is_active")
	$(".dark").addClass("is_active")
	document.getElementById("logo_js").src = "assets/img/logos/Logo_white.svg";
	document.getElementById("logo_js_f").src = "assets/img/logos/Logo_white.svg";

});
$(".light").on('click', function (e) {
	$(".body").removeClass("is__dark")
	$(".light").addClass("is_active")
	$(".dark").removeClass("is_active")
	document.getElementById("logo_js").src = "assets/img/logos/Logo.svg";
	document.getElementById("logo_js_f").src = "assets/img/logos/Logo.svg";
});

// menu popup
(function () {
	const header = $('.js-header'),
		popup = header.find('.menu__popup'),
		icon = header.find('.has_popup');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());
(function () {
	const header = $('.js-header'),
		popup = header.find('.menu__popup2'),
		icon = header.find('.has_popup2');
	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());

//  share popup
(function () {
	const share = $('.share'),
		popup = share.find('.dropdown__popup'),
		icon = share.find('.icon');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());
//  more popup
(function () {
	const share = $('.more'),
		popup = share.find('.dropdown__popup'),
		icon = share.find('.icon');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());

// =========== swiper

var mySwiper = new Swiper(".swiper_artists", {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 4,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var mySwiper = new Swiper(".swiper_hero", {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		576: {
			slidesPerView: 2,
		},
		876: {
			slidesPerView: 3,
		},
		1150: {
			slidesPerView: 3,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// ========== . countdown

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
	var endTime = new Date("29 April 2023 9:56:00 GMT+01:00");
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$(".days").html(days + "<span></span>");
	$(".hours").html(hours + "<span></span>");
	$(".minutes").html(minutes + "<span></span>");
	$(".seconds").html(seconds + "<span></span>");

}

setInterval(function () { makeTimer(); }, 1000);


// Scroll Animation
(function () {

	gsap.registerPlugin(ScrollTrigger);
	gsap.to(".creators_anim1", {
		x: 500,
		duration: 3,
		scrollTrigger: {
			trigger: ".dribbble_svg",
			scrub: true
		}
	});

	gsap.to(".creators_anim2", {
		x: -500,
		duration: 3,
		scrollTrigger: {
			trigger: ".dribbble_svg",
			scrub: true
		}
	});
	gsap.to(".creators_anim3", {
		x: 500,
		duration: 3,
		scrollTrigger: {
			trigger: ".dribbble_svg",
			scrub: true
		}
	});


}());

// profile Image
$("#profileImage").click(function (e) {
	$("#imageUpload").click();
});

function fasterPreview(uploader) {
	if (uploader.files && uploader.files[0]) {
		$('#profileImage').attr('src',
			window.URL.createObjectURL(uploader.files[0]));
	}
}

$("#imageUpload").change(function () {
	fasterPreview(this);
});
