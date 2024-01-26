const phoneCheck = (str) => {
  const invalidPatterns = [
    //555-5555 Invalid
    /\d{3}-\d{4}$/,

    //5555555 Invalid
    /\d{7}$/,

     //123**&!!asdf# Invalid
    /123\*\*&!!asdf#$/,

    //(6054756961) Invalid
    /\(\d{10}\)$/,

    //0 (757) 622-7382 Invalid
    /^0 \(\d{3}\) \d{3}-\d{4}/,

    //-1 (757) 622-7382 Invalid
    /^-1 \(\d{3}\) \d{3}-\d{4}$/,

    //2 757 622-7382 Invalid
    /^[2-9] \d{3} \d{3}-\d{4}$/,

    //10 (757) 622-7382 Invalid
    /^10 \(\d{3}\) \d{3}-\d{4}$/,

    //27576227382 Invalid
    /\d{11}$/, 

    //(275)76227382 Invalid
    /\(\d{3}\)\d{8}$/,

    //2(757)6227382 Invalid
    /2\(\d{3}\)\d{7}$/,

    //2(757)622-7382 Invalid
    /^2\(\d{3}\)\d{3}-\d{4}$/,

    //555)-555-5555 Invalid
    /\d{3}\)-\d{3}-\d{4}$/,

    //(555-555-5555 Invalid
    /\(\d{3}-\d{3}-\d{4}$/, 

    //(555)5(55?)-5555 Invalid
    /\(555\)\d{1}\(\d{2}\?\)?-5555$/,

    //55 55-55-555-5 Invalid
    /\d{2} \d{2}-\d{2}-\d{3}-\d{1}$/,

    //11 555-555-5555 Invalid
    /11 \d{3}-\d{3}-\d{4}$/
  ];

  

  const validPatterns = [
    //1 555-555-5555 Valid! 
    /^1 ?\d{3}-\d{3}-\d{4}$/,
      
    //1 (555) 555-5555 Valid!
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    //5555555555 Valid!
    /^\d{10}$/,

    //555-555-5555 Valid!
    /\d{3}-\d{3}-\d{4}/,

    //(555)555-5555 Valid!
    /\(\d{3}\)\d{3}-\d{4}$/,

    //1(555)555-5555 Valid!
    /^1\(\d{3}\)\d{3}-\d{4}$/,

    //1 555 555 5555 Valid!
    /1 \d{3} \d{3} \d{4}$/
  ];

  const userInput = document.getElementById("user-input").value;
  const resultDiv = document.getElementById("results-div");

  if (userInput === "") {
    alert("Please provide a phone number.");
  }
 else if (validPatterns.some((pattern) => pattern.test(userInput))) {
    resultDiv.textContent = `Valid US number: ${userInput}`;
  } else if (invalidPatterns.some((pattern) => pattern.test(userInput))) {
    resultDiv.textContent = `Invalid US number: ${userInput}`;
  } else {
    resultDiv.textContent = "Unknown"; // Or handle other cases
  }
};

const clearNumber = () => {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
};
