document.querySelectorAll('.calculator__key:not(.calculator__key--enter):not(.calculator__key--clean)').forEach(button => {
  button.addEventListener('click', function(){
    const outPutDOM = document.querySelector('.calculator__output');
    const buttonValue = button.innerText;
    if(outPutDOM.innerText == 0){
      outPutDOM.innerText = buttonValue;
    } else {
      outPutDOM.innerText += buttonValue;
    }
  });
});

function limpar(){
  const outPutDOM = document.querySelector('.calculator__output');
  outPutDOM.innerText = 0;
}

function resultado(){
  const outPutDOM = document.querySelector('.calculator__output');
  const expressao = outPutDOM.innerText;
  
  const regex = /\d+/g;
  const regexOperation = /[+\-x\/|]/;

  const operandos = expressao.match(regex);
  const operacao = expressao.match(regexOperation)[0]
  
  const operandoUm = parseFloat(operandos[0]);
  const operandoDois = parseFloat(operandos[1]);

  if(operacao == '/') {
    resultado = operandoUm / operandoDois;
  } else if(operacao == 'x'){
    resultado = operandoUm * operandoDois;
  } else if(operacao == '+'){
    resultado = operandoUm + operandoDois;
  } else if(operacao == '-'){
    resultado = operandoUm - operandoDois;
  }
  
  outPutDOM.innerText = resultado;

}