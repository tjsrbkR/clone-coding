// 롤링배너 이벤트
const kindWrap = document.querySelector('.kind-wrap');
const slider = kindWrap.querySelector('.slider');
const slideLis = slider.querySelectorAll('.slider li')
const moveButton = kindWrap.querySelector('.arrow');

/* 클론 */
const clone1 = slideLis[0].cloneNode(true);
const cloneLast = slideLis[slideLis.length - 1].cloneNode(true);
slider.insertBefore(cloneLast, slideLis[0]);
slider.appendChild(clone1);

/* 주요 변수 초기화 */
let currentIdx = 0;
let translate = 0;
const speedTime = 500;

/* CSSOM 셋업 */
const sliderCloneLis = slider.querySelectorAll('li');
const liWidth = slideLis[0].clientHeight;
const sliderWidth = liWidth * sliderCloneLis.length;
slider.style.width = `${sliderWidth}px`;

/* 리스너 설치하기 */
moveButton.addEventListener('click', moveSlide);

/* 슬라이드 실행 */
function move(D) {
    currentIdx += (-1 * D);
    translate += liWidth * D;
    slider.style.transform = `translateY(${translate}px)`;
    slider.style.transition = `all ${speedTime}ms ease`
}

/* 버튼 클릭 */
function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === 'next') {
        if (currentIdx === slideLis.length - 1)
            return;
        move(-1);
    } else {
        if (currentIdx === 0)
            return;
        move(1);
    }
}
function sliding() {
    move(-1);
    if (currentIdx === sliderCloneLis.length - 1)
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIdx = 1;
            translate = -liWidth;
            slider.style.transform = `translateY(${translate}px)`;
        }, speedTime);
}

function showSliding() {
    setInterval(sliding, 3000);
}
showSliding();


// 스타벅스 프로모션 이벤트
let i = 0;
$(".line-notice-right p").on("click", function () {
    if (i == 0) {
        $(".line-notice-right p img").attr("src", "./images/btn_prom_up.png");
        i = 1;
        $(".poromotion-swiper").slideDown();
    }
    else if (i == 1) {
        $(".line-notice-right p img").attr("src", "./images/btn_prom_down.png");
        i = 0;
        $(".poromotion-swiper").slideUp();
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

});