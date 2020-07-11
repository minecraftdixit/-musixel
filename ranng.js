$(window).scroll(function() {
  $('#svvg').each(function() {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 400) {
      $(this).addclass("col-md-5");
    }
  });
});