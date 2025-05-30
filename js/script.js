$(".count").each(function () {
	$(this)
		.prop("Counter", 0)
		.animate(
			{
				Counter: $(this).text(),
			},
			{
				duration: 2000,
				easing: "swing",
				step: function (now) {
					now = Number(Math.ceil(now)).toLocaleString('en');
					$(this).text(now);
				},
			}
		);
});

var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

AOS.init();


// let darkTheme = document.getElementById('darkTheme');

// darkTheme.oneclick = function(){
//     document.body.classList.toggle("dark-theme");
// }
$(function () {
	$(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".back-to-top").css("display", "flex").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
	// $(".typed").typed({
	// 	strings: ["Developers.", "Designers.", "People."],
	// 	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
	// 	stringsElement: null,
	// 	// typing speed
	// 	typeSpeed: 30,
	// 	// time before typing starts
	// 	startDelay: 1200,
	// 	// backspacing speed
	// 	backSpeed: 20,
	// 	// time before backspacing
	// 	backDelay: 500,
	// 	// loop
	// 	loop: true,
	// 	// false = infinite
	// 	loopCount: 5,
	// 	// show cursor
	// 	showCursor: false,
	// 	// character for cursor
	// 	cursorChar: "|",
	// 	// attribute to type (null == text)
	// 	attr: null,
	// 	// either html or text
	// 	contentType: 'html',
	// 	// call when done callback function
	// 	callback: function () { },
	// 	// starting callback function before each string
	// 	preStringTyped: function () { },
	// 	//callback for every typed string
	// 	onStringTyped: function () { },
	// 	// callback for reset
	// 	resetCallback: function () { }
	// });

 $('#contact-form').on('submit', function (e) {
      e.preventDefault();

      // Disable button and show spinner
      $('#send-button').prop('disabled', true);
      $('#send-button .btn-text').text('Sending...');
      $('#send-button .spinner-border').removeClass('d-none');

      emailjs.sendForm('service_mgkdjoo', 'template_j19eqyt', this)
        .then(function () {
          $('#contact-form')[0].reset();
          showModal("✅ Message sent successfully!", "Success");
        }, function (error) {
          showModal("❌ Failed to send message. Please try again later.", "Error");
        })
        .finally(function () {
          $('#send-button').prop('disabled', false);
          $('#send-button .btn-text').text('Send Message');
          $('#send-button .spinner-border').addClass('d-none');
        });

      function showModal(message, title) {
        $('#feedbackModalBody').text(message);
        $('#feedbackModalLabel').text(title);
        const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));
        modal.show();
      }
    });
	
});
const words = [
  "<i class='fas fa-hand-peace primary-color'></i> Hi,",
  " I'm Sabbir",
  "<i class='fas fa-code primary-color'></i> Full Stack Developer",
  "<i class='fab fa-react primary-color'></i> React & Node.js",
  "<i class='fas fa-server primary-color'></i> Express & TypeScript",
  "<i class='fas fa-database primary-color'></i> MongoDB",
  "<i class='fas fa-project-diagram primary-color'></i> GraphQL"
];


  document.addEventListener("DOMContentLoaded", function () {
    const instance = new TypeIt("#name", {
      speed: 100,
      breakLines: false,
      loop: true,
      deleteSpeed: 50,
      nextStringDelay: 1000,
      waitUntilVisible: true,
    });

    words.forEach((word) => {
      instance.type(word).pause(1000).delete();
    });

    instance.go();
  });
