let str = "";
function repeater( c) {
  if(str.length === 5) return str;
  str += c;
  return repeater(c);
}

function loop(num) {
  if(num === 0) return num;
  console.log(num);
  return loop(num -1);
}


function countTo(count = 0, limit) {
  if(count === limit) return count;
  console.log(count);
  count++;
  return countTo(count, limit)
}

let result = 1, count = 1;
function exponent(base, exp) {
  if(count > exp) return result;
  result *= base ;
  count++;
  return exponent(base, exp);
}

let fact = 1;
function factorial(f) {
  if(f === 0) return fact;
  fact *= f;
  return factorial(f - 1);
}

let newArr = [];
function recursiveReverse(arr) {
  if(arr.length === 0) return newArr;
  newArr.push(arr.pop());
  recursiveReverse(arr);
}