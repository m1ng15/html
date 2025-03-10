// 0. 메인 배너 슬라이드
const mainHeaderSwiper = new Swiper('.main_bnr',{
    speed : 800,
    autoplay:{delay:2000,},
    loop: true,
    on:{
        slideChangeTransitionStart :function(){
            document.querySelectorAll('.main_bnr .swiper-slide .contents').forEach(slide => slide.style.transform = 'translateY(20px)');
            document.querySelectorAll('.main_bnr .swiper-slide .contents').forEach(slide => slide.style.opacity = '0');
        },
        slideChangeTransitionEnd :function(){
            document.querySelector('.main_bnr .swiper-slide-active .contents').style.transform = 'translateY(0)';
            document.querySelector('.main_bnr .swiper-slide-active .contents').style.opacity = '1';
            document.querySelector('.main_bnr .swiper-slide-active .contents').style.transition = 'all 1s';
        }
    },
    pagination:{
        el:'.main_bnr_wrap .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
    navigation:{
        nextEl:'.main_bnr_wrap .bnr_btn .next',
        prevEl:'.main_bnr_wrap .bnr_btn .prev',
    },
});
// 1행 베스트 상품 슬라이드 - 전체 상품
const bestSwiper = new Swiper('#all_best_slider',{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar: {
        el: ".swiper-scrollbar",
        type: "progressbar",
    },
    navigation:{
        nextEl:'.best_move_btn .next',
        prevEl:'.best_move_btn .prev',
    },
});
// 3행 콜렉션 소개 배너
const collectionSwiper = new Swiper('.collection_bnr',{
    speed : 800,
    autoplay:{delay:2000,},
    loop: true,
});
// 5행 콜렉션 상품 추천 배너
const colcProductSwiper = new Swiper('.colc_product_bnr',{
});
// 5-1행 콜렉션 상품 내부 슬라이드
const colcProductSwiper2 = new Swiper('.colc_product_slider',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop: true,
    speed : 2000,
    slidesPerView:2,
    spaceBetween:15,
});
// 6행 피부 고민별 상품 슬라이드 - 모공/피지
const concernsSwiper = new Swiper('#pore_slider',{
    slidesPerView:3.6,
    spaceBetween:15,
});
// 7행 베스트 리뷰 슬라이드
const reviewSwiper = new Swiper('.review_swiper',{
    loop: true,
    initialSlide: 1,
    slidesPerView: 2,
    spaceBetween: 45,
    centeredSlides:true,
    on:{
        slideChangeTransitionEnd :function(){
            document.querySelectorAll('.review_swiper .swiper-slide').forEach(slide => slide.style.opacity = '0.2');
            document.querySelectorAll('.review_swiper .swiper-slide').forEach(slide => slide.style.transform = 'scale(0.9)');
            document.querySelector('.review_swiper .swiper-slide-active').style.opacity = '1';
            document.querySelector('.review_swiper .swiper-slide-active').style.transform = 'scale(1)';
        }
    },
    navigation:{
        nextEl:'main .review_move_btn .next',
        prevEl:'main .review_move_btn .prev',
    },
});