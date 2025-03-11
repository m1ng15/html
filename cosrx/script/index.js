/* 맨 위 공지사항 닫기 활성화 */
const headerNotice = document.querySelector('.hd_top')
const noticeClose = document.querySelector('.hd_top #close_btn')
noticeClose.addEventListener('click',()=>{
    headerNotice.style.display = 'none';
})
/* ===================================== header 애니메이션 */
const navBar = document.querySelector('header .hd_navbar')
const mainBnr = document.querySelector('main .main_bnr_wrap')
/* scroll에 따른 header 배경색 변환 */
window.addEventListener('scroll',()=>{
    if (window.scrollY < 750) {
        navBar.classList.remove('active')
    } else {navBar.classList.add('active')}
})
/* header에 hover 시 배경색 변환 */
navBar.addEventListener('mouseover',()=>{
    navBar.classList.add('active');
})
mainBnr.addEventListener('mouseover',()=>{
    navBar.classList.remove('active');
})

/* nav에 hover시, 활성화선 표시 */
const navMenu = document.querySelectorAll('header nav .path li');
const subMenuActive = document.querySelector('header nav .sub_active');
const subMenu = document.querySelector('nav .sub_bg');
navMenu.forEach((menu)=>{
    menu.addEventListener('mouseover',()=>{
        subMenu.classList.remove('active');
        menu.classList.add('active')
    })
    menu.addEventListener('mouseout',()=>{
        subMenu.style.display = 'none';
        menu.classList.remove('active')
    })
})
/* nav - skincare hover시, 서브 메뉴 활성화 */
subMenuActive.addEventListener('mouseover',()=>{
    subMenu.style.display = 'block';
})
subMenu.addEventListener('mouseover',()=>{
    subMenu.style.display = 'block';
})
subMenu.addEventListener('mouseleave',()=>{
    subMenu.style.display = 'none';
})
/* (메인 배너) 제품 더보기 버튼 오버시, 슬라이드 정지 */
const bnrMoreBtn = document.querySelectorAll('.main_bnr_wrap .main_bnr #bnr_more')
bnrMoreBtn.forEach((btn) => {
    btn.addEventListener('mouseover',()=>{
        mainHeaderSwiper.autoplay.stop();
    })
    btn.addEventListener('mouseout',()=>{
        mainHeaderSwiper.autoplay.start();
    }) 
})
/* 콜렉션 상품 카테고리 활성화 */
const lineCategory = document.querySelectorAll('.main_wrap .line_style_category li')
lineCategory.forEach((list) => {
    list.addEventListener('mouseover', ()=>{
        list.classList.add('hover');
    })
    list.addEventListener('mouseleave', ()=>{
        list.classList.remove('hover');
    })
})