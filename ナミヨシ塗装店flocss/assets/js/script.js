$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-hamburger__title").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});
// 変数pagetopの宣言
var pagetop = $('.p-pageTop');
// スクロールイベント
$(window).on('scroll', function () {//スクロールしたとき、
  if ($(this).scrollTop() > 700) { //スクロール量が500px以上なら、
    pagetop.addClass('active');    //activeクラスを付与し、
  } else {                         //500px未満なら、
    pagetop.removeClass('active'); //activeクラスを外します。
  }
});
// ページトップへ戻るボタンをクリックしたとき
pagetop.on('click', function () {
  $('html, body').animate(
    { scrollTop: 0 },
    400,
    'swing',
  );
  return false;
});
