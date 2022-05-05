const divide = (x, y) => {
  let quotient;
  try {
    if (y === 0) {
      throw { name: 'DivideByZero Error' };
    }
    quotient = Math.floor(x / y);
  } catch (error) {
    return error.name;
  }
  return quotient;
};

// const args = process.argv.slice(2).map(x => +x);
// console.log(divide(...args));

exports.divide = divide;
