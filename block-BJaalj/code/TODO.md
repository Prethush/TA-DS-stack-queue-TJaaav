## Go through the tasks given below and complete

- Write a function called `linearSearch` which accepts an array and a value. Using the linear search algorithm search for the value. If you find the value return the index of the element otherwise return -1. Olso write teh

```js
function linearSearch(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(value === arr[i]) {
      return i;
    }
  }
  return -1;
}
Time complexity = O(N)
// TEST

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
console.log(linearSearch(list, 66)); // 9
console.log(linearSearch(list, 166)); // -1
console.log(linearSearch(list, 54)); // 8
```

- Write a function called `binarySearch` which accepts an array and a value. Using the binary search algorithm search for the value. If you find the value return the index of the element otherwise return -1. Make sure to use the binary search algorithm.

```js
function binarySearch(arr, value) {
  let lower = 0,
    upper = arr.length - 1;
  arr.sort((a, b) => a - b);
  console.log(arr);
  while (lower <= upper) {
    let middle = lower + Math.floor((upper - lower) / 2);
    if (value === arr[middle]) {
      return middle;
    }
    if (value < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
}

// TEST

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
console.log(binarySearch(list, 66)); // 9
console.log(binarySearch(list, 166)); // -1
console.log(binarySearch(list, 54)); // 8
```

- Compare the worst case complexity (Big O Notation) of linear search and binary search. Compare linear search and binary search
  //the worst case complexity of linear search looping through all the elements in the array and not finding the value ie O(N)
  //the worst case complexity in binary search is k = log2(N)

- Assume you have a list of `240,000` items and we want to search for a particular value. In the worst case situation how many times we will run the loop in the case of binary search algorithm and linear search algorithm.
  //In case of linear search 240000 times
  In case of binary search log2 240000 18 times
