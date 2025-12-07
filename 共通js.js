// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();
});
//ハンバーガーメニュー//
$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});


$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});

