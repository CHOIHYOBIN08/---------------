




//헤더 탭메뉴
$('.gnb-item').hover(function(e){
  e.preventDefault();

  if($(this).find('.sub').length){
    $('#header').addClass('hover')
    $(this).find('.sub').addClass('show')
  }

},function(){
  $('#header').removeClass('hover')
  $(this).find('.sub').removeClass('show')


  $('#header .sub .sub-item a').removeClass('on')
  $('#header .sub .sub-item:first-child a').addClass('on')
})

$('#header .sub .sub-item:first-child a').addClass('on')



$('#header .sub a').hover(function(){
  $('#header .sub .sub-item a').removeClass('on')
  $(this).addClass('on')
})

let lastScrollTop = 0;

            $(window).scroll(function() {
                let currentScroll = $(this).scrollTop();
                if (currentScroll > lastScrollTop) {
                    $('#header').css('top', '-95px');
                } else {
                    $('#header').css('top', '0');
                }
                lastScrollTop = currentScroll;
            });

//메뉴버튼

$('#header .btn-menu').click(function(e){
  e.preventDefault(); 
  $('html').addClass('hidden');
  $('.nav-menu').addClass('show');
})
$('.nav-menu .nav-close').click(function(){
  $('.nav-menu').removeClass('show');
  $('html').removeClass('hidden');
})



//서브메뉴
$('#header .nav-menu .nav-group .title-area .title').click(function(e){
  e.preventDefault();


  const $title = $(this);
  const $list = $title.closest('.nav-item').find('.list');
  const $svg = $title.find('svg');


  if ($title.hasClass('on')) {

    $title.removeClass('on');
    $list.slideUp(); 
} else {

    $('.title').removeClass('on');
    $('.list').slideUp(); 
    
   
    $title.addClass('on');
    $list.slideDown(); 
}


$svg.toggleClass('on');
});







//메인 슬라이드
    const visualSlide = new Swiper('.visual-slide',{
      loop:true,
      pagination:{
          el:".pagination",
      },
      autoplay:{
        delay:4000
      }
    })




  //카드 슬라이드
    const cardSlide = new Swiper('.sc-card .content-slide',{
      speed:2000,
      loop:true,
      autoplay:{
          delay:0,
      },
      slidesPerView:'auto',
    })
  
    $('.sc-card .content-slide').hover(function(){
      cardSlide.autoplay.stop()
    },function(){
      cardSlide.autoplay.start()
    })


    //푸터
    $('#footer .site-group .link-site').click(function(){
      $('#footer .site-group .site-list').toggleClass('on')
      $('#footer .site-group .link-site .rotate').toggleClass('active');
    })
  


  //동영상재생

  const video = $('#myVideo').get(0);
  const btn = $('.btn-stop');


  $('.btn-control').click(function(){

    if ($(this).hasClass('on')) {
      $('#myVideo').get(0).currentTime=0;
      $('#myVideo').get(0).play();
      
    } else {
      $('#myVideo').get(0).pause();
    }

    $(this).toggleClass('on');
  })
  










