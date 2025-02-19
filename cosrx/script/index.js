// 0. 메인 배너 슬라이드
const mainHeaderSwiper = new Swiper('.main_bnr',{
    speed : 800,
    autoplay:{delay:2000,},
    loop: true,
    pagination:{
        el:'main .main-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
        navigation:{
        nextEl:'.bnr_btn .next',
        prevEl:'.bnr_btn .prev',
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
        nextEl:'.best_btn .next',
        prevEl:'.best_btn .prev',
    },
});
// 3행 콜렉션 소개 배너
const collectionSwiper = new Swiper('.collection_bnr',{
    speed : 800,
    autoplay:{delay:2000,},
    loop: true,
    pagination:{
        el:'main .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
});
// 5행 콜렉션 상품 추천 배너
const colcProductSwiper = new Swiper('.colc_product_bnr',{
});
// 5-1행 콜렉션 상품 추천 슬라이드
const colcProductSwiper2 = new Swiper('.colc_product_slider',{
    slidesPerView:2.3,
    spaceBetween:15,
});
// 6행 피부 고민별 상품 슬라이드 - 모공/피지
const concernsSwiper = new Swiper('#pore_slider',{
    slidesPerView:3.6,
    spaceBetween:15,
});