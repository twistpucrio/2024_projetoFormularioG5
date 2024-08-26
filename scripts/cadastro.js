//Arquivo Javascript - Projeto 1.

//caso do NOME: busca de números.

//NÃO deve ter nenhum número no campo nome.

function buscar_numeros(texto){
    let numeros_encontrados = texto.search(/\d/);
    return numeros_encontrados;
}

function formato_nome(nome) {
    if (buscar_numeros(nome) != -1) {  //caso onde há número no nome. caso impróprio.
        return false;
    }
    else {
        return true;
    }
}

//caso do CPF:

//xxx.xxx.xxx-xx: OK.

function formato_cpf(cpf) {
    if (cpf.search(/(\d{3}.\d{3}.\d{3}-\d{2})/) != -1) { //caso o formato "nnn.nnn.nnn-nn" seja achado, o formato está próprio.
        return true;
    }
    else {
        return false;
    }
}

//caso da data de nascimento: 

//dd/mm/yyyy: OK.

function formato_data(data) { 
    if (data.search(/(\d{2}\/\d{2}\/\d{4})/) != -1 ) { //caso o formato "dd/mm/aaaa" seja achado, o formato está próprio.
        return true;
    }
    else {
        return false;
    }
}

//caso de usuário:

/*
não permite começar com números (mas pode haver números no final): OK;
não permitir espaço em branco: OK;
os únicos caracteres especiais que pode ser utilizado é underscore e o ponto final (os demais são proibidos): OK;
não permitir letras maiúsculas: OK.
*/

function formato_usuario(usuario) {
    if (usuario.search(/[0-9]/) == 0) { //caso tenha números no começo. caso impróprio.
        console.log("O usuário começa com número(s).")
        return false;
    }
    else if (usuario.search(/\s/) != -1) { //caso tenha espaço em branco. caso impróprio. (caso de regex possível, testar: /^[ \t]+$/)
        //alert("espaço em branco com /\s/: " + usuario.search(/\s/));
        //alert("espaço em branco com /^[ \t]+$/: " + usuario.search(/^[ \t]+$/));
        console.log("O usuário possui espaço em branco.")
        return false;
    }
    else if (usuario.search(/[^A-Za-z0-9._]/) != -1) { //caso tenha caracteres especiais, fora ponto final e underscore. caso impróprio.
        console.log("O usuário possui caractere(s) especiais não permitidos. Os caracteres especiais permitidos são o ponto final e underscore.")
        return false;
    }
    else if (usuario.search(/[A-Z]/) != -1) { //caso tenha letra maiúscula. caso impróprio.
        console.log("O usuário possui letra(s) maiúscula(s).")
        return false;
    }
    else {
        return true;
    }
}

//caso de email:
/*
todas as letras em minúsculo: OK;
os caracteres especiais permitidos são ponto final, underscore e um arroba: OK;
deve haver algum texto antes e depois da arroba: OK.
*/

function formato_email(email) {
    if (email.search(/[A-Z]/) != -1) { //caso tenha letra maiúscula. caso impróprio.
        console.log("O email possui letra(s) maiúscula(s).");
        return false;
    }
    else if (email.search(/[^A-Za-z0-9._@]/) != -1) { //caso tenha caracteres especiais, fora ponto final, underscore e um arroba. caso impróprio.
        console.log("O email possui caractere(s) especiais não permitidos. Os caracteres especiais permitidos são o ponto final, underscore e um arroba.");
        return false;
    }
    else if (email.search(/^[a-z0-9._]+@[a-z0-9._]+$/) == -1) { //caso NÃO tenha texto antes e depois do arroba. caso impróprio.
        console.log("O email não possui algum texto antes e depois da arroba.");
        return false;
    }
    else {
        return true;
    }
}

//caso de senha(1):

/*
quantidade de caracteres (mínimo 8; máximo 15): OK;
pelo menos uma letra maiúscula: OK;
pelo menos um número: OK;
pelo menos um caractere especial: OK;
não permitir o número zero: OK.
*/

function formato_senha(senha) {
    if (senha.lenght < 8 || senha.lenght > 15) { //caso que quantidade de caracteres não está própria.
        console.log("A senha não possui a quantidade de caracteres própria (mínimo 8; máximo 15).");
        return false;
    }
    else if (senha.search(/[A-Z]/) == -1) { //caso onde não tem letra maiúscula.
        console.log("A senha não possui pelo menos uma letra maiúscula.");
        return false;
    }
    else if (senha.search(/[0-9]/) == -1) { //caso onde não tem número.
        console.log("A senha não possui pelo menos um número.")
        return false;
    }
    else if (senha.search(/[^A-Za-z0-9]/) == -1) { //caso onde não tem nenhum caracter especial. underline considerado como caracter especial.
        console.log("A senha não possui pelo menos um caractere especial.");
        return false;
    }
    else if (senha.search(/[0]/) != -1) { //caso onde tem o número 0.
        console.log("A senha possui o número zero, que não é permitido.")
        return false;
    }
    else {
        return true;
    }
}

