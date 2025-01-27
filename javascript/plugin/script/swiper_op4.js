const newSlide = new Swiper('.new_slide_wrap',{
    //속성, 값
    autoplay: {
        delay:2000, //다음 슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용을 상관없이 게속 진행
    },
    loop : true, //무한 반복 설정
    speed:2000, //애니메이션 전환시 걸리는 시간
    mousewheel:true, //웹사이트 수직페이지 전환시에만 사용
    slidesPerView:3, //한번에 표시되는 슬라이드 개수
    //(위) 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함!!
    spaceBetween:20,
    //slidesPerGroup:3,
    //breakpoints 안에서 너비별 slidesPerView, spaceBetween(간격), slidesPerGroup 속성 설정 가능
    breakpoints:{
        1200: {slidesPerView:3,}, //1200이상일 떄 3개
        800: {slidesPerView:2,}, //800이상일 때 2개
        320: {slidesPerView:1,}, //320이상일 때 1개
    }
});