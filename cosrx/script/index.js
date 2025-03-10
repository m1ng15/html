/* 맨 위 공지사항 닫기 활성화 */
const headerNotice = document.querySelector('.hd_top')
const noticeClose = document.querySelector('.hd_top #close_btn')
noticeClose.addEventListener('click',()=>{
    headerNotice.style.display = 'none';
})
/* scroll에 따른 nav 배경색 변환 */
const navBar = document.querySelector('header .hd_navbar')
window.addEventListener('scroll',()=>{
    if (window.scrollY > 800) {
        navBar.classList.add('active')
    } else {navBar.classList.remove('active')}
})
/* nav에 hover 시 배경색 변환 */
navBar.addEventListener('mouseover',()=>{
    navBar.classList.add('active');
})
navBar.addEventListener('mouseout',()=>{
    navBar.classList.remove('active');
})
/* nav 메뉴에 hover 시 메뉴선 활성화 */
const navMenu = document.querySelectorAll('header nav .path li');
const subMenuActive = document.querySelector('header nav .sub_active');
const subMenu = document.querySelector('header nav .sub_bg');
navMenu.forEach((menu)=>{
    menu.addEventListener('mouseover',()=>{
        subMenu.classList.remove('active');
        menu.classList.add('active')
    })
    menu.addEventListener('mouseout',()=>{
        menu.classList.remove('active')
    })
})
/* skincare hover 시 서브 메뉴 활성화 */
subMenuActive.addEventListener('mouseover',()=>{
    subMenu.classList.add('active');
})
subMenu.addEventListener('mouseout',()=>{
    subMenu.classList.remove('active');
})
/* (메인 배너) 제품 더보기 버튼 오버 시, 슬라이드 정지 */
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