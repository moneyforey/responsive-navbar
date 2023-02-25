let menubtn = document.querySelector('.mobile_nav');
let header = document.querySelector('.header')
const toggleIcon=()=>{
   header.classList.toggle('active');
}
menubtn.addEventListener('click',toggleIcon);