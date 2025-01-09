// 연결연산자와 더하기 연산자
let data1 = 'hello'+'js'; //문자+문자 (연결연산자)
let data2 = '1' + 2; //문자+숫자 (연결연산자)
let data3 = (1+1)+'number'; //(숫자+숫자)+문자 더하기연산자, 연결연산자
let data4 = 'num'+(2-2)+'ber'; //문자+(숫자-숫자)+문자
let data5 = 4; //재료변수
let data6 = 2; //재료변수
let result = data5+data6; //재료 이용 결과 담는 변수
//나누기와 나머지 연산자
let data7 = 10;
let data8 = 3;
let result2 = data7 / data8;
console.log(result2); //3.33333
result2 = data7 % data8;
console.log(result2); //1

console.log(result); //더하기 결과 출력 : 6
result = data5-data6;
console.log(result); //빼기 결과 출력 : 2
result = data5*data6;
console.log(result); //곱하기 결과 출력 : 8
result = data5/data6;
console.log(result); //나누기 결과 출력 : 2
result = data5%data6;
console.log(result); //나머지 결과 출력 : 0

let data9 = 5;
let data10 = data9 + 10;
let result3 = data10;


console.log(data1, typeof data1); //변수값 확인, 변수데이터 종류 확인
console.log(data2, typeof data2); //12, string
console.log(data3, typeof data3); //2number, string
console.log(data4, typeof data4); //num0ber, string

//=========================================이항 연산자 활용 더하기만 되는 계산기 만들기
//1. 첫번째 값을 담는 input / 값인식속성 value
//2. 두번째 값을 담는 input / 값인식속성 value
//3. 위 1, 2번을 인식하는 결정 버튼 / 이벤트 클릭
//4. 3번의 버튼 조건 달성 시 1, 2 값을 담는 결과 변수 / "total" 더하기(+)
//5. 4번의 결과변수를 p 출력 명령 : "totalP" // innerHtml (속성)
const firstInput = document.querySelector('#val1');
const secondInput = document.querySelector('#val2');
const btn = document.querySelector('#btn');
let totalP = document.querySelector('#result');
btn.addEventListener('click', inputFunc)
function inputFunc(){
    let total = Number(firstInput.value) + Number(secondInput.value);
    totalP.innerHTML = total;
}
//=================증감 연산자 공부
let x = 5;
let y = x++; //X++ 증가연산자(1씩 증가) 후위연산자
console.log(x,y);
y = x++;
console.log(x,y);
x = ++y;
console.log(x,y);
x++;
console.log(x);
//=================증감 연산자 문제
let a = 10;
let b = 20;
let c = 30;
let d = 40;
//=================a,b,c,d의 값은?
a++;
b--;
c++;
d--;
//=================a,b,c,d의 값은? //정답: 11 19 31 39
a = ++b;
b = a++;
//=================a,b,c,d의 값은? //정답: 21 20 31 39
c = a+b;
d = ++c;
//=================a,b,c,d의 값은? //정답: 21 20 42 42
a = ++c + 10;
b = --d + 1;
//=================a,b,c,d의 값은? //정답: 53 42 43 41
console.log(a,b,c,d);

