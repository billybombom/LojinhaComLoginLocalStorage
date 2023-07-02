var setaEsquerda = document.getElementById('seta1')
var setaDireita = document.getElementById('seta2')
var imagem = document.getElementById('prod-1')

var imgs = [

    "../Imgs/prod2.webp",
    "../Imgs/prod3.jpg",
    "../Imgs/prod4.webp",

]

var indices = 0;

function exibiraImagem (){
    imagem.src = imgs[indices]
}

function proximaImg (){
    indices++;
    if(indices >= imgs.length){
        indices= 0;
    }

    exibiraImagem();

}
    function imgAnterior(){
        indices--;
        if(indices < 0 ){
            indices = imgs.length - 1;
        }

        exibiraImagem();
    }

    setaEsquerda.addEventListener("click", imgAnterior)
    setaDireita.addEventListener("click", proximaImg)

    exibiraImagem();
