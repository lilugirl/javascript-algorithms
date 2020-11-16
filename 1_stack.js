const items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    let s = items.get(this);
    s.push(element);
  }
  pop() {
    let s = items.get(this);
    let r = s.pop();
    return r;
  }
  isEmpty() {
    let s = items.get(this);
    return s.length == 0;
  }

  size() {
    let s = items.get(this);
    return s.length;
  }

  clear() {
    let s = items.get(this);
    s = [];
  }

  print() {
    let s = items.get(this);
    console.log(s.toString());
  }

}

let stack = new Stack();
stack.push(5);
stack.push(6);
stack.print();
let objectSymbols = Object.getOwnPropertySymbols(stack);

console.log(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1);
stack.print();