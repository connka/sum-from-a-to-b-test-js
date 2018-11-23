let fromN = 0;
let toN = 0;

function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return toN + sum(fromN, toN -1);

}

console.log(sum(fromN, toN));

module.exports = sum;

