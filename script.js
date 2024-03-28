 
window.onload = function() {
    var opacidade = 0;
    var texto = document.querySelector('.intro-title1');
    texto.style.opacity = 0;

    var intervalo = setInterval(function() {
        if (opacidade < 1) {
            opacidade = opacidade + 0.01;
            texto.style.opacity = opacidade;
        } else {
            clearInterval(intervalo);

   
            var opacidade2 = 1;
            var intervalo2 = setInterval(function() {
                if (opacidade2 > 0) {
                    opacidade2 = opacidade2 - 0.01;
                    texto.style.opacity = opacidade2;
                } else {
                    clearInterval(intervalo2);
                    window.location.href = "index.html";  
                }
            }, 50);  
        }
    }, 50);
};
