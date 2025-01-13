//상품 썸네일 JS
//1. 작은 썸네일 이미지에 마우스를 올렸다
//2. 위 1번 대상에만 테두리가 적용된다(다른 모든 요소에 테두리가 제거)
//3. 위 1번 대상이 우측 큰 이미지에 나타났다
const thumbnail = document.querySelectorAll('.thumbnail a img');
const bigImage = document.querySelector('.photo .big img');
const shipSchedule = document.querySelector('.ship_schedule');
const scheduleOpen = document.querySelector('.schedule_open');

//두번째 썸네일에 마우스 올렸을 때 큰 이미지 big2.jpg로 변경
function thum_remove(){
    thumbnail[0].parentElement.classList.remove('active');
    thumbnail[1].parentElement.classList.remove('active');
    thumbnail[2].parentElement.classList.remove('active');
    thumbnail[3].parentElement.classList.remove('active');
    thumbnail[4].parentElement.classList.remove('active');
};
function bigSrc(num){
    thumbnail[num-1].parentElement.classList.add('active');
    return bigImage.src = `./images/big${num}.jpg`;
};
thumbnail[0].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(1);
})
thumbnail[1].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(2);
})
thumbnail[2].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(3);
})
thumbnail[3].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(4);
})
thumbnail[4].addEventListener('mouseover', function(){
    thum_remove();
    bigSrc(5);
})
shipSchedule.addEventListener('click', function(){
    if(scheduleOpen.style.display=='none'){ 		
    	scheduleOpen.style.display = 'block'; 	
    }else{ 		
    	scheduleOpen.style.display = 'none'; 	
    } 
})