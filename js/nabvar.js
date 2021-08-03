const hamBurgern = document.querySelector(".ham-burger");

hamBurgern.addEventListener("click", function(){

    document.getElementById('nabvar').style.display = 'block';;
    document.getElementById('ham-burger').style.display = 'none';;
    document.getElementById('ham-burger1').style.display = 'block';;
});

const hamBurgern1 = document.querySelector(".ham-burger1");

hamBurgern1.addEventListener("click", function(){

    document.getElementById('nabvar').style.display = 'none';;
    document.getElementById('ham-burger').style.display = 'block';;
    document.getElementById('ham-burger1').style.display = 'none';;
});

const footer = document.querySelector(".footer2");

footer.addEventListener("click", function(){

    document.getElementById('sello').style.display = 'block';;
});