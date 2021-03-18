let inputеxt = document.getElementById("inputfield");
let button = document.getElementById("inputclick");
button.style.cursor = 'pointer';
button.addEventListener('click', function(){showtext5sec("inputtextclick", inputеxt.value)});


function showtext5sec(elementid, text){
    adddivtext(elementid, text);
    setTimeout(function(){removedivtext(elementid)}, 5000);
}


function adddivtext(elementid, text){
    let elem = document.getElementById(elementid)
    if(text == ''){
        elem.innerHTML = "Кажется, вы ничего не ввели!"
    }
    else{
        elem.innerHTML = "Добрый день, " + text + ". Этот текст пропадет через 5 секунд"
    }
}

function removedivtext(elementid){
    let elem = document.getElementById(elementid)
    elem.innerHTML = '';
}