function link() {
  $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
    e.preventDefault();
    var t = 100;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });
}

jQuery(document).ready(function () {
  link();
  new WOW().init();
});