// the bulma slider extension

bulmaCarousel.attach('#carousel-slider', {
  slidesToScroll: 1,
  slidesToShow: 3,
  infinite: true,
  navigationKeys: true,
  pagination:false,
});


// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('.card');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}