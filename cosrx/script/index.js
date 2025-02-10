const mainSwiper = new Swiper('.main_bnr',{
    pagination:{
        el:'main .swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets:true,
    },
        navigation:{
        nextEl:'.btn .next',
        prevEl:'.btn .prev',
    },
});