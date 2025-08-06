var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
    breakpoints:{
      //celular
     0:{
        slidesPerView:1.2,
     },
     800:{
        slidesPerView:3,
     } 
    }
    });