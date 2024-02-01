function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let cidTotal = 0;

  for (let [, amount] of cid) {
    cidTotal += amount * 100;
  }

  if (change > cidTotal) {
    return { status: 'INSUFFICIENT_FUNDS', change: [], cid };
  } else if (change === cidTotal) {
    return { status: 'CLOSED', change: cid, cid };
  } else {
    let result = [];
    let remainingCid = JSON.parse(JSON.stringify(cid));
    remainingCid = remainingCid.reverse();

    let currencyMap = {
      "ONE HUNDRED": 10000,
      "TWENTY": 2000,
      "TEN": 1000,
      "FIVE": 500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1,
    };

    for (let [coinName, coinValue] of remainingCid) {
      coinValue = coinValue * 100;
      if (change >= currencyMap[coinName]) {
        let coinsToReturn = Math.floor(change / currencyMap[coinName]);
        coinsToReturn = Math.min(coinsToReturn, coinValue / currencyMap[coinName]);
        let actualReturnedAmount = coinsToReturn * currencyMap[coinName];

        result.push([coinName, actualReturnedAmount / 100]);
        change -= actualReturnedAmount;
      }
    }

    if (change > 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [], cid };
    }

    return { status: 'OPEN', change: result, cid };
  }
}

function displayResult(result) {
  console.log(`Status: ${result.status}`);
  if (result.status === 'OPEN') {
    console.log("Change to Customer:");
    result.change.forEach(([coinName, coinValue]) => {
      console.log(`${coinName}: $${coinValue}`);
    });
    console.log("Remaining Cash in Drawer:");
    result.cid.forEach(([coinName, coinValue]) => {
      console.log(`${coinName}: $${coinValue}`);
    });
  }
}

const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

displayResult(result);
