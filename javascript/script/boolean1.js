//논리데이터 확인 true or false
//true (1)
//false (0)
//논리데이터(boolean)을 다른 숫자데이터와 연결하면 1,0으로 처리돼서 계산한다.
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof (false+5)); //number
//==============================================불린함수활용 falsy or truthy 값 구분
console.log(Boolean(false)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("")); //false
console.log(Boolean("45")); //true
console.log(Boolean(10)); //true
console.log(Boolean({})); //객체,true
console.log(Boolean([])); //빈배열,true
//==================================비교연산자
//1. 일치(동등)연산자 : 좌우 값이 같은가? 같으면 참, 다르면 거짓
console.log("4" == 4); //true
console.log("4" === 4); //false
console.log("4" === "4"); //true
//2. 부등(불일치)연산자 : 좌우 값이 다른가? 다르면 참, 같으면 거짓
console.log("10" != 10); //false
console.log("10" !== 10); //true
console.log(10 !== 10); //false
//3. 대소 비교 연산자 : 작다, 크다, 크거나 같다, 작거나 같다
let x = 5;
let y = 7;
console.log(x>y);
console.log("=======================================================");
//4. 논리연산자 AND(&&) OR(||) NOT(!)
function print(value){
    const message = value || 'web';
    return console.log(message);
}
print(0);
print('page');

function bool(value){
    const result = !value;
    return console.log(result);
}
bool([]); //false
bool({}); //false
bool(""); //true
console.log("=======================================================");
let a = 5;
let b = 10;
let total = a == b ? '참' : '거짓';
console.log(total); //거짓
//나이에 따라 성인/미성년자 구분하는 JS
/* let age = prompt('몇살이신가요?');
adultCheck(age); */
//사용자가 대답한 값에 따라서 '성인' '미성년자' 콘솔 출력 18세 이상 기준
/* function adultCheck(age){
    let result = age >= 18 ? '당신은 성인 입니다' : '당신은 미성년자 입니다';
    return console.log(`나이 : ${age}살, ${result}`);
    } */
   //=====================================================
   //1. "textarea" 사용자 리뷰 작성
   //2. "reviewBtn" 리뷰 등록하기 버튼 클릭
   //3. "result" (리뷰 100자 이상인 경우) '등록완료됐습니다' 팝업출력
   //4. (리뷰 100자 미만인 경우) '100자이상 작성하셔야 등록됩니다' 팝업출력
   const textarea = document.querySelector('#review');
   const reviewBtn = document.querySelector('#reviewBtn');
   
   reviewBtn.addEventListener('click', function(){
       let result = textarea.value.length < 100 ? '100자이상 작성하셔야 등록됩니다.' : '등록완료됐습니다.';
       alert(`글자수: ${textarea.value.length}자 ${result}`);
    })
//=====================================================
//0. 초기값 1개당 12500원, 재고 10개 제한
//1. 
//2. 증가 수량에 따라 가격이 증가된다
//3. 구입수량이 10개 이상이면 + 버튼 클릭 시 '최대구매수량입니다' 출력
//4. 구입수량이 1개 미만이면 - 버튼 클릭 시 '최소구매수량입니다' 출력
let num = document.querySelector('#num');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceNode = document.querySelector('.price span');
let price = 12500; //가격
let number = Number(num.value); //수량
let result_num; //삼향조건식 결과 담는 변수

plusBtn.addEventListener('click',()=>{
    //(조건결과를 담는 변수) = 조건식 ? (조건이 참일 때 결과) : (조건이 거짓일 때 결과);
    result_num = number >= 10 ? alert('최대구매수량입니다.') : number++;
    orderCheck(number);
})
minusBtn.addEventListener('click',()=>{
    result_num = number <= 1 ? alert('최소구매수량입니다.') : number--;
    orderCheck(number);
})
/* innerText, textContent(속도빠름) */
function orderCheck(number){
    num.value = number;
    priceNode.innerHTML = (price * number).toLocaleString('ko-kr');
}
console.log("=======================================================");
let box1 = 30;
let box2 = 20;

//if(조건식){조건결과가 참일 때 실행}else{조건결과가 거짓일 때 실행}
if(box1 === box2){ console.log('참');}else{ console.log('거짓');}

//상황1. 관리자만 접속 가능한 페이지
//관리자 ID : admin
//'관리자님 어서오세요'
const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', function(){
    console.log(userId.value === 'admin');
    if(userId.value.startsWith('admin')){
        alert('관리자님 어서오세요!');}
        else{alert('게스트님 어서오세요!');}
    })    

//=====================================================
//나머지 연산자 %
console.log(2%4); //2
console.log(4%2); //0
//자바스크립트 나머지 연산자 0,1 홀,짝 구분 목적
//true + 5 = 6
//false + 5 = 5
//falsy 거짓으로 인식하는 숫자 값 0
//truthy 참으로 인식하는 숫자 값은 0이 아닌 모든 값 (대표 1)
const testNum = document.querySelector('#test_num');
const testBtn = document.querySelector('#testBtn');
const testRes = document.querySelector('.testResult');

testBtn.addEventListener('click', function(){
    let number = Number(testNum.value);
    let oddEven;
    if(number%2 == 0){oddEven = '짝';}
    else{oddEven = '홀';}
    testRes.innerHTML = testFunc(number,oddEven);
})
function testFunc(number,oddEven){
    let txt = `당신이 선택한 숫자 ${number}는 ${oddEven}수입니다!`;
    txt += ` ${oddEven}수를 좋아하는 사람은 다정하고 따뜻한 성격을 가지고 있는 사람입니다.`;
    return txt;
}