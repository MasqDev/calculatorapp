document.getElementById('celsius').addEventListener('submit', calculateResult);
  
function calculateResult(event) {
  
  const dCelsius = document.getElementById('degreeC') ; 
  const farenheit = document.getElementById('computedF');

 const celsiusInput = parseFloat(dCelsius.value);

  const newC = celsiusInput/5*9+32;

  if(isFinite(newC)) {
      farenheit.value =  (celsiusInput/5*9+32).toFixed(2);
    
  } else {
    showError('Please check your numbers');
  }

  event.preventDefault();

}


document.getElementById('farenheit').addEventListener('submit', findResult);
  
function findResult(e) {
  
  const dFarenheit = document.getElementById('degreeF') ; 
  const celsius = document.getElementById('computedC');

 const farenheitInput = parseFloat(dFarenheit.value);

  const newF = ((farenheitInput-32)*9/5);

  if(isFinite(newF)) {
      celsius.value =  ((farenheitInput-32)*9/5).toFixed(2);
    
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();

}