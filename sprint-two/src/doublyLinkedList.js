var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
    } else if (list.tail !== null) {
      list.tail.next = node;
      node.prev = list.tail;
    }
    list.tail = node;
  };

  list.addToHead = function(value) {
    var node = new Node(value);
    if (list.tail === null) {
      list.tail = list.head;
    }
    if (list.head !== null) {
      list.head.prev = node;
      node.next = list.head;
    }
    list.head = node;
  };

  list.removeHead = function(){
    var temp;
    // debugger;
    if (list.head === null) {
      return;
    }
    temp = list.head.value;

    if (list.tail !== list.head) {
      list.head = list.head.next;
      list.head.prev = undefined;
    }
    // debugger;
    return temp;
  };

  list.removeTail = function() {
    var temp;

    if (list.tail === null) {
      return;
    }
    temp = list.tail.value;

    if (list.head !== list.tail) {
      list.tail = list.tail.prev;
      list.tail.next = undefined;
    }

    return temp;
  };

  list.contains = function(target){
    var contains = false;
    var recurContains = function(node) {
      if (node.value === target) {
        contains = true;
        return;
      }
      if (node.next) {
        recurContains(node.next);
      }
    };

    recurContains(list.head);
    return contains;
  };

  return list;
};

var Node = function(value){

  this.value = value;
  this.prev = undefined;
  this.next = undefined;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
  addToTail()  : O(1) because we keep track of the tail node, immediately accessible
  removeHead() : O(1) because we keep track of the head node, immediately accessible
  contains()   : O(n) linearly depends on number of nodes in list, each node hit once until found
 */

