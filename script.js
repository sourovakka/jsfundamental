//locomotive smooth scrolling;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// create swiper;
function creatSwiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          clickable: true,
        },
      });
}
creatSwiper();





