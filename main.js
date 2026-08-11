const botoes = document.querySelectorALL("button");

botoes.array.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoCliacado);
    function botaoCliacado(){
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textoContent++;
            curtiu = true;
        } else {
            texto.Content--;
            curtiu = false;
        }
    }
})