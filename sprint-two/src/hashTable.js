var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.keys = {};
};

HashTable.prototype.insert = function(k, v){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var stored = this._storage.get(hash);
  // TODO store k in keys and have pointer to _storage index
  if (!stored) {
    stored = {};
    stored[k] = v;
    this._storage.set(hash, stored);
  } else {
    stored[k] = v;
    this._storage.set(hash, stored);
  }
};

HashTable.prototype.retrieve = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var stored = this._storage.get(hash);

  return stored[k];
};

HashTable.prototype.remove = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var stored = this._storage.get(hash)
  var temp = stored[k];

  stored[k] = null;

  return temp;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
