
function limpar(){
    
    let pesquisa = document.getElementById("pesquisa");
    pesquisa.value = " ";

    let substituir = document.getElementById("substituir");
       substituir.value = " ";

    let texto = document.getElementById("texto");
        texto.value = " ";


}

//pesquisa/substituir/texto

window.addEventListener("load", function(){
    let btnLimpar =  document.querySelector("#btnLimpar");
    let btnSubmeter = document.querySelector("#btnSubmeter");

    btnLimpar.addEventListener("click", function(){
        limpar();
})
    btnSubmeter.addEventListener("click", function(){
        substituir();
        });

});



function substituir(){
    let texto = document.querySelector("#texto");
    let pesquisa=  document.querySelector("#pesquisa");
    let substitui =  document.querySelector("#substituir");

    let textoInicial = texto.value;
    let partePesquisa = pesquisa.value;
    let textoSubstituido = substitui.value;

    let resultado = textoInicial.replace(new RegExp(partePesquisa, "g"), textoSubstituido);
    alert("Texto substiruído:\n " + resultado);
    texto.value = resultado;
}

