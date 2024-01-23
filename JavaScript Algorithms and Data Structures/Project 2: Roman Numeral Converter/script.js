document.getElementById("convert-btn").addEventListener("click", function () {
  const formContainer = document.querySelector('form');
  
  //Create GIF overlay
  const overlayContainer = document.createElement("div");
  overlayContainer.id = "overlayContainer";
  overlayContainer.innerHTML = '<div id="loaderContainer"><iframe src="https://giphy.com/embed/3ov9jU4ycPvfrPTsly" width="480" height="480" frameBorder="0" class="giphy-embed"</div>';
  document.body.appendChild(overlayContainer);

  //Hide form and display GIF as a loader
  formContainer.style.display = 'none';
  overlayContainer.style.display = 'flex';

  //Set timeout to remove GIF and return to converter
  setTimeout(function () {
    overlayContainer.style.display = 'none';
    formContainer.style.display = 'block';
    overlayContainer.remove();
  }, 2000);
});

const romanConverter = () => {
  const numInput = parseInt(document.getElementById("number").value.trim(), 10);
  const output = document.getElementById("output");

  if (!numInput) {
    //If there is no input
    output.textContent = "Please enter a valid number";
  } else if (numInput === -1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numInput >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } 
  else {
    //Map from Arabic numerals to Roman numerals
    const numeralLookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let num = numInput; //New variable for iteration
    let accumulator = "";

    //Iterate through numeral map to convert
    for (const key in numeralLookup) {
      const numeralValue = numeralLookup[key];
      while (numeralValue <= num) {
        num -= numeralValue;
        accumulator += key;
      }
    }

    output.textContent = `${numInput} in Roman numerals is: ${accumulator}`;
  }
};
