$("#navbar a").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // toggle button for closing on click in mobile version
    var toggleBtn = $(".navbar-toggle");

    // if is mobile
    if (toggleBtn.is(':visible'))
        toggleBtn.trigger("click");

    // change active element
    $("li.active").removeClass("active");
    $(this).parent().addClass("active");

    // store hash
    var hash = this.hash;

    // animate
    $("html, body").animate({
        scrollTop: $(hash).offset().top - 60
    });

});