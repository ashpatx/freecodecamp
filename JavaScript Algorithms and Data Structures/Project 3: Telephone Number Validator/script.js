const phoneCheck = (str) => {
    const validPatterns = [
      //1 555-555-5555 Valid! 
      /^1 \d{3}-\d{3}-\d{4}$/,
        
      //1 (555) 555-5555 Valid!
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
  
      //5555555555 Valid!
      /^\d{10}$/,
  
      //555-555-5555 Valid!
      /^\d{3}-\d{3}-\d{4}$/,
  
      //(555)555-5555 Valid!
      /\(\d{3}\)\d{3}-\d{4}$/,
  
      // (555)555-5555 Valid!
      /^\(\d{3}\)\d{3}-\d{4}$/,
  
      //1(555)555-5555 Valid!
      /^1\(\d{3}\)\d{3}-\d{4}/,
  
      //1 555 555 5555 Valid!
      /^1 \d{3} \d{3} \d{4}$/
    ];
  
    const userInput = document.getElementById("user-input").value;
    const resultDiv = document.getElementById("results-div");
  
    if (userInput === "") {
    alert("Please provide a phone number.");
  } else if (validPatterns.some((pattern) => pattern.test(userInput))) {
    resultDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${userInput}`;
  }
};
  
  const clearNumber = () => {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";
  };
