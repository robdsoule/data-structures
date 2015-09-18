var BinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value;

};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value);

  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = newTree;
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = newTree;
    }
  }
  return newTree;
};

BinarySearchTree.prototype.contains = function(value) {

  if (this.value === value) {
    return true;
  }

  if (this.value > value) {
    return (this.left ? this.left.contains(value) : false);
  } else {
    return (this.right ? this.right.contains(value) : false);
  }
  // if (this.value > value) {
  //   return this.left.contains(value);
  // }
  // return this.right.contains(value);

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
    insert()        : O(log(n)), rules out half of the values after each step, but could potentially be up to O(n) because it could be a one sided tree
    contains()      : O(log(n)), rules out half of the values after each step, but could potentially be up to O(n) because it could be a one sided tree
    depthFirstLog() : O(n), has to visit each node once
 */
