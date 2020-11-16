function Queue() {
  let items = []

  this.enqueue = function (element) {
    items.push(element);
  }

  this.dequeue = function () {
    return items.shift();
  }

  this.front = function () {
    return items[0];
  }

  this.isEmpty = function () {
    return items.length == 0;
  }

  this.size = function () {
    return items.length;
  }

  this.print = function () {
    console.log(items.toString());
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.size());
queue.dequeue();
queue.print();