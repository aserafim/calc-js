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
  
  const regex = /\d+/
  const regexOperation = /[+\-x\/|]/
  
  const operandoUm = expressao.match(regex)
  const operacao = expressao.match(regexOperation)
  const indice = expressao.indexOf(operacao)
  const operandoDois = expressao.slice(indice).match(regex)
  
  


  alert(operandoDois)
  const opDois = 0

  

}