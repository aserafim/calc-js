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
    const operacao = outPutDOM.innerText;
    const regex = /\d+/
    const regexOperation = /(+|-|x|)/
    const opUm = operacao.match(regex)
    const test = operacao.match(regexOperation)
  
    alert(test)
  
    const opDois = str(operacao)
  
  }