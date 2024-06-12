$(document).ready(function () {
  //메뉴
  $('.sub').hide();

  $('.menu>li').mouseover(function () {
    $(this).children('.sub').stop().fadeIn();
  });
  $('.menu>li').mouseout(function () {
    $(this).children('.sub').stop().fadeOut();
  });

  /* 이미지 슬라이드 */
  setInterval(slide);

  function slide() {
    $('.slide').delay(2000).animate({ marginLeft: '-100%' }, 1000);
    $('.slide').delay(2000).animate({ marginLeft: '-200%' }, 1000);
    $('.slide').delay(2000).animate({ marginLeft: '-0%' }, 1000);
  }

  //팝업
  $('.notice > li:nth-child(1)').click(function () {
    $('.popup_bg').show();
  });
  $('.popup_bg').hide();
  $('.close').click(function () {
    $('.popup_bg').hide();
  });
});
