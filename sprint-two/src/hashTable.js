var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// {
//   hash : {
//     key: {
//       value
//     }
//   }

// }


HashTable.prototype.insert = function(k, v){
  var hash = getIndexBelowMaxForKey(k, this._limit);

  // if (this._storage.get(hash) !== undefined && this._storage.get(hash) !== null) {
  //   //
  // }
    this._storage.set(hash, v);
};

HashTable.prototype.retrieve = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(hash);

  // var existingHash = this._storage[hash];

  // return this._storage[hash][JSON.stringify(k)];
};

HashTable.prototype.remove = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(hash)

  this._storage.set(hash, null);

  return temp;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
