//상품 썸네일 JS
//1. 작은 썸네일 이미지에 마우스를 올렸다
//2. 위 1번 대상에만 테두리가 적용된다(다른 모든 요소에 테두리가 제거)
//3. 위 1번 대상이 우측 큰 이미지에 나타났다
const thumbnail = document.querySelectorAll('.thumbnail a img');
const bigImage = document.querySelector('.photo .big img');

//두번째 썸네일에 마우스 올렸을 때 큰 이미지 big2.jpg로 변경
function thum_remove(){
    thumbnail[0].parentElement.classList.remove('active');
    thumbnail[1].parentElement.classList.remove('active');
    thumbnail[2].parentElement.classList.remove('active');
    thumbnail[3].parentElement.classList.remove('active');
    thumbnail[4].parentElement.classList.remove('active');
};
function bigSrc(num){
    thumbnail[num-1].parentElement.classList.add('active');
    return bigImage.src = `./images/big${num}.jpg`;
};
thumbnail[0].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(1);
})
thumbnail[1].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(2);
})
thumbnail[2].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(3);
})
thumbnail[3].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(4);
})
thumbnail[4].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(5);
})
//======================상품 배송 도착정보 JS
//0. 변수 준비
const schedule = document.querySelector('.ship_schedule');
const scheduleOpen = document.querySelector('.schedule_open');
//1. (시작 전) 도착예정 정보 숨기기
scheduleOpen.classList.add('hide');
//2. 도착예정 링크 클릭
schedule.addEventListener('click', (e)=>{
    console.log(e);
    e.preventDefault();
    /* JS 이벤트 대상으로 a태그 사용 시 href="#" 속성으로 인해 클릭시
    스크롤이 위로 자동으로 올라가는 문제점이 발생한다. */
    /* (위)해결방법 : DOM 객체 클릭 시 발생하는 속성(a태그의 경우 href)는
    이벤트 내 매개변수로 저장되는 특징이 있는데 이를 이용해 이벤트를
    막아주는 메서드를 활용하면 위 문제를 해결할 수 있다. */
    scheduleOpen.classList.toggle('hide');
})
//3. 도착예정정보 숨기기