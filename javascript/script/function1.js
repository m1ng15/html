//==========================함수스코프, 지역변수와 전역변수
//함수 외부(전역스코프 위치)
let b = 20;
let c = 30;
let a;
//function 함수명(매개변수)(반복 알고리즘;)
function test(){
    //함수 내부(지역스코프 위치)
    a = 10; 
    console.log(a);
}
//선어한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야 한다!
//호출방법 : 함수명()
console.log(a+b)
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출
//============================================함수스코프 연습2
//6 16 출력
let x = 1;
let y;
function func1(){
    y = 5;
    console.log(x+y);
}
func1(); //함수2 안에 함수1 호출식이 존재한다면 함수2 호출 할 때 함수1이 함께 출력되는 경우를 의미한다.
func2();
function func2(){
    let z = 10;
    console.log(x+y+z);
}
//1. 변수 생성(버튼)
const helloBtn = document.getElementById('btn1');
//2. 변수 이벤트 생성
//이벤트대상.addEventListener('이벤트종류',이벤트 만족 시 실행함수)
//이벤트대상 == 이벤트 종류를 적용하고 싶은 대상
//이벤트종류 -> 태그의 인라인 script에 쓸 때는 앞에 on을 붙이지만,(on + '이벤트종류') 스크립트에서 바로 작성할 때는 on 없이 바로 '이벤트종류'만 작성한다.
helloBtn.addEventListener('click',function(){
    alert('hello!');
})
// ======================================================
const qnaBtn = document.getElementById('btn2');
console.log(btn2);
qnaBtn.addEventListener('click',function(){
    let answer = prompt('1+1은 무엇인가요?');
    confirm(`당신의 정답은 ${answer} 입니까?`);
})
// ======================================================
//1. 제어 노드 변수 생성하기
const numPlus = document.querySelector('#numPlus');
const numMinus = document.querySelector('#numMinus');
const num = document.querySelector('#num');
//2. 위 1에서 생성한 변수 중 이벤트 대상에 해당되는 것부터 작성하기
numPlus.addEventListener("click", function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기.
    //기존 수량의 값에 1을 더해서 수량 칸에 대입하기.
    num.value = Number(num.value) + 1;
    
})
numMinus.addEventListener('click',function(){
    num.value = Number(num.value) - 1;
})
// ======================================================
const total = document.querySelector('#total');
const price1 = document.querySelector('#price1');
const price2 = document.querySelector('#price2');
total.addEventListener('click', function(){
    const totalPrice = Number(price1.value) + Number(price2.value);
    alert(`당신의 이번 달 수입은 총 ${totalPrice}원 입니다.`)
})
