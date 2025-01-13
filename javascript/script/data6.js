//자바스크립트 동적기능에 의해서 요소가 생성될 경우 createElement();
const parent = document.querySelector('#parent');
const new_parent = document.createElement('div'); //태그명만 작성
const new_p = document.createElement('p'); //태그명만 작성
const my_p = document.createElement('p'); //태그명만 작성
const my_btn = document.createElement('button'); //태그명만 작성
const childNode = document.querySelectorAll('.child')
const li = document.querySelectorAll('.list li');
const addBtn = document.querySelector('#add');
const onoffBtn = document.querySelector('#onoff');
const reBtn = document.querySelector('#re');


console.log(childNode);
//기준이 되는 부모변수.appendChild(마지막 자식위치에 추가하고 싶은 노드변수);

new_parent.innerHTML = "new_parent";
new_p.innerHTML = "test in class";
my_p.innerHTML = "test by me";
my_btn.innerHTML = "버튼";
my_btn.style = "border:1px solid #333; padding: 1px 5px; margin-left: 5px;";

parent.appendChild(new_parent);
console.log(parent.children[1].nextElementSibling);
parent.children[2].previousElementSibling.appendChild(new_p);
parent.children[1].nextElementSibling.appendChild(new_p);
//기준부모요소.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_p, childNode[2]);
parent.insertBefore(my_p,childNode[3]);
parent.children[2].appendChild(my_btn);
//삭제대상변수.remove();
//숨기는 개념(style.display='none')이 아닌 요소 삭제('', remove)개념! 쇼핑몰 장바구니 삭제 등으로 이용
//childNode[0].remove();
//숨기는대상의부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[1]);
//style 속성을 이용한 CSS (최종 적용 속성이 1~2 소수일 경우)
li[0].style.backgroundColor = 'aqua';
li[0].style.fontSize = '2rem';
//동시에 적용해야하는 CSS 속성이 3개 이상 많은 경우 class를 이용한다.
//처음부터 적용된 클래스가 아닌 JS 동적결과에 의해 나중에 적용되는 디자인에 이용.
/* li[1].className = 'set1'; */
li[1].classList = 'set1';
li[1].classList += 'set2';
li[2].classList.add('set1','set2');
li[2].classList.remove('set1');
li[4].classList = "set4";
li[5].classList = "set3";
parent.children[3].classList = "set5";

//버튼으로 제어하는 classList

addBtn.addEventListener('click',()=>{
    li[6].classList.add('set1');
})
onoffBtn.addEventListener('click', ()=>{
    li[7].classList.toggle('set4');
})
li[8].classList = 'set2';
reBtn.addEventListener('click', ()=>{
    li[8].classList.replace('set2', 'set1');
})