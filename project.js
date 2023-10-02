// 5. Check to see if player won OR lost
// 6. Give user winnings OR keep waged amount
// 7. Play again OR No money left in user acct

const prompt = require("prompt-sync")();

// Global variables for slots
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// 1. User deposits money
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

// 2. Determine number of lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please try again.");
    } else {
      return numberOfLines;
    }
  }
};

// 3. Collect a bet amount
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the total bet: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid bet, please try again.");
    } else {
      return numberBet;
    }
  }
};

// 4. Spin slot machine
const spin = () => {
  const symbols = [];
};

// General note: functions can be written anywhere *above* where they are invoked (below this line)
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
