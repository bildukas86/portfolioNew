const menuToggle = document.querySelector(".menu-xs");
const navList = document.querySelector(".navigation");
const hamBurger = document.querySelector(".menu-xs");

menuToggle.addEventListener("click", function(){
  if(navList.style.height == "200px"){
    navList.style.height = 0;
  } else{
    navList.style.height = "200px";
  }
  hamBurger.classList.toggle("change");

});
