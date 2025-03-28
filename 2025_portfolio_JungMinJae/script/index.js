const bnrSwiper = new Swiper('.bnr_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 5000,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        300: {
            slidesPerView: 1.4,
        },
        500: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3.8,
        },
    }
})

const snsSwiper = new Swiper('.sns_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 7000,
    slidesPerView:4,
    spaceBetween:20,
    breakpoints: {
        300:{
            slidesPerView: 1.6,
        },
        700:{
            slidesPerView: 2,
        },
        1020:{
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3.5,
        },
        1520: {
            slidesPerView: 4,
        },
    }
})

const detailSwiper = new Swiper('.detail_swiper', {
    loop:true,
    slidesPerView: 1,
    spaceBetween:30,
    breakpoints: {
        740: {
            slidesPerView: 2,
            spaceBetween:30,
        },
    }
})
/* other design 팝업 */
const img_popup_bg = document.querySelector('.img_popup_bg')
const bnrImg = document.querySelectorAll('.bnr_swiper img')
const snsImg = document.querySelectorAll('.sns_swiper img')
const detailImg = document.querySelectorAll('.detail_swiper img')

img_popup_bg.style.display = 'none';
for(let i of bnrImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.marginTop = '250px';
        if(window.innerWidth <= 560){
            img_popup_bg.children[0].style.width = '385px';
            img_popup_bg.children[0].style.marginTop = '300px';
        } else if(window.innerWidth <= 786){
            img_popup_bg.children[0].style.width = '540px';
        } else {
            img_popup_bg.children[0].style.width = '750px';
        }
    })
}
for(let i of snsImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.marginTop = '150px';
        if(window.innerWidth <= 560){
            img_popup_bg.children[0].style.width = '345px';
            img_popup_bg.children[0].style.marginTop = '200px';
        } else if(window.innerWidth <= 786){
            img_popup_bg.children[0].style.width = '540px';
        } else {
            img_popup_bg.children[0].style.width = '700px';
        }
        if(i.height > 419){
            img_popup_bg.children[0].style.marginTop = '45px';
        }
    })
}
for(let i of detailImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        img_popup_bg.children[0].children[0].src = i.src;
        if(window.innerWidth <= 560){
            img_popup_bg.children[0].style.width = '320px';
        } else if(window.innerWidth <= 786){
            img_popup_bg.children[0].style.width = '540px';
        }  else{
            img_popup_bg.children[0].style.width = '800px';
        }
        img_popup_bg.children[0].style.marginTop = '45px';
    })
}
img_popup_bg.addEventListener('click',()=>{
    img_popup_bg.style.display = 'none'
})

/* 프로필 사진 애니메이션 - 스크롤 적용 */
const personImg = document.querySelector('.about .person_img')
window.addEventListener('scroll',()=>{
    if ( window.scrollY >= 300) {
        personImg.style.animation = 'profile_animation 1s forwards';
    }
})