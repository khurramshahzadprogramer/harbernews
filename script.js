// JavaScript for interactive elements

$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Initialize the carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Search functionality
    $('#search').on('input', function() {
        var query = $(this).val().toLowerCase();
        $('.news-category').each(function() {
            var title = $(this).find('h3').text().toLowerCase();
            $(this).toggle(title.indexOf(query) > -1);
        });
    });

    // Contact form validation
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        alert('Message sent successfully!');
    });
});
