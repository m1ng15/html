/* 맨 위 공지사항 닫기 활성화 */
const headerNotice = document.querySelector('.hd_top')
const noticeClose = document.querySelector('.hd_top #close_btn')
noticeClose.addEventListener('click',()=>{
    headerNotice.style.display = 'none';
})
/* scroll에 따른 nav 색상 변환 */
const navBar = document.querySelector('header .hd_navbar')
navBar.classList.remove('navbar_shadow')
window.addEventListener('scroll',()=>{
    if ( window.scrollY > 800) {
        navBar.classList.add('navbar_shadow')
    } else { navBar.classList.remove('navbar_shadow') }
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
console.log(lineCategory)
lineCategory.forEach((list) => {
    list.addEventListener('mouseover', ()=>{
        list.classList.add('hover');
    })
    list.addEventListener('mouseleave', ()=>{
        list.classList.remove('hover');
    })
})