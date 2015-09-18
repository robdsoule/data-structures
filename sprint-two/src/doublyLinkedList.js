var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
    } else if (list.tail !== null) {
      node.prev = list.tail;
      list.tail.next = node;
    }
    list.tail = node;

  };

  list.addToHead = function(value) {

  };

  list.removeHead = function(){
    var temp;
    if (list.head === null) {
      return;
    }
    temp = list.head.value;
    list.head = list.head.next;

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
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
  addToTail()  : O(1) because we keep track of the tail node, immediately accessible
  removeHead() : O(1) because we keep track of the head node, immediately accessible
  contains()   : O(n) linearly depends on number of nodes in list, each node hit once until found
 */

