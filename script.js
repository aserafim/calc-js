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
  const opString = outPutDOM.innerText;
  const regex = /\d+/
  const regexOperation = /[+\-x\/|]/
  const opUm = opString.match(regex)
  const operacao = opString.match(regexOperation)
  indice = opString.indexOf(operacao)

  alert(indice)
  const opDois = 0

  

}