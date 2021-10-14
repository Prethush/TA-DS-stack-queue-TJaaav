function linearSearch(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(value === arr[i]) {
      return i;
    }
  }
  return -1;
}

function binarySearch(arr, value) {
  let lower = 0, upper = arr.length - 1;
  arr.sort((a,b) => a - b);
  console.log("try");
  while(lower <= upper) {
    console.log("try");
    let middle = lower + Math.floor((upper - lower) / 2);
    if(value === arr[middle]) {
      return middle;
    }
    if(value < arr[middle]) {
      upper = middle - 1;
    }else {
      lower = middle + 1;
    }
  }
  return -1;
}