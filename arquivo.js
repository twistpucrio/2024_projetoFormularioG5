//Não possibilitar preencher o nome do arquivo com caráteres especiais (exceto underscore);
//Iniciar com letra maiúscula;
//Deve ter o tamanho mínimo 8 caracteres e máximo 15
//Os resultados podem ser informados utilizando mensagens de alertas.


function limpar(){
    
    let atividade = document.getElementsByName("seletor");

    for (at of atividade){
        at.checked = false;
    }

}

/*function validar(){

}*/


// é para colocar os eventos click 
// dos botões limpar e validar
// quando a pagina estiver sendo carregada
// pelo navegador de internet

window.addEventListener("load", function(){
    let btnLimpar = document.querySelector("#btnLimpar");
    let btnValidar = document.querySelector('#btnValidar');

    btnLimpar.addEventListener("click", function(){
            limpar();
    });

    btnValidar.addEventListener("click", function(){
            validar();
    });

});