var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // Contains all of our subtrees

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value)
  this.children.push(child);

  return child;
};

treeMethods.contains = function(target){
  var found = false;

  var find = function(tree) {
    if (tree.value === target) {
      found = true;
      return;
    }
    for (var i = 0; i < tree.children.length; i++) {
      find(tree.children[i]);
    }
  }
  find(this);
  return found;
};


var extend = function(obj, obj2) {
  for (var key in obj2) {
    obj[key] = obj2[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
   addChild() : O(1), because we just push the new node to the end of the children array
   contains() : O(log(n)), because we have to traverse each tree branch and its children to search for a value
 */
