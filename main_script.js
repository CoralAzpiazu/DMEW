var burger = document.querySelector('#burger');
var header = document.querySelector('header');

burger.addEventListener('click', clickHandler);
header.classList.remove('open');

 function clickHandler(e){
   e.preventDefault();
   console.log('click'+ e.target.nodeName);
   header.classList.toggle('open');
 }
