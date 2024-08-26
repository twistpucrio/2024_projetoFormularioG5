//Arquivo Javascript - Projeto 1.

//caso 1 - busca e match de números.

function buscar_numeros(texto){
    let numeros_encontrados = texto.search(/\d/);
    return numeros_encontrados;
}

function match_numeros(texto) {
    const numeros = /[0-9]/g;
    let lista_numeros = texto.match(numeros);
    return lista_numeros;
}

//caso 2 - busca e match de letras maiúculas.

function buscar_letras_maiusculas(texto) {
    let letras_maiusculas = texto.search(/[A-Z]/);
    return letras_maiusculas;
}

function match_letras_maiusculas(texto) {
    const letras_maiusculas = /[A-Z]/g;
    let lista_letras_maiusculas = texto.match(letras_maiusculas);
    return lista_letras_maiusculas;
}

//caso 3 - busca e match de letras minúsculas.

function buscar_letras_minusculas(texto) {
    let letras_minusculas = texto.search(/[a-z]/);
    return letras_minusculas;
}

function match_letras_minusculas(texto) {
    const letras_minusculas = /[a-z]/g;
    let lista_letras_minusculas = texto.match(letras_minusculas);
    return lista_letras_minusculas;
}

//caso 4 - busca e match de caracteres especiais.

function buscar_caracteres_especiais(texto) {
    let caracteres_especiais = texto.search(/[^A-Za-z0-9]/);
    return caracteres_especiais;
}

function match_caracteres_especiais(texto) {
    const caracteres_especiais = /[^A-Za-z0-9]/g;
    let lista_caracteres_especiais = texto.match(caracteres_especiais);
    return lista_caracteres_especiais;
}

//função para obter tamanho (número de ocorrências) de uma lista.

function ocorrencias(lista) {
    return lista.length;
}

//botão de limpar o textarea. OK

//id do textarea: texto.
//name dos seletores (radio): bolinha.

function limpar(){
    let texto = document.querySelector("#texto");
    let bolinhas = document.getElementsByName("bolinha");

    texto.value= " "; //limpando a textarea.

    for (bolinha of bolinhas){ //limpando a seleção dos radios.
        bolinha.checked = false;
    }
}

window.addEventListener("load", 
    function (){
        //evento 1 - busca no texto na textarea após clicar no botão "Submeter".

        //id do botão submeter: botao_submeter;
        //name do botão submeter: submeter.

        let evento_submeter = document.querySelector('#botao_submeter');

        evento_submeter.addEventListener("click", 
            function(){
                let texto = document.querySelector('#texto').value;
                if (texto != "") {
                    let bolinhas = document.getElementsByName("bolinha");
                    let radio_vazio = 0;
                    for (bolinha of bolinhas) {
                        //caso 4 - busca e match de caracteres especiais.
                        if (bolinha.checked && bolinha.value == "cEspecial") { //caracteres especiais.
                            let ocorrencia_cesp = buscar_caracteres_especiais(texto);

                            if (ocorrencia_cesp == -1) {
                                alert("Padrão caracteres especiais não encontrado.");
                            }

                            else {
                                let n_ocorrencias_cesp = ocorrencias(match_caracteres_especiais(texto));
                                alert("Padrão caracteres especiais encontrado, quantidade de ocorrências: " + n_ocorrencias_cesp + ".");
                            }
                        }
                        //caso 1 - busca e match de números.
                        else if (bolinha.checked && bolinha.value == "digNum") { //números.
                            let ocorrencia_num = buscar_numeros(texto);

                            if (ocorrencia_num == -1) {
                                alert("Padrão números não encontrado.");
                            }

                            else {
                                let n_ocorrencias_num = ocorrencias(match_numeros(texto));
                                alert("Padrão números encontrado, quantidade de ocorrências: " + n_ocorrencias_num + ".");
                            }
                        }
                        //caso 2 - busca e match de letras maiúculas.
                        else if (bolinha.checked && bolinha.value == "lMax") { //letras maiúsculas.
                            let ocorrencia_max = buscar_letras_maiusculas(texto);

                            if (ocorrencia_max == -1) {
                                alert("Padrão letras maiúsculas não encontrado.");
                            }

                            else {
                                //alert("match max: " + match_letras_maiusculas(texto));
                                let n_ocorrencias_max = ocorrencias(match_letras_maiusculas(texto));
                                alert("Padrão letras maiúsculas encontrado, quantidade de ocorrências: " + n_ocorrencias_max + ".");
                            }
                        }
                        //caso 3 - busca e match de letras minúsculas.
                        else if (bolinha.checked && bolinha.value == "lMin") { //letras minúsculas.
                            let ocorrencia_min = buscar_letras_minusculas(texto);

                            if (ocorrencia_min == -1) {
                                alert("Padrão letras minúsculas não encontrado.");
                            }

                            else {
                                //alert("match min: " + match_letras_minusculas(texto));
                                let n_ocorrencias_min = ocorrencias(match_letras_minusculas(texto));
                                alert("Padrão letras minúsculas encontrado, quantidade de ocorrências: " + n_ocorrencias_min + ".");
                            }
                        }
                        else {
                            radio_vazio += 1;
                            if (radio_vazio == 4) {
                                alert("Nenhuma opção foi marcada. Não foi possível submeter o formulário.");
                            }
                        }
                    }
                }
                else {
                    alert("O campo texto está vazio.");
                }
            }
        )
        //evento 2 - limpar a textarea após clicar no botão "Limpar".

        let botao_limpar = document.querySelector("#botao_limpar");

        botao_limpar.addEventListener("click", function(){
                limpar();
        });
    }
)

//COMPLETO