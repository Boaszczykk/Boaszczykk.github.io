// Espera carregar todo o conteúdo HTML
window.onload=function(){
    //alert("Alo Ha");
    console.log("Se quiser me ver, tem que pressionar F12! Console...");
    //Concatenação de strings com o símbolo +
    console.log("a = " + a + " b = " + b);
    console.log(" a + b = " + parseInt(a+b));
};

//Variavel Global
var a = 10;
var b = 20;

    let entradas= document.querySelectorAll('input');
    let reposta= document.querySelector('.resposta');
    let botão= document.querySelector('#btnSomar');

pegaNúmero1= function(){
    return entradas[0].value;
}

pegaNúmero2= function(){
    return entradas[1].value;
}

testarEntradasVazias= function(){
    if(pegaNúmero1() ==='' || pegaNúmero2() ==='')
    return true;

    else return false;
}

somar= function(){
    if(testarEntradasVazias()){
        resposta.textContent= "Erro Preencha os Dois Campos Numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }

    else{
        atualizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
}

atualizaResposta= function(){
    let num1= parseInt(pegaNúmero1());
    let num2= parseInt (pegaNúmero2());
    var soma = num1 + num2;
    resposta.textContent= num1 + '+' + num2 + '=' + soma;0
}

//monitoramento do click no botão
//quando o botão for clicado a função somar será chamada!
botão.addEventListener('click',somar);

