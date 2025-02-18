const mainHeaderSwiper = new Swiper('.main_bnr',{
    pagination:{
        el:'main .main-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
        navigation:{
        nextEl:'.bnr_btn .next',
        prevEl:'.bnr_btn .prev',
    },
});
const bestSwiper = new Swiper('.best_slider',{
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
const collectionSwiper = new Swiper('.collection_bnr',{
    pagination:{
        el:'main .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
});

const colcProductSwiper = new Swiper('.colc_product_bnr',{
    pagination:{
        el:'main .colc-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
});

const colcProductSwiper2 = new Swiper('.colc_product_slider',{
    slidesPerView:2.3,
    spaceBetween:15,
});

const concernsSwiper = new Swiper('.concerns_slider',{
    slidesPerView:3.6,
    spaceBetween:15,
});