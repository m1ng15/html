//타이머 함수
//일정시간마다 반복하는 setInterval
//setInterval (실행함수, 실행시간)
//const 타이머변수 = setInterval(실행함수, 실행시간)
let num = 0;
const timerRes = document.querySelector('#timerCount');
const userTime = document.querySelector('#user_time');
const timeSet = document.querySelector('#timeset_btn');
console.log(timerRes);
timeSet.addEventListener('click', function(){
    num = Number(userTime.value);
})
/* const timer = setInterval(function(){
    if (num > 0){
        timerRes.innerHTML = `타이머 : ${num} 초`;
        num--;
    } else {timerRes.innerHTML = `시간이 다 됐습니다!`;
        window.location.href = "https://google.com";
    }
}, 1000); */
// 애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
let ballTimer = setInterval(timerCount, 1000);
function timerCount(){
    num++
    timerRes.textContent = `스탑워치 : ${num} 초`
}
//stop 버튼 클릭 시 진행시간, 애니메이션이 모두 정지
const boxBall = document.querySelector('.box');
const stopBtn = document.querySelector('#stop');
const playBtn = document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
    clearInterval(ballTimer);
    //boxBall.style.animation = 'none';
    boxBall.style.animationPlayState = 'paused';
})
playBtn.addEventListener('click', ()=>{
    boxBall.style.animationPlayState = 'running';
    ballTimer = setInterval(timerCount, 1000);
})
//한 글자씩 작성하는 자바스크립트 (PORTFOLIO 2025)
/* const textSpan = document.querySelector('.container .text');
const text = 'Portfolio 2025';
let i = 0; //글자 인덱스 인식 변수
const timer3 = setInterval(writer, 200);
function writer(){
    if(i <= text.length){
        textSpan.innerHTML += text.charAt(i);
        i++;
    }else{}
} */
//한 글자씩 작성하는 자바스크립트 (HAPPY BIRTHDAY)
const textSpan2 = document.querySelector('.container2 .text');
const text2 ='HAPPY BIRTHDAY Dear.'
let i = 0;
console.log(text2);
const timer4 = setInterval(writerBirth, 130);
function writerBirth(){
    if(i <= text2.length){
        if(text2.charAt(i)==' '){textSpan2.innerHTML += '<br>'}
        textSpan2.innerHTML += text2.charAt(i);
        i++
    }
}