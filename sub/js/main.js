$(function () {


  /* 제품 컬러 선택에 맞는 이미지 변화주기 */
  let colorBtn1 = $('.section10 .inner .item_wrap .item .text .color_btn01 button');
  let colorBtn2 = $('.section10 .inner .item_wrap .item .text .color_btn02 button');
  let colorImg1 = $('.section10 .inner .item_wrap .ear_img01 img');
  let colorImg2 = $('.section10 .inner .item_wrap .ear_img02 img');

  colorBtn1.click(function(){
      colorBtn1.removeClass('on');
      $(this).addClass('on');
      colorImg1.removeClass('on');
      colorImg1.eq($(this).index()).addClass('on');
  });
  colorBtn2.click(function(){
      colorBtn2.removeClass('on');
      $(this).addClass('on');
      colorImg2.removeClass('on');
      colorImg2.eq($(this).index()).addClass('on');
  });

  /* 스크롤 시 아이템 나타나기 */
  window.addEventListener('scroll', () => {
      let scrollBar = window.scrollY;
      let section01Text = document.querySelector('.section01 h3');
      let section03Text = document.querySelector('.section03 h3');
      let section02 = document.querySelector('.section02');
      let section02Item = document.querySelectorAll('.section02 .item');
      let section04Item = document.querySelector('.section04 .item_wrap');
      let section04Img = document.querySelector('.section04 img');

      console.log(scrollBar);
      if ($(window).width() >= 1024) {
          if (1400 < scrollBar) {
              section02.classList.add('scroll_on');

              section02Item.forEach((item, index) => {
                  item.classList.add('on' + index, 'scroll_on');
              });
          } else {
              section02.classList.remove('scroll_on');
              section02Item.forEach((item) => {
                  item.classList.remove('on', 'scroll_on');
              });
          }
          if (700 < scrollBar) {
              section01Text.classList.add('fade');
          } else {
              section01Text.classList.remove('fade');
          }
          if (3100 < scrollBar) {
              section03Text.classList.add('fade');
          } else {
              section03Text.classList.remove('fade');
          }
          if (3900 < scrollBar) {
              section04Item.classList.add('scroll_on');
              section04Img.classList.add('scroll_on');

              section04Img.animate({right : '0'},1000,'easeInOutQuad');
          } else {
              section04Item.classList.remove('scroll_on');
              section04Img.classList.remove('scroll_on');

              section04Img.animate({right : '-100%'},1000,'easeInOutQuad');
          }
      } else {
          section02.classList.add('scroll_on');
          section02Item.forEach((item, index) => {
              item.classList.add('on' + index, 'scroll_on');
          });
          section01Text.classList.add('fade');
          section03Text.classList.add('fade');
          section04Item.classList.add('scroll_on');
          section04Img.classList.add('scroll_on');
      }

  });

  /* section08 옵션 클릭 시 depth02와 순서값에 맞는 이미지 나타내기 */
  let bg = $('.section08 .right div')
  $('.section08 .option li').click(function () {
      $('.depth02').removeClass('on');
      $('.depth01').removeClass('on');
      $('.section08 .option li').removeClass('on');
      $(this).children().addClass('on');
      $(this).addClass('on');

      // console.log($(this).index())
      bg.removeClass('on');
      bg.eq($(this).index()).addClass('on');

  });

  $('.up_btn').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 700)
  });
  $(window).scroll(function () {
      /* scrollTop값이 0이면 up버튼 사라짐 */
      if ($(window).scrollTop() > 0) {
          $('.up_btn').css({
              'display': 'block'
          })
      } else {
          $('.up_btn').css({
              'display': 'none'
          })
          $('header').removeClass('on');
      }
  });

  /* a 태그 클릭 막기 */
  $('.section08 .option > li a').click(function (event) {
      event.preventDefault();
      // alert()
  });

  /* 스와이퍼 슬라이드 */
  var swiper = new Swiper(".slide07", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {delay: 3500},
      speed : 700,
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 2000,
          modifier: 1,
          slideShadows: true,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      loop: true,
      freemode: true,
  });
}); //script end