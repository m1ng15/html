/* 1. 밥 주문하기 변수와 함수 */
var bowl;
bowl = '쌀밥'

/* 함수 생성 (버튼 클릭 시 호출 목적) */
/* function 생성함수명() { 함수실행결과 } */
function cookOrder(){
    console.log(bowl, '나왔습니다.')
}

/* 2. 메일수신확인 변수와 함수, 버튼(메일함에는 하나의 메일만 넣을 수 있다, 새로운 메일이 오면 기존 메일은 폐기된다.) */
var mail;
mail = "SNS 프로모션이 도착하였습니다."
mail = "아이파크몰 포인트가 782P 적립되었습니다."
function mailCheck(){
    console.log('제목:',mail,'을(를) 확인하였습니다.')
}

/* 3. 장바구니 변수, 함수, 버튼 */
/* 사과만 구입할 수 있는 쇼핑몰 */
/* 버튼을 누를 때마다 사과가 1개씩 추가되서 구입된다. */
var fruit;
var quantity;
quantity = 0
function fruitAdd(){
    fruit = "apple"
    quantity = quantity+1
    console.log(fruit, '이(가) 한 개 추가되었습니다.')
    console.log(fruit, '현재 수량 :', quantity)
}

/* 4. 재고 수량 감소 변수, 함수, 버튼 */
/* 바나나 재고는 10개로 사용자가 1개 주문할때마다 재고가 주문수량만큼 감소한다. */
/* 버튼 클릭 시 콘솔 출력 메세지 예) 바나나 1개 주문완료. 재고 ?개 남았습니다. */
fruit = "banana"
quantity = 10
var order_q = 0;
function fruitMinus(){
    order_q = order_q + 1
    quantity = quantity - order_q
    console.log(fruit, order_q,'개', '주문 완료', '현재 재고', quantity,'개 남았습니다.')
}