//=================복합대입 연산자
let number = 10;
// number = number + 5;
number += 5;
console.log(number); //15
number -= 5;
console.log(number); //10
number *= 5;
console.log(number); //50
number /= 5;
console.log(number); //10
number %= 5
console.log(number); //0
//=========================================연산자 활용 오늘의 총 지출비용 계산하기
//1. 'transportPay' 교통비 입력 변수 input value
//2. 'foodPay' 식비 입력 변수 input value
//3. 'coffeePay' 커피 입력 변수 input value
//4. 'totalBtn' 지출금액 버튼 변수 input value
//4-1. 'totalPrice' 4번 버튼 클릭 시 1+2+3 값을 모두 더한다
//4-2. 5번 위치에 출력
//5. 'todayResult' 출력 0 변수
const transportPay = document.querySelector('#money1');
const foodPay = document.querySelector('#money2');
const coffeePay = document.querySelector('#money3');
const totalBtn = document.querySelector('#totalBtn');
const todayResult = document.querySelector('.todayResult span');
totalBtn.addEventListener('click', todayFunc);
function todayFunc(){
    let totalPrice = Number(transportPay.value) + Number(foodPay.value) + Number(coffeePay.value);
    todayResult.innerHTML = totalPrice.toLocaleString('ko-kr');
}
//=========================================증감 연산자 활용 1000원 이자 은행
//1. 총 잔액 표시 "total"
//2. 입금금액 "bankInput"
//3. 입금하기 버튼 + 이벤트 "depositBtn"
//4. 입금액 인식하고 이자가 더해짐 "deposit"
//5. 총 잔액에 포함된다 "total"
//6. 총 잔액에 표시된다 "bankTotal" 
let total = 0;
let deposit = 0;
let interest = 0;
const bankInput = document.querySelector('#bank_input');
const bankTotal = document.querySelector('#bank_total');
const depositBtn = document.querySelector('#deposit_btn');
const intTxt = document.querySelector('#interest span');
depositBtn.addEventListener('click', function(){depositFunc(deposit)})
function depositFunc(deposit){
    deposit = Number(bankInput.value);
    interest = deposit*0.1;
    total = deposit + interest;
    bankTotal.value = total.toLocaleString('ko-kr');
    bankInput.value = 0;
    intTxt.innerHTML = interest;

}
//=========================================증감 연산자 활용 5000원 이자 은행
let total2 = 0;
const inputP = document.querySelector('#bk_input span');
const bkTotal = document.querySelector('#bk_total');
const dpBtn = document.querySelector('#dp_btn');
dpBtn.addEventListener('click', function(){
    let deposit = Number(prompt('입금하려는 금액을 써주세요'));
    inputP.innerHTML = deposit;
    total2 = deposit+5000;
    bkTotal.value = total2.toLocaleString('ko-kr');
    alert(`입금된 총 금액은 ${total2}입니다.`);
})
//=========================================함수의 변경되는 데이터 매개변수 공부
//function 함수명(매개변수){함수실행값} //함수선언식(선언만으로는 결과가 출력되지않음)
//함수명(매개변수) //함수호출식(함수 선언 후, 위 아래 어디든 작성가능)
//매개 변수가 없는 함수
//카페 키오스크는 아메리카노만 주문이 가능하다. 수량도 무조건 1잔만 주문 가능.
//출력 예) 아메리카노 1잔 나왔습니다.
function kiosk(){
    func_result.innerHTML = '아메리카노 1잔 나왔습니다.';
}
const funcBtn = document.querySelector('#func_btn');
const funcResult = document.querySelector('#func_result');
const userOrder = document.querySelector('#user_order');
const userMenu = document.querySelector('select[name=drink]');
console.log(userMenu);
//매개 변수가 있는 함수
function kiosk2(num){
    funcResult.innerHTML = `${num}잔 나왔습니다.`;
}
//매개변수가 2개 있는 함수 (메뉴와 수량 변경)
function kiosk3(menu, num){
    menu = userMenu.options[userMenu.selectedIndex].text
    num = Number(userOrder.value);
    funcResult.innerHTML = `${menu} ${num}잔 나왔습니다.`;
}
//내가 만든 함수
function kiosk4(string){
    funcResult.innerHTML = '아메리카노 1잔 나왔습니다.';
}
let num;
let menu;
/* funcBtn.addEventListener('click', kiosk) */
funcBtn.addEventListener('click', function(){ kiosk3(menu, num) }) //매개변수가 있을 시 이와 같이 작성.
//=========================================함수 외부반환값
function func1(x,y){
    return x+y; //실행 메서드를 포함하지 않고 외부에서 필요한 결과값만 반환한다.
    console.log('test');
}
/* func1(1,2); */
console.log(func1(1,2)); //실행식을 함수 호출 값을 가진채로 작성한다.
/* alert(func1(2,3)); */

let num1 = 10;
let num2 = 20;
function func2(x,y){
    num1 += num2;
    num2 = x+y;
    num1 += num2;
    return console.log(num1);
}
func2(2,4);
/* console.log(func2(2,4)); //36 */
//=========================================구구단 만들기
//사용자가 2를 입력하면 2x1 ~ 2x9까지 구구단 결과가 p태그에 출력되는 결과
const danInput = document.querySelector("#dan");
const danBtn = document.querySelector("#danBtn");
const dan99Result = document.querySelector(".dan99Result");
function dan99(dan){
    dan = Number(danInput.value);
    dan99Result.innerHTML = `${dan} * 1 = ${dan*1}<br>`
    dan99Result.innerHTML += `${dan} * 2 = ${dan*2}<br>`
    dan99Result.innerHTML += `${dan} * 3 = ${dan*3}<br>`

}
danBtn.addEventListener('click',function(){dan99(dan)});