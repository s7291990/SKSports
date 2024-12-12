$(function(){
  // 상단 주메뉴(GNB)
  $("body").on("mouseenter", ".gnb-box", function(ev){
    ev.preventDefault();
    //ev.stopPropagation();
    $("header").addClass("over");
    $(".wrapper").addClass("menu-active");
    setTimeout(function(){
      $("header").addClass("over").addClass("ing");
    },200)

  });
  $("body").on("mouseleave", "header", function(ev){
    ev.preventDefault();
    //ev.stopPropagation();
    $("header").removeClass("ing");
    $(".wrapper").removeClass("menu-active");
    setTimeout(function(){
      $("header").removeClass("ing").removeClass("over");
    },200)

  });
  $("body").on("mouseenter", ".off .gnb-list>li", function(ev){
    ev.preventDefault();
    $(".gnb-list>li").removeClass("on").addClass("disabled");
    $(this).addClass("on");
  });
  $("body").on("click", ".on .gnb-list>li>a", function(ev){
    ev.preventDefault();
    //ev.stopPropagation();
    var ck = $(this).parents("li").eq(0).hasClass("on");
    if(ck){
      $(this).parents("li").eq(0).removeClass("on");
    }else{
      $(".gnb-list>li").removeClass("on").addClass("disabled");
      $(this).parents("li").eq(0).addClass("on");
    }
  });
  $("body").on("click", ".btn-total-nav, .btn-main-total-nav", function(ev){
    $(".gnb-box").removeClass("off").addClass("on");
  });
  $("body").on("click", ".btn-mob-gnb-close", function(ev){
    $(".gnb-box").removeClass("on").addClass("off");
  });

  // 패밀리 사이트
  $("body").on("click", "#footer .fot_fam button", function(){
    var ck = $("#footer .fot_fam").hasClass("active");
    if(ck){
      $("#footer .fot_fam").removeClass("active");
    }else{
      $("#footer .fot_fam").addClass("active");
    }

  });

  // 일정 텝메뉴
  $("body").on("click", ".month-slide-wrap .swiper-container .swiper-slide a", function(){
    $(".month-slide-wrap .swiper-container .swiper-slide a").removeClass("on");
    $(this).addClass("on");
  });

  // 후원지원 텝메뉴
  $("body").on("click", ".tabmenu-list-wrap ul li a", function(){
    $(".tabmenu-list-wrap ul li a").removeClass("on");
    $(this).addClass("on");
    var dataId = $(this).attr("data-tab");
    $(".tabarea").removeClass("on");
    $(dataId).addClass("on");
  });

  // 달력열기
  $("body").on("click", ".btn-datepicker", function(){
    $(".calendar-dialog-wrap").addClass("on");
    $(".header-item-wrap").addClass("disabled");
  });
  $("body").on("click", ".datepicker-close", function(){
    $(".calendar-dialog-wrap").removeClass("on");
    $(".header-item-wrap").removeClass("disabled");
  });
  $("body").on("click", ".datepicker-table td a", function(ev){
    $(".datepicker-table td a").removeClass("selected");
    $(this).addClass("selected");
  });
});