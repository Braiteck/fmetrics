$(function () {
	// Страница проекта
	$projectSlider = $('.project_info .gallery .slider').owlCarousel({
		items: 1,
		margin: 20,
		loop: false,
		dots: false,
		nav: true,
		smartSpeed: 700,
		onTranslate: function (event) {
			$('.project_info .gallery .thumbs > *').removeClass('active')
			$('.project_info .gallery .thumbs > *:eq(' + event.item.index + ')').addClass('active')
		}
	})

	$('.project_info .gallery .thumbs > *').click(function (e) {
		e.preventDefault()

		$('.project_info .gallery .thumbs > *').removeClass('active')

		$projectSlider.trigger('to.owl.carousel', $(this).data('slide-index'))

		$(this).addClass('active')
	})


	// Наша команда
	$('.about_team .person .info_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.person')

		if (!$(this).hasClass('active')) {
			$(this).addClass('active')
			parent.find('.links, .additional_info').fadeIn(300)
		} else {
			$(this).removeClass('active')
			parent.find('.links, .additional_info').fadeOut(200)
		}
	})
})