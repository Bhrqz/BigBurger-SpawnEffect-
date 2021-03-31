
//Selectiona todos los elementos con la clase ".animated"
let animated = document.querySelectorAll(".animated");

function showScroll(){
    let scrollTop = document.documentElement.scrollTop
    for (var i = 0; i<animated.length; i++) {
        let alturaAnimado = animated[i].offsetTop;
        if (alturaAnimado -500 < scrollTop){
            animated[i].style.opacity = 1;
            animated[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener("scroll", showScroll);