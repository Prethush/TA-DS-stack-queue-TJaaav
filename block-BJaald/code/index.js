// class Queue {
//   constructor(capacity = Infinity) {
//     this.storage = [];
//     this.capacity = capacity;
//   }

//   get length() {
//     return this.storage.length;
//   }

//   enqueue(val) {
//     if(this.storage.length === this.capacity) {
//       alert("Queue overflowing");
//     }else {
//       this.storage.push(val);
//       return this.storage.length;
//     }
//   }

//   dequeue() {
//     return this.storage.shift();
//   }

//   peek() {
//     return this.storage[0];
//   }

//   printAll() {
//     this.storage.forEach(c => {
//       console.log(c);
//     });
//   }

//   isEmpty() {
//     return this.storage.length === 0;
//   }
// }

class Queue {
  constructor(capacity = Infinity) {
    this.storage = {};
    this.capacity = capacity;
  }

  get length() {
    return Object.keys(this.storage).length;
  }

  enqueue(val) {
    let lastIndex = Object.keys(this.storage).length;
    if(Object.keys(this.storage).length === this.capacity) {
      alert("Queue overflowing");
    }else {
      this.storage[lastIndex] = val;
      return Object.keys(this.storage).length;
    }
  }
  
  dequeue() {
    let index = Object.keys(this.storage)[0];
    let elm = this.storage[index];
    delete this.storage[index];
    for(let i = 0; i < this.length; i++) {
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.length - 1];
    return elm;
  }

  peek() {
    let firIndex = Object.keys(this.storage)[0];
    return this.storage[firIndex];
  }

  printAll() {
    for(let i in this.storage) {
      // console.log(i, "i");
      console.log(this.storage[i]);
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}