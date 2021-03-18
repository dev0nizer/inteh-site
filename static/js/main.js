var elem = document.getElementById('alertclick');
elem.addEventListener('click', function(){popupmessage("Вы нажали")});
elem.addEventListener('mouseover', function(){enabledisplay('hiddenblockmouseover')});
elem.addEventListener('mouseout', function(){disabledisplay('hiddenblockmouseover')});
elem.style.cursor = 'pointer';

function popupmessage(text){
    alert(text)
}


function enabledisplay(elementid){
    let elem = document.getElementById(elementid);
    elem.style.display = 'block';
}

function disabledisplay(elementid){
    let elem = document.getElementById(elementid);
    elem.style.display = 'none';
}