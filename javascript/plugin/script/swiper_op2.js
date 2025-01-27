const newSlide = new Swiper('.new_slide_wrap',{
    //속성, 값
    /* autoplay: {
        delay:2000, //다음 슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용을 상관없이 게속 진행
    }, */ /* 수직 이동 swiper 경우 주로 autoplay를 걸지않음 */
    /* leep : true, */ //무한 반복 설정
    speed:2000, //애니메이션 전환시 걸리는 시간
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용
    /* direction:'vertical', */
    effect:'fade',
});