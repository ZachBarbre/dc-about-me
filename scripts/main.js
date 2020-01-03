let myImage = document.querySelector('img');
let timer = setTimeout(getCthulhu, 20000);

function getCthulhu() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.png') {
        myImage.setAttribute('src', 'images/cthulhu.jpg');
        timer = setTimeout(getCthulhu, 350);
    }
    else {
        myImage.setAttribute('src', 'images/me.png');
        timer = setTimeout(getCthulhu, 20000);
    }
}