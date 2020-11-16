function LinkedList(){
  let Node=function(element){
    this.element=element;
    this.next=null;
  };

  let length=0;
  let head=null;

  this.append=function(element){
    let node=new Node(element),current;
    console.log('append...');
    console.log('head',head);
    if(head===null){
      head=node;
    }else{
      current=node;

      //循环列表 直到找到最后一项
      while(current.next){
        current=current.next;
      }

      // 找到最后一项，将其next赋为node，建立链接
      current.next=node;
    }

    length++; //更新列表的长度
    console.log('current',current);
    if(current && current.next){
      console.log('current.next',current.next);
    }
    
  }
  this.insert=function(position,element){

  }

  this.removeAt=function(position){

  }

  this.remove=function(element){}

  this.indexOf=function(element){

  }
  this.isEmpty=function(){}
  this.size=function(){

  }

  this.print=function(){
    console.log('list----------print');
    console.log('length=',length);
    console.log('head',head);
  }
}

let list=new LinkedList();
list.append(15)
list.append(10);
list.append(6);
list.print();