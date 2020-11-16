let Queue = (function () {
  const items = new WeakMap();
  class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }

    front() {
      let q = items.get(this);
      return q[0];
    }
    isEmpty() {
      let q = items.get(this);
      return q.length == 0;
    }

    size() {
      let q = items.get(this);
      return q.length;
    }

    print() {
      let q = items.get(this);
      console.log('q',q);
     
    }


  }

  return Queue;
})()


function hotPotato(nameList, num) {
  let queue = new Queue();
  for (let i = 0; i < nameList.length; i++){
    console.log('going to push');
    queue.enqueue(nameList[i]);
  }

 

  let eliminated='';
  while(queue.size()>1){
    for(let i=0;i<num;i++){
      console.log('--------------进入for循环 i',i);
      
      let a=queue.dequeue();
      console.log(a,'从队列中剔除');
      queue.enqueue(a);
      console.log(a,'又加入队列');
      queue.print();
    }

    eliminated=queue.dequeue();
    console.log(eliminated+'在击鼓传花游戏中被淘汰');
  }

  return queue.dequeue();
}

let names=['Jhon','Jack','Camila','Ingrid','Carl'];
let winner=hotPotato(names,7);
console.log('The winner is '+winner);