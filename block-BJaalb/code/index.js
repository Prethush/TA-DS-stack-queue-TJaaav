// class Stack {
//   constructor(capacity = Infinity) {
//     this.storage = [];
//     this.capacity = capacity;
//   }
//   get length() {
//     return this.storage.length;
//   }

//   add(num) {
//     if(this.storage.length === this.capacity) {
//       alert("Stack overflow");
//     }else {
//       this.storage.push(num);
//        return this.storage.length;
//     }
    
//   }

//   remove() {
//     return this.storage.pop();
//   }

//   peek() {
//     return this.storage[this.length - 1];
//   }

//   printAll() {
//     for(let i = this.length - 1; i >= 0; i--) {
//       console.log(this.storage[i]);
//     } 
//   }

//   isEmpty() {
//     return this.storage.length === 0 ? true : false;
//   }

// }

// const stack = new Stack();
// const stack2 = new Stack(4);

class Stack {
  constructor(capacity = Infinity) {
    this.storage = {},
    this.capacity = capacity;
  }

  get length() {
    return Object.keys(this.storage).length;
  }

  add(value) {
    let lastIndex = this.length;
    if(this.length === this.capacity) {
      alert("Stack overflowing");
    }else {
      this.storage[lastIndex] = value;
      return Object.keys(this.storage).length;
    }
  }

  remove() {
    let elm = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    return elm;
  }

  peek() {
    return this.storage[this.length - 1];
  }

  printAll() {
   for(let i = this.length; i >= 0; i--) {
     console.log(this.storage[i]);
   }
  }

  isEmpty() {
    return Object.keys(this.storage).length === 0 ? true : false;
  }
}

// const stack = new Stack();
const stack2 = new Stack(4);
