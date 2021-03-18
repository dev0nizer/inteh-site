
obj = document.querySelector('#movingdiv');
obj1 = document.querySelector('#movingdiv1');
obj2 = document.querySelector('#movingdiv2');
obj.style.position='relative'; 
obj1.style.position='relative'; 
obj2.style.position='relative'; 

function shake(interval) {
obj.style.right = '10px';
setTimeout(function(){
obj.style.right = '0px';
}, interval);
}
function shake1(interval) {
obj1.style.right = '10px';
setTimeout(function(){
obj1.style.right = '0px';
}, interval);
}
function shake2(interval) {
obj2.style.right = '10px';
setTimeout(function(){
obj2.style.right = '0px';
}, interval);
}

setInterval(function(){
shake(500);
shake1(500);
shake2(500);
}, 1000)