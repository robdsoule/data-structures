var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  extend(newTree, treeMethods);
  // your code here
  newTree.children = {} ;  // Contains all of our subtrees

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.setParent(this);
  this.children[value] = child;

  return child;
};

treeMethods.removeFromParent = function() {
  delete this.parent.children[this.value]
  this.parent = null;

  return this;
};

treeMethods.traverse = function(cb) {
  cb(this);
  if (Object.keys(this.children).length === 0) {
    return;
  }

  for (var key in this.children) {
    this.traverse.call(this.children[key], cb);
  }

};

treeMethods.setParent = function(parent) {
  this.parent = parent;
};

treeMethods.setValue = function(value) {
  this.value = value;
}

treeMethods.contains = function(target){
  var found = false;

  this.traverse(function(tree) {
    if (tree.value === target) {
      found = true;
      return;
    }
  });

  return found;

  // Before adding traverse
  // var found = false;


  // var find = function(tree) {
  //   if (tree.value === target) {
  //     found = true;
  //     return;
  //   }
  //   for (var key in tree.children) {
  //     find(tree.children[key]);
  //   }
  // }
  // find(this);

  // return found;
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
