function fullscreen (elmt) {
  elmt.css('height', $(window).height());
  elmt.css('width', $(window).width());
}

$(window).load(function() {
  var bam = $('.bam'),
    capitainRound = $('.capitain-round'),
    capitainTitle = $('.capitain-title');

  $(window).keypress(function (event) {
    if (event.keyCode == '32') {
      capitainRound.addClass('rotate-animation');
      setTimeout(function() {
        capitainRound.removeClass('rotate-animation');
      }, 1000);
    }
  });

  setTimeout(function () {
    capitainRound.addClass('zoom-animation');
    setTimeout(function() {
      capitainRound.removeClass('zoom-animation');
      capitainRound.removeClass('capitain-round-ini');
    }, 800);
    capitainTitle.addClass('zoom-animation');
    capitainTitle.addClass('show');
  }, 500);
  setTimeout(function () {
    $('.capitain-download').addClass('show');
  }, 1400);

  fullscreen(bam);
  $(window).resize(function () {
    fullscreen(bam);
  });

  $('#btn-download').click(function () {
    bam.fadeIn(400, function () {
      setTimeout(function() {
        bam.fadeOut();
      }, 500);
    });
  });
});
