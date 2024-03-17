let navbar = document.querySelector('.navbar');



document.querySelector('#menu-btn').onclick = () =>{
navbar.classList.toggle('active');
}



window.onscroll = () =>{
navbar.classList.remove('active');

if(window.scrollY > 0){
document.querySelector('.header').classlist.add('active');
}else{
document.querySelector('.header').classlist.remove('active');
}

}