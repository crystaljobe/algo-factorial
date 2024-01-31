function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    let currFactorial = factorial(num - 1) * (num);
    return currFactorial;
  }
}

module.exports = factorial;
