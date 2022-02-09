(($,window,document,undefined)=>{
  class Pofo {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.section9();
      this.section10();
      this.footer();
    }
    header(){
      const $window = $(window),
            $header = $('#header'),
            main_menu = $header.find('.main-menu'),
            menu_A =  main_menu.find('a'),
            sub_container = main_menu.find('.sub'),
            sub_menu = sub_container.find('.sub-menu'),
            s_sub = sub_menu.find('.s_sub');

        let lastScroll;

            $window.on({
              scroll(){
                let nowScroll = $(this).scrollTop();
                  if(lastScroll - nowScroll > 0){
                    $header.removeClass('up')
                  }else if(lastScroll - nowScroll <= -1){
                    $header.addClass('short')
                    $header.addClass('up')
                  }
                  if($(this).scrollTop() == 0){
                    $header.removeClass('short')
                  }
                  return lastScroll = nowScroll;
              }
            })


            menu_A.on({
              click(e){
                e.preventDefault();
              }
            })
            main_menu.on({
              mouseover(){
                sub_container.stop().fadeOut(200);
                $(this).addClass('active').siblings().removeClass('active');
                $(this).find('.sub').stop().fadeIn(300);
              },
              mouseleave(){
                sub_container.stop().fadeOut(200);
                main_menu.removeClass('active');
              }
            })
            sub_menu.on({
              mouseover(){
                s_sub.stop().fadeOut(200);
                $(this).addClass('active').siblings().removeClass('active');
                $(this).find('.s_sub').stop().fadeIn(300);
              },
              mouseleave(){
                s_sub.stop().fadeOut(200);
                sub_menu.removeClass('active');
              }
            })



    }
    section1(){
      const  slideContainer = $('.slide-container'),
             slideView = slideContainer.find('.slide-view'),
             slideWrap= slideView.find('.slide-wrap'),
             slides = slideWrap.find('.slide'),
             slideLength = slides.length,
             slideWidth = slides.width();

         let cnt = 0,
             seconds = 0,
             reStart,
             timer,
             mSt,
             mEnd,
             dSt,
             dEnd,
             mDw = false;


             let mainSlide =() => {
               slideWrap.stop().animate({left : -slideWidth * cnt },1000,'easeInOutSine',function(){
                 if(cnt > slideLength-3){cnt = 0}
                 if(cnt < 0){cnt = slideLength-3}
                 slideWrap.stop().animate({left : -slideWidth * cnt },0)
               })
             }
             let nextSlide =() => {
              if(!slideWrap.is(':animated')){
                cnt++;
                mainSlide();
              }
             }
             let prevSlide =() => {
              if(!slideWrap.is(':animated')){
                cnt--;
                mainSlide();
              }
             }
             let autoTimer =() => {
              timer = setInterval(nextSlide,4000);
             }
             autoTimer();
             let stopAndRestart = ()=>{
              clearInterval(timer);
              clearInterval(reStart);
              seconds = 0;
              reStart = setInterval(function(){
                seconds++;
                console.log(seconds);
                if(seconds == 2){
                  autoTimer();
                  clearInterval(reStart);
                }
              },1000)
             }
             
             slideView.on({
               mousedown(e){
                mDw = true;
                mSt = e.clientX;
                dSt = e.clientX -slideWrap.offset().left -slideWidth;
                clearInterval(timer);
                clearInterval(reStart);
                },
               mouseup(e){
                mDw = false;
                mEnd = e.clientX;
                if((mSt - mEnd) > (slideWidth/3)){nextSlide()}
                if((mSt - mEnd) < -(slideWidth/3)){prevSlide()}
                if(-(slideWidth/3) <= (mSt - mEnd) <= (slideWidth/3)){mainSlide()}
                stopAndRestart()
               },
               mousemove(e){
                 if(!mDw){return}
                 dEnd = e.clientX;
                 let drag = dEnd - dSt;
                 slideWrap.css({left:drag})
               },
               mouseleave(e){
                if(!mDw){return}
                mDw = false;
                mEnd = e.clientX;
                if((mSt - mEnd) > (slideWidth/3)){nextSlide()}
                if((mSt - mEnd) < -(slideWidth/3)){prevSlide()}
                if(-(slideWidth/3) <= (mSt - mEnd) <= (slideWidth/3)){mainSlide()}
                stopAndRestart()
               }
             })



    }
    section2(){

    }
    section3(){

    }
    section4(){

    }
    section5(){

    }
    section6(){

    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){

    }
    footer(){

    }
  }

  const pofo = new Pofo();
        pofo.init();

})(jQuery,window,document)