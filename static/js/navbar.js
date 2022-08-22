const hero = document.getElementById("hero");
const header = document.querySelector(".navbar-section");

$('.menu-toggle').click(function () {
	$(".nav").toggleClass("mobile-nav");
	$(this).toggleClass("is-active");
});


const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		ent.isIntersecting === false
			? header.classList.add("sticky")
			: header.classList.remove("sticky")
	},
	{

		root: null,
		rootMargin: "",
		threshold: "0"

	});

observer.observe(hero);