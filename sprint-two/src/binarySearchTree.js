var BinarySearchTree = function(value, depth){
  this.left = null;
  this.right = null;
  this.depth = depth || 0;

  this.value = value;

};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value, this.depth + 1);

  if (this.value > value) {
    if (this.left) {
      return this.left.insert(value);
    } else {
      this.left = newTree;
    }
  } else {
    if (this.right) {
      return this.right.insert(value);
    } else {
      this.right = newTree;
    }
  }
  newTree.parent = this;
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

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value, this);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(callback, depth) {
  depth = (depth + 1) || 0;
  // var levelArray = [];
  if (depth === 0) {
    callback(this)
  }

  // Go through left and right in sync
  if (this.left) {
    callback(this.left);
  }
  if (this.right) {
    callback(this.right);
  }

  // After, traverse in sync as well
  if (this.left) {
    this.left.breadthFirstLog(callback, depth);
  }
  if (this.right) {
    this.right.breadthFirstLog(callback, depth);
  }
};

// Autobalances the tree upon
BinarySearchTree.prototype.autobalance = function() {

};

BinarySearchTree.prototype.rebalance = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
    insert()          : O(log(n)), rules out half of the values after each step, but could potentially be up to O(n) because it could be a one sided tree
    contains()        : O(log(n)), rules out half of the values after each step, but could potentially be up to O(n) because it could be a one sided tree
    depthFirstLog()   : O(n), has to visit each node once
    breadthFirstLog() : O(n), has to visit each node once
    rebalance()       : O(n), has to visit each node at least once
 */
