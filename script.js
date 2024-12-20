function changeColor(color, headingText) {
    document.body.style.backgroundColor = color;
    document.getElementById('heading').textContent = headingText; 
  }

document.getElementById('btn1').addEventListener("click", ()=> {
  changeColor('red', 'Hello');
})

document.getElementById('btn2').addEventListener("click", ()=> {
  changeColor('blue', 'How are you?');
})

document.getElementById('btn3').addEventListener("click", ()=> {
  changeColor('green', 'Have a Nice Day');
})