let inputCep = document.querySelector('#nCep');
let button = document.querySelector('#btnCep');
let divError = document.querySelector('#erro');
button.addEventListener('click', event => {
    if(inputCep.value.length < 8 || inputCep.value.length > 8){
        analysis();
    }else{
        analysis(false);
        let xhr = new XMLHttpRequest();
        xhr.onload = event => {
            let response = JSON.parse(xhr.responseText);
            for(let campo in response){
                if(document.querySelector('#'+campo)){
                    document.querySelector('#'+campo).value = response[campo];
                    document.querySelector('#'+campo).disabled = false;
                }
            };
        };

        xhr.open('GET', `https://viacep.com.br/ws/${inputCep.value}/json/`);
        xhr.send(null);
    }
    
    function analysis(show = true){
        divError.innerText = (show) ? 'O cep deve possuir 8 números' : 'Resultado do cep pesquisado:';
    };
});
