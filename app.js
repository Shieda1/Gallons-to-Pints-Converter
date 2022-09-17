// https://www.omnicalculator.com/conversion/gallons-to-pints-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pintsRadio = document.getElementById('pintsRadio');
const gallonsRadio = document.getElementById('gallonsRadio');

let pints;
let gallons = v; 

// labels of the inpust
const variable = document.getElementById('variable');

pintsRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Pints';
  pints = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pintsRadio.checked)
    result.textContent = `Pints = ${computepints().toFixed(5)}`;

  else if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;
})

// calculation

function computepints() {
  return Number(gallons.value) * 8;
}

function computegallons() {
  return Number(pints.value) / 8;
}