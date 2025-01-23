//일정 시간 후 한번 실행하고 끝나는 setTimeout 함수
//const 변수명 = setTimeour(실행함수, 시간);
//setTimeout(실행함수, 시간);
//setTimeout 내 함수를 별도로 생성하고 타이머 안에서 호출식으로도 많이 이용한다.
const timer1 = setTimeout(function(){
    console.log('한 번 실행하는 문구');
},2000)
const timer2 = setTimeout(test, 1000);
function test(){
    return /* alert */console.log('한 번 실행하는 경고창');
}
const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    clearTimeout(timer2);
    console.log('timer2 정지');
    clearTimeout(timer1);
    console.log('timer1 정지');
})
//무한으로 반복되며 올라가는 공지사항
//최종 목표 : 공지1->2->3->4->공지1->2->3->4 반복
//목표1. 공지1->2->3->4
//어느방향으로 이동하는지, 그 방향에 따른 가로, 세로 크기는 무엇인지 -> check
//아래->위로 이동한다 == top, translateY, 크기 == 세로크기
//좌->우로 이동한다 == left, translateX, 크기 == 가로크기
//2. 가로 또는 세로크기가 결정됐다면? 이동 요소 개수가 몇 개? -> 인덱스 확인
//세로로 이동한다면? (세로크기 * 인덱스) 계산해야함
//3. 변수 준비
//공지1,2,3,4를 모두 가지고 있는 움직이는 대상 ul:"newsList"
//개별요소 파악을 위한 li "newsItems"
//개별요소 크기 "itemHeight"
//인덱스 "currentIndex"
const newsList = document.querySelector('#list');
const newsItems = document.querySelectorAll('#list li');
const itemHeight = newsItems[0].offsetHeight; //요소의 크기를 확인 //40;
let currentIndex = 0;
const newsTimer = setInterval(newsSlide,1000);
function newsSlide(){
    //모든 list가 이동했을 때 초기화 하는 조건문가 setTimeout
    currentIndex++;
    newsList.style.transform = `translateY(-${itemHeight*currentIndex}px)`;
    newsList.style.transition ='transform 0.5s ease';
    if(currentIndex == (newsItems.length)){
        setTimeout(()=>{
            currentIndex = 0;
            newsList.style.transform = 'translateY(0)';
            newsList.style.transition ='none';
        },500); /* transition 시간과 동일하게 설정 */
    }
    /* 무한스크롤 동작을 위한 원본 공지사항 복제 후 리스트 끝에 추가하기 */
}
for (let i of newsItems){
    const clone = i.cloneNode(true);
    newsList.appendChild(clone);
    console.log(clone);
} //이미지 배너 활용

//news_container2 좌->우로 넘어가는 공지사항2
const newsList2 = document.querySelector('#list2');
const newsItems2 = document.querySelectorAll('#list2 li');
const itemWidth = newsItems2[0].offsetWidth; //요소의 크기를 확인 //798;
let currentIndex2 = 0;
const newsTimer2 = setInterval(newsSlide2,1000);
function newsSlide2(){
    currentIndex2++;
    newsList2.style.transform = `translateX(-${itemWidth*currentIndex2}px)`;
    newsList2.style.transition ='transform 0.5s ease';
    if(currentIndex2 == newsItems2.length){
        setTimeout(()=>{
            currentIndex2 = 0;
            newsList2.style.transform = 'translateX(0)';
            newsList2.style.transition = 'none';
        }, 500);
    }
}
for(let i of newsItems2){
    const clone2 = i.cloneNode(true);
    newsList2.appendChild(clone2);
}
