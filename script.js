// ------------------header toggle navbar---------------
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
	hideSection();
	toggleNavbar();
});
const hideSection = () => {
	document.querySelector('section.active').classList.toggle('fade-out');
};
const toggleNavbar = () => {
	document.querySelector('.header').classList.toggle('active');
};

// -----active section------

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('link-item') && e.target.hash !== '') {
		// activate overlay to prevent multiple clicks
		document.querySelector('.overlay').classList.add('active');
		navToggler.classList.add('hide');
		if (e.target.classList.contains('nav-item')) {
			toggleNavbar();
		} else {
			hideSection();
		}
		setTimeout(() => {
			document
				.querySelector('section.active')
				.classList.remove('active', 'fade-out');
			document.querySelector(e.target.hash).classList.add('active');
			window.scrollTo(0, 0);
			navToggler.classList.remove('hide');
			document.querySelector('.overlay').classList.remove('active');
		}, 500);
	}
});

// -----------portfolio item details popup----
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('view-project-btn')) {
		togglePortfolioPop();
		document.querySelector('.portfolio-popup').scrollTo(0, 0);
		portfolioItemDetails(e.target.parentElement);
	}
});
//hide pop up clicking outside
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('pp-inner')) {
		togglePortfolioPop();
	}
});

const togglePortfolioPop = () => {
	document.querySelector('.portfolio-popup').classList.toggle('open');
	document.body.classList.toggle('hide-scrolling');
	document.querySelector('.main').classList.toggle('fade-out');
};
document
	.querySelector('.pp-close')
	.addEventListener('click', togglePortfolioPop);
const portfolioItemDetails = (portfolioItem) => {
	document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector(
		'.portfolio-item-thumbnail img',
	).src;
	document.querySelector('.pp-header h3').innerHTML =
		portfolioItem.querySelector('.portfolio-item-title').innerHTML;
	document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector(
		'.portfolio-item-details',
	).innerHTML;
};
