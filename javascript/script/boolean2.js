let userId = 'admin';
let userPw = 'admin1234';

if(userId === 'admin' && userPw == 'admin1234') {
    console.log(userId + ' 관리자님 어서오세요!');
}else{
    console.log('로그인 실패')
}

//=================================================
//비교연산자와 논리연산자를 이용한 게임 만들기
//W(전진) S(후진) A(좌) D(우)
/* const charMove = prompt('이동방향을 입력하세요 WSAD');
console.log(charMove);
if(charMove == 'w' || charMove == 's' || charMove == 'a' || charMove == 'd'){
    alert(`${charMove.toUpperCase()} 1칸 이동`);
}else{
    alert('잘못 입력했습니다');
} */

//====================점수에 따라 등급 출력
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59 이하면 F
const score = prompt('0~100 사이 시험 점수를 입력하세요');
let x = Number(score);
if(x>-1 && x<101){
    if(x>=90){
        alert('A');
    }else if(x>=80){
        alert('B');
    }else if(x>=70){
        alert('C');
    }else if(x>=60){
        alert('D');
    }else{
        alert('F');
    }
}else{
    alert('점수를 잘못 입력하셨습니다. 다시 확인해주세요.');
}