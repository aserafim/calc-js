document.querySelectorAll('.calculator__key').forEach(button => {
  button.addEventListener('click', function(){
    const outPutDOM = document.querySelector('.calculator__output');
    const buttonValue = button.innerText;
    outPutDOM.innerText += buttonValue;

  });
  
});