const checkPalindrome = () => {
  const userInput = document.getElementById("text-input").value;
  const cleanedInput = userInput.toLowerCase().match(/[a-z0-9]/g);

  if (cleanedInput) {
    const answer = cleanedInput.join("");
    const reversedAnswer = cleanedInput.slice().reverse().join("");

    const resultDiv = document.getElementById("result");
    resultDiv.textContent =
      answer === reversedAnswer
        ? `${userInput} is a palindrome`
        : `${userInput} is not a palindrome`;
  } else {
    alert("Please input a value");
  }
};
