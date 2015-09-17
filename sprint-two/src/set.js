var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item){
  return this._storage[JSON.stringify(item)] !== undefined || false;
};

setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
    add()      : O(1), Directly accesses object using keys
    contains() : O(1), Directly accesses object using keys
    remove()   : O(1), Directly accesses object using keys
 */
