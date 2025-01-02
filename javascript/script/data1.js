/* ===============================변수 복습 */
var a = 2025; //숫자 데이터
var b = "자바스크립트"; //문자 데이터
var c; //undifined 값이 정의되지 않음(대입값이 존재안함)
console.log(a, b, c);
console.log(a+1); //2026 숫자를 가진 변수 + 숫자데이터
console.log(b+'공부'); //문자를 가진 변수 + 문자데이터 = 문자데이터
console.log(a+c); //숫자를 가진 변수 + 정의되지 않은 변수(undifined) = NAN (Not a Number)
console.log(a+b); //숫자 변수 + 문자 변수 = 문자 데이터
c = 1;
console.log(a+c); //숫자 변수 + 숫자 변수 = 숫자
console.log(a-c); //숫자 변수 + 숫자 변수 = 숫자
console.log('-------------------------------------------')
//함수 생성 문법 function 함수명(){실행식;}
function abcPlus(){
    console.log(a+b+c);
}
//메서드() 공부
/* var d = window.prompt('1+1은?');
console.log(d); */
//prompt와 function 함수 활용
function ageCheck(){
    var age = window.prompt('올해 몇살이세요?');
    console.log('올해 저는',age,'살 입니다.');
    console.log(typeof age)
}
function myInfo(){
    var mbti = window.prompt('MBTI가 어떻게 되나요?')
    var blood_type = window.prompt('혈액형이 어떻게 되나요?')
    console.log('당신의 MBTI는',mbti,'이고,','혈액형은',blood_type,'형 입니다.')
    console.log('mbti 데이터 타입 :',typeof mbti,'/','blood_type 데이터 타입 :', typeof blood_type)
}
const e = 2024;
console.log(e)
console.log('-------------------------------------------')
console.log(typeof b); //b변수의 데이터 타입 확인 : string(문자)
console.log(typeof a); //b변수의 데이터 타입 확인 : number(숫자)
console.log(typeof (a+b)); //a와 b를 더한 결과의 데이터타입 확인 : string(문자)
console.log(typeof (a+c)); //a와 c를 더한 결과의 데이터타입 확인 : number(숫자)
console.log('----------------------특수 데이터 연습---------------------')
let f;
let g;
console.log(typeof(f, g)); //undifined
f = ''
console.log(typeof f); //string
f = null //변수의 값과 데이터 타입을 비운다. 
console.log(typeof f); //object 
// 문자데이터를 초기화하는 경우는 null보다 '' 빈문자데이터를 많이 사용한다.
g = 0; //숫자데이터는 유지한 상태로 0 값으로 초기화 한다.
console.log('----------------------템플릿 문자열 연습---------------------')
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch;
console.log(`오늘의 총 지출액은 ${total}원 입니다.`)
console.log('----------------------2단 구구단 출력하기---------------------')
function timesTable(){
    let dan = window.prompt('구구단 몇 단이 궁금하신가요? (숫자 입력)')
    console.log(`<구구단 ${dan}단>`)
    console.log(`${dan} x 1은 ${dan*1} 입니다.`)
    console.log(`${dan} x 2는 ${dan*2} 입니다.`)
    console.log(`${dan} x 3은 ${dan*3} 입니다.`)
    console.log(`${dan} x 4는 ${dan*4} 입니다.`)
    console.log(`${dan} x 5는 ${dan*5} 입니다.`)
    console.log(`${dan} x 6은 ${dan*6} 입니다.`)
    console.log(`${dan} x 7은 ${dan*7} 입니다.`)
    console.log(`${dan} x 8은 ${dan*8} 입니다.`)
    console.log(`${dan} x 9는 ${dan*9} 입니다.`)
}
