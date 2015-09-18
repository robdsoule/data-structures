var HashTable = function(){
  this._limit = 8;

  this.bucketSize = 4;

  this._storage = LimitedArray(this._limit);
  this.keys = {}; // key -> hash, keys -> { k, index }

  // key -> hash, value -> storage Index -> [ {key: value}, {key: value}, {key: value}]
  // key -> 0, _.storage[0] => ^


};

HashTable.prototype.insert = function(k, v){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var length;
  var obj = {};
  var storedHash = [];
  var containsKey = false;

  if (!this.keys[hash]) {
    this.keys[hash] = hash;
  }

  length = this.keys[hash].length;

  // Check lengths to extend
  if ((length / this.bucketSize) > 0.7) {
    // We need to extend
  }

  storedHash = this._storage.get(hash); // <-- Bucket array
  obj[k] = v;

  // First item in bucket
  if (!storedHash) {
    //this._storage.set(hash, []);
    storedHash = [];
  }

  // val => obj { key: value }

  // Search if key already exists in bucket
  storedHash.forEach(function(val) {
    if (val !== null && val.hasOwnProperty(k)) {
      containsKey = true;
    }
  });


  if (containsKey) {
    return;
  }

  storedHash.push(obj);

  this._storage.set(hash, storedHash);

//  this.keys[hash].push(obj);


  // inserting into this.keys
  // inserting into a bucket array of 4 max


  // OLD WORKING STUFF

  // var hash = getIndexBelowMaxForKey(k, this._limit);
  // var stored = this._storage.get(hash);
  // // TODO store k in keys and have pointer to _storage index
  // if (!stored) {
  //   stored = {};
  //   stored[k] = v;
  //   this._storage.set(hash, stored);
  // } else {
  //   stored[k] = v;
  //   this._storage.set(hash, stored);
  // }
};

HashTable.prototype.retrieve = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storedHash = this._storage.get(hash);

  var value = null;

  // debugger;

  if (!storedHash) {
    return value;
  }

  storedHash.forEach(function(val) {
    if (val !== null && val.hasOwnProperty(k)) {
      // debugger;
      value = val[k];
    }
  });
  // debugger;

  return value;


  // OLD WORKING STUFF

  // var hash = getIndexBelowMaxForKey(k, this._limit);
  // var stored = this._storage.get(hash);

  // return stored[k];
};

HashTable.prototype.remove = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storedHash = this._storage.get(hash);
  var temp;

  if (!storedHash) {
    return null;
  }

  storedHash.forEach(function(val, ind, arr) {
    if (val !== null && val.hasOwnProperty(k)) {
      temp = val[k];
      arr[ind] = null;
    }
  });

  // OLD WORKING STUFF

  // var hash = getIndexBelowMaxForKey(k, this._limit);
  // var stored = this._storage.get(hash)
  // var temp = stored[k];

  // stored[k] = null;

  // return temp;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