//caso de senha(2):

//Deve haver uma verificação se o segundo campo da senha está igual ao primeiro: OK.

function senhas_iguais(senha_1, senha_2) {
    return senha_1 == senha_2;
}

function limpar(){
    let nome = document.querySelector("#nome");
    let cpf = document.querySelector("#cpf");
    let data = document.querySelector("#data");
    let usuario = document.querySelector("#usuario");
    let email = document.querySelector("#email");
    let senha_1 = document.querySelector("#senha_1");
    let senha_2 = document.querySelector("#senha_2");

    nome.value = "Nome";
    cpf.value = "ddd.ddd.ddd-dd";
    data.value = "dd/mm/aaaa";
    usuario.value = "Usuário";
    email.value = "Email";
    senha_1.value = "Senha";
    senha_2.value = "Senha";
}

window.addEventListener("load", 
    function (){
        //evento 1 - busca no texto na textarea após clicar no botão "Submeter".

        //id do botão submeter: botao_submeter;
        //name do botão submeter: submeter.

        let evento_submeter = document.querySelector('#botao_submeter');

        evento_submeter.addEventListener("click", function(){
                let nome = document.querySelector('#nome').value;
                let cpf = document.querySelector('#cpf').value;
                let data = document.querySelector('#data').value;
                let usuario = document.querySelector('#usuario').value;
                let email = document.querySelector('#email').value;
                let senha_1 = document.querySelector('#senha_1').value;
                let senha_2 = document.querySelector('#senha_2').value;

                if (nome != "" && cpf != "" && data != "" && usuario != "" && email != "" && senha_1 != "" && senha_2 != "") {
                    if (formato_nome(nome) && formato_cpf(cpf) && formato_data(data) && formato_usuario(usuario) && formato_email(email) && formato_senha(senha_1) && senhas_iguais(senha_1, senha_2)) {
                        alert("Formulário submetido com sucesso! Obrigada :)")
                    }
                    else {
                        if (formato_nome(nome) == false) {
                            alert("O formato do campo Nome não está próprio.\nCampo Nome não deve ter nenhum número.");
                        }
                        if (formato_cpf(cpf) == false) {
                            alert("O formato do campo CPF não está próprio.\nCampo CPF deve ter o formato: ddd.ddd.ddd-dd (sendo que d representa dígitos numéricos).");
                        }
                        if (formato_data(data) == false) {
                            alert("O formato do campo Data não está próprio.\nCampo Data deve ter o formato: dd/mm/aaaa (sendo que d, m e a representam dígitos numéricos - dia, mês e ano, respectivamente).");
                        }
                        if (formato_usuario(usuario) == false) {
                            alert("O formato do campo Usuario não está próprio.\nCampo Usuario deve:\n-não permite começar com números (mas pode haver números no final);\n-não permitir espaço em branco;\n-os únicos caracteres especiais que pode ser utilizado é underscore e o ponto final (os demais são proibidos);\n-não permitir letras maiúsculas.");
                        }
                        if (formato_email(email) == false) {
                            alert("O formato do campo Email não está próprio.\nCampo Email deve:\n-ter todas as letras em minúsculo;\n-permitir os caracteres especiais ponto final, underscore e um arroba;\n-haver algum texto antes e depois da arroba.");
                        }
                        if (formato_senha(senha_1) == false) {
                            alert("O formato do campo Senha não está próprio.\nCampo Senha deve:\n-ter quantidade de caracteres (mínimo 8; máximo 15);\n-ter pelo menos uma letra maiúscula;\n-ter pelo menos um número;\n-ter pelo menos um caractere especial;\n-não permitir o número zero.");
                        }
                        if (senhas_iguais(senha_1, senha_2) == false) {
                            alert("As duas senhas não estão iguais. Favor, cheque o segundo campo de senha e garanta que está igual ao primeiro.");
                        }
                    }
                }

                else {
                    alert("Algum campo está vazio. Por favor, preencha todas as informações do formúlario.");
                }               
            }
        )
        //evento 2 - limpar o formulário após clicar no botão "Limpar".

        let botao_limpar = document.querySelector("#botao_limpar");

        botao_limpar.addEventListener("click", function(){
                limpar();
        });
    }
)

//COMPLETO