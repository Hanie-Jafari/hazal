$(function () {
  //loader
  $(".loader").hide();
  //elevator
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("header").height()) {
      $(".elevator").fadeIn();
      $(".elevator").css("display", "flex");
    } else {
      $(".elevator").fadeOut();
    }
  });
  $(".elevator").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 100);
  });
  //burger menu
  $(".burger-menu").click(function () {
    $(".navbar-menu").toggle();
    $(".navbar-menu li").click(function () {
      setTimeout(function () {
        $(".navbar-menu").hide();
      }, 2000);
    });
  });
  window.addEventListener("click", function (e) {
    if (
      !document.querySelector(".navbar-menu").contains(e.target) &&
      !document.querySelector(".navbar-wrapper").contains(e.target)
    ) {
      $(".navbar-menu").hide();
    }
  });
  // fixed menu
  var navbar = document.querySelector(".navbar-wrapper");
  $(window).scroll(function () {
    if (window.scrollY > navbar.offsetHeight) {
      $(".navbar-wrapper").css("position", "fixed");
      $(".navbar-wrapper").css("top", "0");
      $(".navbar-wrapper").css("left", "0");
      $(".navbar-wrapper").css("border-bottom", "1px solid whitesmoke");
      $(".navbar-wrapper").css("padding", "10px 0");
      $(".navbar-wrapper").css("transition", "height 0.3s linear");
    } else {
      $(".navbar-wrapper").css("padding", "25px 0");
      $(".navbar-wrapper").css("position", "relative");
      $(".navbar-wrapper").css("border-bottom", "none");
    }
  });
  //change menu-link class to active on a one-page website
  var scrollLink = $(".scroll");
  // smooth scrolling
  $(scrollLink).click(function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });
  //switching active link
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash);
      if (sectionOffset.length) {
        var sectionTop = sectionOffset.offset().top - navbar.offsetHeight;
      }
      if (sectionTop <= scrollbarLocation) {
        $(this).addClass("current-page");
        $(this).parent().siblings().children().removeClass("current-page");
      }
    });
  });
  //video
  $(".hero-video").click(function () {
    $(".video-page").css({ opacity: "1", visibility: "visible" });
    $(".video-page .cross").click(function (e) {
      e.preventDefault();
      rot(this);
      $(".video-page").css({ opacity: "0", visibility: "hidden" });
    });
  });
  var count = 0;
  function rot(e) {
    count++;
    var deg = count * 90;
    e.style.transform = "rotate(" + deg + "deg)";
  }
  // clients
  $(".clients-images .clients-images-box1").css("opacity", "1");
  $(".clients-images .clients-images-box").hover(function () {
    $(this).css("opacity", "1");
    $(this).siblings().css("opacity", "0.5");
    $(this)
      .parents(".clients-images")
      .parents(".container")
      .children(".clients-content")
      .children(".section")
      .removeClass("active");
    $(this).addClass("active");
    $(".clients-content .section").hide();
    $(".clients-content ." + $(this).data("select")).show();
  });
  //showing one box and hide other every 3s
  let box0 = document.querySelector(".service-box0 .services2-content");
  let box1 = document.querySelector(".service-box1 .services2-content");
  let box2 = document.querySelector(".service-box2 .services2-content");
  let box3 = document.querySelector(".service-box3 .services2-content");
  let box4 = document.querySelector(".service-box4 .services2-content");
  let box5 = document.querySelector(".service-box5 .services2-content");
  let box6 = document.querySelector(".service-box6 .services2-content");
  const mediaQuery = window.matchMedia("(min-width: 500px)");
  if (mediaQuery.matches) {
    var messages = [],
      index = 0;
    messages.push(box1);
    messages.push(box2);
    messages.push(box3);
    messages.push(box4);
    messages.push(box5);
    messages.push(box6);

    function cycle() {
      $(box0).html(messages[index]);
      index++;
      if (index === messages.length) {
        index = 0;
      }
      setTimeout(cycle, 3000);
    }
    cycle();
  }
  //giving scale to icon box every 2s
  let iconBox1 = document.querySelector(".service-box1 .icon-box1");
  let iconBox2 = document.querySelector(".service-box2 .icon-box2");
  let iconBox3 = document.querySelector(".service-box3 .icon-box3");
  let iconBox4 = document.querySelector(".service-box4 .icon-box4");
  let iconBox5 = document.querySelector(".service-box5 .icon-box5");
  let iconBox6 = document.querySelector(".service-box6 .icon-box6");
  if (mediaQuery.matches) {
    var iconArray = [],
      indexIconArray = 0;
    iconArray.push(iconBox1);
    iconArray.push(iconBox2);
    iconArray.push(iconBox3);
    iconArray.push(iconBox6);
    iconArray.push(iconBox5);
    iconArray.push(iconBox4);

    function cycleIcon() {
      $(iconArray[indexIconArray]).toggleClass("icon-animated");
      indexIconArray++;
      if (indexIconArray === iconArray.length) {
        indexIconArray = 0;
      }
      setTimeout(cycleIcon, 3000);
    }
    $(iconArray[indexIconArray]).css({
      transform: "translate(-50%, 0%) scale(1)",
    });
    cycleIcon();
  }
  //search
  const searchInput = document.querySelector(".search-page input");
  const blink = document.querySelector(".blinking-cursor");
  const searchResult = document.querySelector(".search-result h1 span");
  const inputVal = localStorage.getItem("searchValue");
  $(".navbar .navbar-menu li:last-child,.burger-search").click(function (e) {
    e.preventDefault();
    $(".search-page").css({ opacity: "1", visibility: "visible" });
    $(blink).css("display", "flex");
    document.addEventListener("keypress", function (e) {
      searchInput.focus();
      $(blink).css("display", "none");
      if (searchInput.value !== "") {
        localStorage.setItem("searchValue", searchInput.value);
      }
      if (searchInput.value !== "" && e.which == 13) {
        window.open("search.html");
      }
    });
    searchInput.value = "";
  });
  $(searchResult).text(inputVal);
  $(".search-page .cross").click(function (e) {
    e.preventDefault();
    $(".search-page").css({ opacity: "0", visibility: "hidden" });
  });
  $(searchInput).focus(function () {
    $(blink).css("display", "none");
  });
});
