/* DOM(Document Object Model) 변수 대입 복습 */
//변수가 변하지 않는 고정 데이터라면?
//const 변수명 대입연산자 반복되는대입값;
//변수가 변할 수 있는 수동 데이터라면?
//let 변수명 대입연산자 반복되는대입값;
//var 변수명 대입연산자 반복되는대입값;
//변수대입 DOM 요소가 태그노드라면? -> 선언 후, 배열형태확인 및 사용
//const 변수명 대입연산자 document.getElementsByTagName('태그');
//변수대입 DOM 요소가 클래스노드라면? -> 선언 후, 배열형태확인 및 사용
//const 변수명 대입연산자 document.getElementsByClassName('클래스명');
//======================================================배열형태 노드라면 직접사용 시 [0] 인덱스숫자 이름
//변수대입 DOM 요소가 아이디노드라면? 
//const 변수명 대입연산자 document.getElementsById('아이디명');
const headerTag = document.getElementsByTagName('header');
console.log(headerTag); //단순 테스트확인 시 배열 전체 확인 가능
//애니메이션 및 동작, 디자인 기능 등 직접적용 시 배열 직접 접근(인데스 활용)
headerTag[0].style = 'background-color:lemonchiffon';
const logo = document.getElementsByTagName('h1')[0];
console.log(logo);
logo.style = 'color:lightcoral';
const searchDiv = document.getElementsByClassName('search')[0];
console.log(searchDiv);
searchDiv.style = 'border-bottom:2px solid dimgrey';
const searchInput = document.getElementById('txt');
console.log(searchInput);
searchInput.style = 'background-color : pink';
const searchBtn = document.getElementById('btn');
searchBtn.style = 'background-color: lightgrey; color:dimgrey;';
//querySelector 메서드는 body 태그에 작성한 태그 순서상 먼저 시작한 대상을 인식한다. header 태그가 두개라면 먼저 선언된 header 태그만 인식해서 변수에 대입한다.
const hea = document.querySelector('header');
console.log('hea');
hea.style = 'background-image:url(https://i.pinimg.com/736x/f5/65/81/f56581ecc572b48328a73eda61ceb8f1.jpg)';
//querySelector는 getElement 명령어처럼 class, id, tag 선언이 함께 하지 않기 때문에 quearySelector의 메서드 괄호 안에서 class, id, tag를 구분할 수 있는 표시를 함께 한다. 태그라면 태그이름만, 클래스라면 .클래스명, 아이디라면 #아이디명으로 작성해서 구분한다.
const sear = document.querySelector('.search');
console.log(sear);
sear.style = 'opacity:0.5';
const searTxt = document.querySelector('#txt');
console.log(searTxt);
searTxt.style = 'color:palevioletred';
const gnb = document.querySelector('gnb');
const gnbLi = document.querySelectorAll('.gnb li');
console.log(gnbLi);
gnbLi[0].style = 'background-color : pink';
gnbLi[1].style = 'background-color:lightcoral';
gnbLi[2].style = 'background-color:lightsalmon';
gnbLi[3].style = 'background-color:orange';
const gnbAtag = document.querySelectorAll('.gnb a');
console.log(gnbAtag);
gnbAtag[0].style = 'background-color:lavender; color:plum;';
gnbAtag[1].style ='color:white';
gnbAtag[2].style = 'color:lemonchiffon';
gnbAtag[3].style ='color:yellow';