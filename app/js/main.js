$(function () {
   
 $('.product-slider__inner').slick({
   arrows:false,
   dots:true,
   slidesToShow: 4,
   slidesToScroll: 4,
   });

   $('.rate-star').rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

  

   var mixer = mixitup('.products__inner-box');



})

