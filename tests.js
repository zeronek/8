var pn = 1;
// btn2 누르면 transform: translate(-100vw)
document.querySelector('.prev') .addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(+100vw)';
});

document.querySelector('.next') .addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-100vw)';
});