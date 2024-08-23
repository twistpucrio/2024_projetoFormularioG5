
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

    let evento_submeter = document.querySelector('#btnSubmeter');
    evento_submeter.addEventListener("click", function(){
    
    }) 
});