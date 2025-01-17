$(document).ready(function(){
    // ===== 풀페이지 연결
    new fullpage('#wrap', {
        // 새로고침 시, 최상단 section으로 이동되는 부분 막기
        anchors: ['banner','puddingMenu', 'financierMenu'],
        scrollBar : true,
        scrollingSpeed : 500,
        normalScrollElements : '.sec2, footer',
        fitToSection : false
    });

    // ===== 위치값에 따라 scroll 버튼 보이기 및 감추기
    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        const sec3 = $('.sec2').offset().top;
        if(0 <= sct && sct <= sec3){
            $('.scroll-box').show();
        } else{
            $('.scroll-box').hide();
        }
    });

    // ===== 로그인 및 회원가입 모달창
    // user박스 기본값 
    $('.banner .userBox-wrap.loginBox').hide();
    $('.banner .userBox-wrap.signupBox').hide();
    // 1. icon-box 클릭 시, 로그인 창 보이기
    $('.banner .icon-box').click(function(){
        $('.banner .userBox-wrap.loginBox').slideDown();
    });
    // 2. closeBtn 클릭 시, userBox-wrap 창 닫기
    $('.banner .userBox-wrap .userBox .closeBtn').click(function(){
        $('.banner .userBox-wrap').slideUp();
    });
    // 3-1. loginBox > 회원가입하기 클릭 시, 회원가입 창 띄우기
    $('.banner .loginBox .input-box a').click(function(){
        $('.banner .loginBox').hide();
        $('.banner .signupBox').show();
    });
    // 3-2. signupBox > 로그인하기 클릭 시, 로그인 창 띄우기
    $('.banner .signupBox .input-box a').click(function(){
        $('.banner .loginBox').show();
        $('.banner .signupBox').hide();
    });
    // 4. 로그인하기 버튼 및 회원가입하기 버튼 클릭 시, userBox-wrap 창 닫기
    // 4-1. 로그인하기
    $('.banner .userBox-wrap.loginBox .input-box button').click(function(){
        $('.banner .userBox-wrap.loginBox').hide();
        $('.banner .userBox-wrap input').val('');
        alert('로그인 완료!');
    });
    // 4-2. 회원가입하기
    $('.banner .userBox-wrap.signupBox .input-box button').click(function(){
        $('.banner .userBox-wrap.signupBox').hide();
        $('.banner .userBox-wrap.loginBox').show();
        $('.banner .userBox-wrap input').val('');
        alert('회원가입 완료! 로그인 후 사용해주세요')
    });

    // ===== menu-btn 클릭 시, 메뉴 보이기 및 닫기
    $('.banner header .menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.banner .sub-menu').toggleClass("active");
    });

    // ==== sub-menu > menu 버튼 클릭 시, section1으로 이동하고 sub-menu 닫기
    $('.banner .sub-menu').children().first().click(function(){
        let sec1Top = $('.sec1').offset().top;
        $('html, body').animate({
            scrollTop : sec1Top
        }, 1000);
        $('.banner .sub-menu').removeClass('active');
        $('.banner header .menu-btn').removeClass('active');
    });

    // ===== header logo 클릭 시, 메인화면 돌아가기
    $('.banner header .logo').click(function(){
        $('.sec3').hide();
        let ww = $(window).width();
        if(ww > 830){
            $('.banner .banner-box-wrap').show();
        } else {
            $('.banner .banner-box-wrap-mb').show();
        }
        $('.sec1').show();
        $('.sec2').show();
    });

    // ===== section1 section2 영역에서는 header 스타일링 변경
    $(window).scroll(function(){
        sec1Top = $('.sec1').offset().top - 100;
        let sct = $(window).scrollTop();
        // console.log(sec1Top);
        // console.log(sct)

        if(sct> 0 && sct >= sec1Top){
            $('.banner header').addClass('active');
        } else {
            $('.banner header').removeClass('active');

        }
    });

    // ===== pudding financier swiper
    // window 크기값에 따라 siwper 크기 변경하기
    // 1. 함수 선언
    const swiperRe = () => {
        let ww = $(window).width();
        // console.log(ww);
        if(ww >= 1400){
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 7,
                centeredSlides: true,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                  },
            });
        } else if(ww >= 1000 && ww < 1400){
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 5,
                spaceBetween: 30,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                  },
            });
        } else if(ww < 1000 && ww > 780){
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                  },
            });
        } else if(ww <= 780 && ww > 580){
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                  },
            });
        } else{
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 5,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                  },
            });
        }
    }
    // 2. 함수 불러와 사용하기
    swiperRe();
    $(window).resize(function(){
        let ww = $(window).width();
        swiperRe();
    });
    // swiper 영역에 마우스 호버 시, 슬라이드 멈추고 마우스가 떠나면 다시 재생하기
    $(".mySwiper").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });


    // ===== window 스크롤 발생 시, 없애기
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        if(sct >= $('.sec1').offset().top){
            $('.scroll-box').hide();
        } else {
            $('.scroll-box').show();
        }
    });

    // ===== menu 버튼 클릭 시, 사이드 메뉴 보이기
    $('.menuBtn').click(function(){
        $('.side-menu-wrap .side-menu').toggleClass('active');
    });
    // 1. menu
    $('.side-menu-wrap .side-menu .menu').click(function(){
        $('.sec3').show();
        let ww = $(window).width();
        if(ww > 830){
            $('.banner .banner-box-wrap').hide();
        } else {
            $('.banner .banner-box-wrap-mb').hide();
        }
        $('.sec1').hide();
        $('.sec2').hide();
        $('.side-menu-wrap .side-menu').removeClass('active');
    });
    // 2. ask
    $('.side-menu-wrap .side-menu .ask').click(function(){
        alert('문의하기');
        $('.side-menu-wrap .side-menu').removeClass('active');
    });
    // 3. top
    $('.side-menu-wrap .side-menu .top').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 1000);
        $('.side-menu-wrap .side-menu').removeClass('active');
    });
    // 4. dark
    $('.side-menu-wrap .side-menu .dark').click(function(){
        alert('다크모드');
        $('.side-menu-wrap .side-menu').removeClass('active');
    });
});