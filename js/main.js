window.onload = function () {
  $(".youtubeWrap .thumUl li img, .SocialValueUl .thumnail img").each(function () {
    var $width = $(this).width();
    var $height = $(this).height();
    if ($width < $height) {
      $(this).css({
        width: "100%",
        height: "auto",
      });
    }
  });
};

$(document).ready(function () {
  //console.log("ready!!");

  var mql = window.matchMedia("screen and (max-width: 768px)");
  mql.addListener(function (e) {
    // location.reload();
  });

  // 모바일
  //   if (mql.matches) {
  //     $(window).resize(function () {
  //       noticeSizeFunc();
  //     });
  //     noticeSizeFunc();
  //   }
  //   // PC
  //   else {
  //     pcImgHeightFunc();
  //     $(window).resize(function () {
  //       pcImgHeightFunc();
  //     });
  //   }

  function pcImgHeightFunc() {
    var imgHeight = $(".season .view_p img").height();
    if (imgHeight < 405) {
      $(".season, .season a, .season .view_p").height(imgHeight);
    } else {
      $(".season, .season a, .season .view_p").height(405);
    }
  }

  // var noticeHeight = $(".noticeArea a").height();
  // $(".noticeArea").height(noticeHeight);

  // function noticeSizeFunc() {
  //     var noticewidth = $(".noticeArea").width();
  //     var bWidth = $(".noticeArea a b").width();
  //     noticeHeight = $(".noticeArea a").height();
  //     $(".noticeArea").height(noticeHeight);
  //     $(".noticeArea a strong").width(noticewidth - bWidth);
  //     $(".noticeUl").css("top", -noticeHeight + "px");
  // }

  // var noticeLen = $(".noticeArea a").length;
  // var noticeIdx = 0;
  // setInterval(
  //     function () {
  //         $(".noticeArea ul").animate({
  //             top: -(noticeIdx * noticeHeight),
  //         });
  //         noticeIdx++;
  //         if (noticeIdx >= noticeLen) {
  //             noticeIdx = 0;
  //         }
  //         //console.log(noticeIdx);
  //     },
  //     5000,
  //     "easeOutExpo"
  // );

  $(".eventUl li").click(function () {
    $(".eventUl li").removeClass("on");
    $(this).addClass("on");
    var idx = $(this).index();
    var $src = $(".eventUl li").eq(0).find(".view_p").attr("src");
    if (idx !== 0) {
      $src = "../images/img__youtube1.png";
    } else {
      $src = "../images/img__youtube1_on.png";
    }
    $(".eventUl li").eq(0).find(".view_p").attr("src", $src);
  });
});
