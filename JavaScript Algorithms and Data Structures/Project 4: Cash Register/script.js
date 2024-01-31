const rate = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function handlePurchase() {
  const itemSelect = document.getElementById("item-select");
  const selectedPrice = parseFloat(itemSelect.options[itemSelect.selectedIndex].value);
  const customerPayment = parseFloat(document.getElementById("cash").value);

  // Use the provided values for testing
  const cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];

  checkCashRegister(selectedPrice, customerPayment, cid);
}

function checkCashRegister(itemPrice, customerPayment, cid) {
  let change = ((customerPayment - itemPrice) * 100).toFixed(2);
  let cidTotal = cid.reduce((sum, [, amount]) => sum + amount * 100, 0).toFixed(2);

  if (change < 0) {
    alert("Customer does not have enough money to purchase the item.");
    return;
  }

  if (change == 0) {
    document.getElementById("change-due").innerHTML = `Status: No change due - customer paid with exact cash`;
    return;
  }

  const result = calculateChange(change, cid);
  displayResult(result);
}

function calculateChange(change, cid) {
  const changeArray = [];

  for (const [coinName, coinTotalValueInDollars] of cid.reverse()) {
    const selectedCurrency = rate[coinName];
    const coinsToReturn = Math.floor(change / selectedCurrency);

    if (coinsToReturn > 0) {
      const actualReturnedAmount = Math.min(coinsToReturn * selectedCurrency, coinTotalValueInDollars * 100);
      changeArray.push([coinName, actualReturnedAmount / 100]);
      change -= actualReturnedAmount;
    }
  }

  return change == 0 ? { status: "OPEN", change: changeArray } : { status: "INSUFFICIENT_FUNDS", change: [] };
}

function displayResult(result) {
  const changeDueElement = document.getElementById("change-due");
  changeDueElement.innerHTML = `<p>Status: ${result.status}</p>`;

  if (result.status === "OPEN") {
    changeDueElement.innerHTML += "<p>Change in drawer:</p><ul>";

    result.change.forEach(([coinName, coinValue]) => {
      changeDueElement.innerHTML += `<li>${coinName}: $${coinValue.toFixed(2)}</li>`;
    });

    changeDueElement.innerHTML += "</ul>";
  }
}
