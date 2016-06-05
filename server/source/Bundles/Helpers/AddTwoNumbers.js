function AddTwoNumbers( a, b ) {
  const newA = (typeof a === 'number') ? a : 0;
  const newB = (typeof b === 'number') ? b : 0;
  return newA + newB;
};


module.exports = AddTwoNumbers;
