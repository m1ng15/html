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