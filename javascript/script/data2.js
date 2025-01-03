//=========================================1월 3일 복습내용
//날짜 관련 메서드
//getMonth()
//getDate()
//getFullYear()
//위 날짜 메서드를 실행하기 위한 초기 세팅으로 new Date() 메소드 반드시 선언!!
let now = new Date();
let mon = now.getMonth()+1; //자바스크립트는 시작되는 월(1월)을 숫자 0으로 보여줌 따라서 +1 입력해줘야함 //'월'만 해당됨
//자바는 숫자를 0부터 처리한다. 그래서 getMonth로 월 출력 시 +1을 반드시 작성해야한다.
let day = now.getDate();
let year = now.getFullYear();
console.log(now);
console.log(`오늘은 ${year}년 ${mon}월 ${day}일 입니다.`);

console.log(`오늘은 ${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`)
//메서드와 속성을 작성할 때는 반드시 앞에 객체(object)선언이 되어야 한다.
//객체.메서드(); 객체.속성;
//=========================================배열과 객체
//배열 이전 형태 기본 변수
let box1 = 10;
let box2 = 20;
const num = 1;
box1 = box2+4;
console.log(`box1의 값은 ${box1}이다.`); //box1의 값은 20이다.
//배열 기본 문법과 활용
let yoil = ['일','월','화','수','목','금','토'];
console.log(yoil.length+'개'); //7개
let yoil2 = new Array('일','월','화','수','목','금','토');
console.log(`yoil2 : ${yoil2}`)
console.log(yoil+'요일');
console.log(`내일은 ${yoil[6]}요일입니다.`)
//배열의 개별 데이터 인덱스는 0부터 인식한다.
//배열의 개별 인덱스 호출하는 방법(개별 호출안하면 무조건 전체출력만 된다.)
console.log(yoil[5]);
//배열의 전체 개수 length 속성은 1부터 인식한다.
console.log(yoil.length);
console.log(`yoil 배열 데이터 개수는 ${yoil.length}개 이다.`);
//배열 생성과 호출 연습
let colorSet = ['Pink', 'Green', 'Yellow', 'Beige', 'Grey'];
console.log(colorSet[1], colorSet[3], colorSet[4]);
let fruit = ['바나나','딸기','사과','귤','수박','오렌지','복숭아'];
console.log(`주문 하신 상품은 ${fruit[6]},${fruit[5]},${fruit[4]},${fruit[3]},${fruit[2]},${fruit[1]},${fruit[0]} 총 ${fruit.length}개 입니다.`);
//배열 추가 메서드 공부
//push(), pop(), shift(), unshift()
//객체.push() 배열의 끝 위치에 값 추가
//객체.pop() 배열의 끝 위치에서 값 1개 제거
//객체.unshift() 배열의 시작 위치에 값 추가
//객체.shift() 배열의 시작 위치에 값 1개 제거
let numbers = [5,6,7,8];
numbers.push(9); //배열의 끝에 숫자데이터 9 추가
console.log(numbers); //5 6 7 8 9
numbers.pop(); //배열의 끝의 값 1개 제거
console.log(numbers); //5 6 7 8
numbers.unshift(4); //배열의 시작에 값 숫자데이터 4 추가
console.log(numbers); //4 5 6 7 8
numbers.shift(); //배열의 시작값 1개 제거
console.log(numbers); //5 6 7 8
numbers.push(9);
numbers.push(10);
numbers.push(11);
console.log(numbers); //5 6 7 8 9 10 11
numbers.pop();
console.log(numbers); //5 6 7 8 9 10
numbers.unshift(4);
numbers.unshift(3);
numbers.unshift(2);
numbers.unshift(1);
numbers.unshift(0);
console.log(numbers); //0 1 2 3 4 5 6 7 8 9 10
numbers.shift();
console.log(numbers); //1 2 3 4 5 6 7 8 9 10
//1. 인원 선택 안할 시 좌석은 빈 값으로 빈 배열로 시작한다.
//2. 인원 추가에 따라 배열에 좌석값이 들어갈 수 있는 저장소가 추가된다.
//3. 추가된 인원이 희망좌석을 선택하면 해당 좌석정보가 위 2번 저장소에 대입된다.
let user1 = [];
const ticketPrice = 10000;
console.log (user1); //빈 배열
//상황 예시1. 성인A 추가
user1.push(''); //성인A에 대한 빈 좌석 정보 제공
console.log (user1); //빈 문자열
//상황 예시2. 성인A 좌석 선택(A5)
user1[0] ='A5';
console.log(`adultA가 선택한 좌석은 ${user1[0]}입니다.`);
//상황 예시3. 성인B 인원 1 추가
user1.push('');
//상황 예시4. 성인B F5 좌석 선택
user1[1] = 'F5';
console.log(`adultB가 선택한 좌석은 ${user1[1]}입니다.`);
console.log(`현재 예매 인원은 ${user1.length}명이며 좌석위치는 ${user1}입니다.총 결제금액은 ${ticketPrice*(user1.length)}원입니다.`);
console.log('====================================================================');
//카페 제공 메뉴와 장바구니
const coffeeMenu = ['아메리카노','카페라떼','녹차라떼','돌체라떼','콜드브루'];
let cart = [];
const coffePrice = 5000;
let order_event = 0;
//아메리카노 1잔 구입
cart.push(coffeeMenu[0]);
order_event = order_event+1;
console.log(`${order_event}.현재 장바구니(${cart.length}개) : ${cart}`);
//카페라떼 1잔 구입
cart.push(coffeeMenu[1]);
order_event = order_event+1;
console.log(`${order_event}.현재 장바구니(${cart.length}개) : ${cart}`);
//아메리카노 1잔 구입
cart.push(coffeeMenu[0]);
order_event = order_event+1;
console.log(`${order_event}.현재 장바구니(${cart.length}개) : ${cart}`);
//콜드브루 1잔 구입
cart.push(coffeeMenu[4]);
order_event = order_event+1;
console.log(`${order_event}.현재 장바구니(${cart.length}개) : ${cart}`);
//콜드브루 취소
cart.pop();
order_event = order_event+1;
console.log(`${order_event}.현재 장바구니(${cart.length}개) : ${cart}`);
//돌체라떼 1잔 구입
cart.push(coffeeMenu[3]);
order_event = order_event+1;
console.log(`${order_event}.현재 장바구니(${cart.length}개) : ${cart}`);
console.log(`최종 결제 금액은 ${5000*(cart.length)}원입니다.`)
console.log('-----------------------------------');
//배열 작성 문법 연습
let arr1 = [1,2,3,4]; //가장 많이 사용하는 문법
let arr2 = new Array(5,6,7,8); //새로운 배열 생성 뜻으로 작성하는 문법
let arr3 = new Array(4); //값 4가 아닌 배열 4자리를 준비한다.
console.log(arr1);
console.log(arr2);
console.log(arr3);
//배열 주의사항, 호출 시 반드시 인덱스를 사용한다. -> arr1 (X) / arr1[0] (O)