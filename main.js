$(window).load(function() {

  $(window).keypress(function (event) {
    if (event.keyCode == '32') {
      $('.capitain-round').addClass('rotate-animation');
      setTimeout(function() {
        $('.capitain-round').removeClass('rotate-animation');
      }, 1000);
    }
  });

  setTimeout(function () {
    $('.capitain-round').addClass('zoom-animation');
    setTimeout(function() {
      $('.capitain-round').removeClass('zoom-animation');
      $('.capitain-round').removeClass('capitain-round-ini');
    }, 800);
    $('.capitain-title').addClass('zoom-animation');
    $('.capitain-title').addClass('show');
  }, 500);
  setTimeout(function () {
    $('.capitain-download').addClass('show');
  }, 1400)

  $('.bam').css('height', $(window).height());
  $('.bam').css('width', $(window).width());
  $(window).resize(function () {
    $('.bam').css('height', $(window).height());
    $('.bam').css('width', $(window).width());
  });

  $('#btn-download').click(function () {
    $('.bam').fadeIn(400, function () {
      setTimeout(function() {
        $('.bam').fadeOut();
      }, 500);
    });
  })
});
