/* window.document.body.style = 'background-color:aqua'; */
/* document.write('250107'); //window 생략 기본 내장됨 */
//DOM
//객체는 변수에 선언해야 한다.
//변수생성키워드 생성변수명 = 변수에대입되는 값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식된다.
//배열 인식 결과 -> 각 데이터가 [0] [1] 인덱스로 구분되고 length 속성이 자동추가된다.
const title1 = document.getElementsByTagName('h1');
console.log(title1)
const m_title1 = document.getElementsByTagName('h2');
console.log(m_title1)
//DOM객체.속성 //속성읽기
//DOM객체.속성 = '값'; //속성에 값 대입하기
title1[0].style = 'color:palevioletred';
title1[1].style = 'background-color:pink; color:lemonchiffon;';
m_title1[0].style = 'background-color:plum; color:#fff;';
m_title1[1].style = 'color:plum';
m_title1[2].style = 'background-color:lavender; color:#fff;';
const listWrap = document.getElementsByTagName('ul')[0];
const list = listWrap.getElementsByTagName('li');
console.log(list);
console.log(listWrap);
listWrap.style = 'background-color:aqua';
list[1].style = 'color:#fff';
const linkWrap = document.getElementsByTagName('ul')[1];
console.log(linkWrap);
const linkLi = linkWrap.getElementsByTagName('li');
console.log(linkLi);
const linkA1 = linkLi[0].getElementsByTagName('a');
const linkA2 = linkLi[1].getElementsByTagName('a');
const aTagAll = document.getElementsByTagName('a');
console.log(linkA1, linkA2); //0 0
console.log(aTagAll); // 0 1
linkWrap.style = 'background-color:dimgrey; color:#f1f1f1;';
linkLi[0].style = 'background-color:#f1f1f1;';
/* 
HTML CSS 작성 시, HTML의 가족관계를 우선시하여 li가 형제, a는 각 외동으로 각각 인식하지만 JS는 최종 선택 대상 앞의 'document' 자리에 누굴 쓰느냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML 관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식해서 인덱스 번호를 적용한다. 하지만 'li'의 경우 li 안에는 a가 하나만 배치되어있으므로 각 a를 0번째로만 인식하게 된다.
*/
const subTitle = document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
const menuList = document.getElementsByClassName('menu')[0];
console.log(menuList);
const menu = menuList.getElementsByTagName('li');
console.log(menu);
menuList.style = 'color:#d9d9d9';
const menuLi1 = menu[0];
console.log(menuLi1);
const menuA1 = menu[0].getElementsByTagName('a')[0];
const menuA2 = menu[1].getElementsByTagName('a')[0];
const menuA3 = menu[2].getElementsByTagName('a')[0];
const menuA4 = menu[3].getElementsByTagName('a')[0];
console.log(menuA1, menuA2, menuA3, menuA4);
menuA1.style = 'background-color:pink; text-decoration:none; color:lemonchiffon;';
menuA2.style = 'background-color:dimgrey; text-decoration:none; color:#f1f1f1;';
menuA3.style = 'background-color:#333; text-decoration:none; color:#fff;';
menuA4.style = 'background-color:#000; text-decoration:none; color:#fff;';
const menuAall = menuList.getElementsByTagName('a');
console.log(menuAall);
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red;';
/* =====================================================================ById */
const con1 = document.getElementById('container');
console.log(con1);
const t1 = document.getElementById('title');
console.log(t1);
t1.style = 'background-color:#eee';
const t1Atag = t1.getElementsByTagName('a');
console.log(t1Atag);
t1Atag[0].style = 'color:dimgrey';
t1Atag[1].style = 'color:dimgrey';
const c1 = document.getElementById('contents');
console.log(c1);
c1.style = 'background-color:dimgrey';
const c1Atag = c1.getElementsByTagName('a');
console.log(c1Atag);
/* =====================================================================nav */
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA= lnb.getElementsByTagName('a');
console.log(lnbLiA);
nav.style = 'background-color:lime';
