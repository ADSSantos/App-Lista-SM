
document.addEventListener("DOMContentLoaded", function() {
//Capturar todos os checkboxes via DOM usando a classe
    let checkboxes = document.getElementsByClassName("myCheckbox");

   

    //Função para atualiza o estado no localstorage
    function atualizacaoLs() {
        for (let checkbox of checkboxes) {
            let = chave = checkbox.value; // Usar valor como chave para cada checkbox
            if(checkbox.checked) {
                localStorage.setItem(chave, "true");

            }else {
                localStorage.setItem(chave, "false");
            } 
        }
    }

    //Adicionar event listener a cada checkbox
    for(let checkbox of checkboxes) {
        checkbox.addEventListener("click", atualizacaoLs)

    }

    //Função para definir o estado inicial dos checkboxes com base no licalstorege
    function estadoInicialCheck() {
        for (let checkbox of checkboxes) {
            let = chave = checkbox.value; //Usar valor como chave para cada checkbox
            let valorArmazenado = localStorage.getItem(chave);

            if (valorArmazenado === "true") {
                checkbox.checked = true

            }else {
                checkbox.checked = false;
            }

        }

    }

  
    

   

    //Chamar a funcão para definir o estado inicial quando a pagina carregar
    estadoInicialCheck()
    

   

   

});