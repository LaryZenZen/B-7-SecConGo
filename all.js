const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3, // 顯示三個 slide
    spaceBetween: 10, // Slide 之間的距離
    centeredSlides: true, // 中心對齊
    loop: true, // 循環播放
    freeMode: false, // 自由模式
    pagination: {
        el: '.swiper-pagination', // 分頁點容器
        clickable: true, // 允許點擊分頁點
    },
    autoplay: { // 自動播放（如果需要）
        delay: 3000,
        disableOnInteraction: false,
    },
});