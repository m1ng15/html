//반복문 for
//for(초기값; 조건식; 증감식) (조건이 참일때 실행구문)
//반복문 없이 '자바스크립트' 3번 반복
/* console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트'); */
for(let i=0; i<3; i++){
    console.log('자바스크립트');
}
for(let i=2; i>=0; i--){
    console.log('자바스크립트'+i);
}

const subject = ['html', 'css', 'photoshop', 'illustrator', 'javascript']
/* console.log(subject[0]); */
for(let i=0; i<=4; i++){
    console.log(subject[i]);
}

const kiosk = ['아메리카노', '카페라떼', '카푸치노', '돌체라떼', '에스프레소', '우유', '녹차라떼', '소이라떼', '밀크티']
console.log(kiosk);
//출력 예) 주문하신 아메리카노 나왔습니다.
/* for(let i=0; i<=(kiosk.length-1); i++){
    console.log(`주문하신 ${kiosk[i]} 나왔습니다.`);
} */
//length 속성없이 숫자값과 for문으로 역순으로 메뉴 출력하기
for(let i=(kiosk.length-1); i>=0; i--){
    console.log(`주문하신 ${kiosk[i]} 나왔습니다.`);
}
console.log('=================반복문과 조건문')
//1~20 반복 출력
for(let i=1; i<21; i++){
    if(i%2){console.log(i);}
}

const listLi = document.querySelectorAll('.list li');
console.log(listLi);
/* for(let i=0; i<=listLi.length; i++){
    if(i%2){
        listLi[i].style.backgroundColor ='lemonchiffon';
    }else{ listLi[i].style.backgroundColor = 'pink';}
} */
console.log('=================for in 객체접근 반복문');
let str1 = '가나다라마바사'
console.log('=================배열, DOM 접근 ㅐㄺ ㅕㅔ');
const fruit = ['바나나','딸기','배','귤'];
for(let i in fruit) console.log(i);
/* for(let i of listLi){
    console.log(i);
    i.addEventlistner('mouseover',()=>{})
} */
console.log('==================================회원가입약관동의');
//1. "checkAll" 전체 동의 클릭 시
//2. "checkSelect" 선택동의 1~4 모두 선택
//3. 전체 동의 클릭시
//4. 선택동의 1~4 모두 해제
//1~4 반복
const checkAll = document.querySelector('#all');
const checkSelect = document.querySelectorAll('.select input[name=agree]');
console.log(checkAll, checkSelect);
checkAll.addEventListener('click', ()=>{
    //console.log(checkAll.checked);
/*     checkSelect[0].checked = checkAll.checked;
    checkSelect[1].checked = checkAll.checked;
    checkSelect[2].checked = checkAll.checked;
    checkSelect[3].checked = checkAll.checked; */
    for (let i of checkSelect){
        i.checked = checkAll.checked;
    }
})
//================메인메뉴와 서브메뉴
const gnb = document.querySelectorAll('.gnb > li');
const sub = document.querySelectorAll('.sub');
console.log(gnb, sub);
//모든 서브 숨기기
for(let i of sub) i.style.display = 'none';
/* gnb[0].addEventListener('mouseover', ()=>{sub[0].style.display = 'block';}) */
for(let i of gnb){
    //console.log(i); //Node 4 전체출력
    i.addEventListener('mouseover', ()=>{
        i.children[1].style.display = 'block'; //마우스 올린 대상만 출력
    })
}