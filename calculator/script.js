const display = document.querySelector('.display');

display.addEventListener('input', () => {
  let fontSize = 52; // starting font size in px
  display.style.fontSize = fontSize + 'px';

  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'nowrap';
  span.style.fontFamily = getComputedStyle(display).fontFamily;
  span.style.fontWeight = getComputedStyle(display).fontWeight;
  span.style.fontSize = fontSize + 'px';
  span.textContent = display.textContent;

  document.body.appendChild(span);

  while (span.offsetWidth > display.clientWidth && fontSize > 10) {
    fontSize -= 5;
    span.style.fontSize = fontSize + 'px';
  }

  display.style.fontSize = fontSize + 'px';
  document.body.removeChild(span);
});
 
function append(value) {
  if (value === 'Math.PI') {
    display.textContent += Math.PI.toFixed(5);
  } else {
    display.textContent += value;
  }
  scrollDisplayToEnd();
}

function clearDisplay() {
  display.textContent = '';
}

function deleteLast() {
  display.textContent = display.textContent.slice(0,-1);
}

function calculate() {
  try {
    let expression = display.textContent.replace(/x/g, '*');
    const result = eval(expression)
    display.textContent = result.toFixed(3);
  } catch(error) {
    display.textContent = 'Error';
  }
}

function square() {
  try {
    const value = eval(display.textContent);
    display.textContent = (value * value).toFixed(3);
  } catch (error) {
    display.textContent = 'Error';
  }
}

function scrollDisplayToEnd() {
  display.scrollLeft = display.scrollWidth;
}