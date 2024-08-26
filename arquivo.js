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

function iniciaLetraMaiuscula(str){
    return str.length > 0 && str[0] === str[0].toUpperCase();
}

function caracteresValidos(str){
    for(let i=0;i<str.length;i++){
        let c = str[i];
        if(!((c>= 'A' && char <= 'Z')||
            (c>= 'a' && char <= 'z') ||
            //(c>= '0' && char <= '9') ||
             c==='_' )) {
            return false;
        }
    }
    return true;
}
 
/*
no widow:
// Analisar nome do arquivo. Regras -> Não pode ter caractere especial, somente "_", deve iniciar com letra maiúscula, tamanho mínimo 8 e máximo 15
        let fileName = file.name.split('.')[0];
        let lengthValid = fileName.length >= 8 && fileName.length <= 15;

        if (!startsWithUpperCase(fileName) || 
            !isValidCharacters(fileName) || 
            !lengthValid) {
            alert("O nome do arquivo deve:\n- Começar com uma letra maiúscula\n- Ter entre 8 e 15 caracteres\n- Não conter caracteres especiais, exceto underscore (_).");
            return;
        }
*/


window.addEventListener("load", function(){
    let btnLimpar = document.querySelector("#btnLimpar");

    btnLimpar.addEventListener("click", function(){
            limpar();
    });

    // FUNÇÃO SUBMETER

    

        //id botão submeter: btnSubmeter
        //name botão submeter: submeter

        let evento_submeter = document.querySelector('#btnSubmeter');
        evento_submeter.addEventListener("click", function(){
                let fileInput = document.querySelector('#arq');
                let selectedFileType = document.querySelector('input[name="seletor"]:checked');
                let file = fileInput.files[0];

                //Verifica caso nenhum arquivo tenha sido selecionado:
                if(!file){
                    alert("Por favor, selecione um arquivo.");
                    return;
                }

                //Verifica se um tipo de arquivo foi selecionado:
                if(!selectedFileType){
                    alert("Por favor, selecione um tipo de arquivo.");
                    return;
                }

                //Transforma a extensão do arquivo para minúscula:
                let fileType = file.name.split('.').pop().toLowerCase();

                //Define as extensões válidas para cada tipo de arquivo:
                let validSelection = {
                    jpg: ['jpg', 'jpeg', 'png'],
                    doc: ['doc', 'docx'],
                    pdf: ['pdf'],
                    csv: ['csv']
                }
                 // Verifica se a extensão do arquivo é permitida para o tipo selecionado
                if (!validSelection[selectedFileType.value].includes(fileType)) {
                alert("Tipo de arquivo não permitido! Por favor, selecione o tipo de arquivo correto.");
                return;
                }
                // Analisar nome do arquivo. Regras -> Não pode ter carac especial, somente "_", deve iniciar com letra mai, tam min 8 e max 15
        
                let fileName = file.name.split('.')[0];
                let lengthValid = fileName.length >= 8 && fileName.length <= 15;
        
                if (!iniciaLetraMaiuscula(fileName) || 
                    !caracteresValidos(fileName) || 
                    !lengthValid) {
                    alert("O nome do arquivo deve:\n- Começar com uma letra maiúscula\n- Ter entre 8 e 15 caracteres\n- Não conter caracteres especiais, exceto underscore (_).");
                    return;
                }
          
                alert("Arquivo carregado com sucesso! :)");
            });
    });

   


