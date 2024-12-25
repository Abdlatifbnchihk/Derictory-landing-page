
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* menu */

const menu = document.getElementById('menu');
const openBttn = document.getElementById('bttn-open');
const closeBttn = document.getElementById('bttn-close');
const navList = document.getElementById('list-nav');


menu.addEventListener("click", function(){
  openBttn.classList.toggle("active");
  closeBttn.classList.toggle("active");
  navList.classList.toggle("active");
})




/* menu.addEventListener("click", function(){
  bttnClose.classList.toggle("active");
  bttnOpen.classList.toggle("active");
  list.classList.toggle("active");
}); */