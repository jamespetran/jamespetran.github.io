var eduBtn = document.querySelector('.edu-btn');
var proBtn = document.querySelector('.pro-btn');
var eduBg = document.querySelector('.edu-bg')
var proBg = document.querySelector('.pro-bg')
var modalClose = document.querySelector('.modal-close')
var proClose = document.querySelector('.pro-close')


eduBtn.addEventListener('click',function(){
    proBg.classList.remove('pro-active');
    eduBg.classList.add('edu-active');
}); 

proBtn.addEventListener('click',function(){
    eduBg.classList.remove('edu-active');
    proBg.classList.add('pro-active');
});





modalClose.addEventListener('click',function(){
    eduBg.classList.remove('edu-active'); 



});
proClose.addEventListener('click',function(){
    proBg.classList.remove('pro-active');
});
