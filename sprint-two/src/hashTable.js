var HashTable = function(){
  this._limit = 8;
  this.counter = 0; // Keeps track of how much data we have inserted into the whole table
  this.bucketSize = 4;

  this._storage = LimitedArray(this._limit);
  this.keys = {}; // key -> hash, keys -> { k, index }

  // key -> hash, value -> storage Index -> [ {key: value}, {key: value}, {key: value}]
  // key -> 0, _.storage[0]        =>           ^
};

HashTable.prototype.resize = function(multiplier) {
  var oldStorage = this._storage;
  this._limit *= multiplier;
  this.keys = {};
  this.counter = 0;
  this._storage = LimitedArray(this._limit);
  var newHashTable = this;

  oldStorage.each(function (val, idx) {
    if (val !== undefined) {
      val.forEach(function(keyObj) {
        if (!keyObj) {
          return;
        }

        var key = Object.keys(keyObj)[0];
        newHashTable.insert(key, keyObj[key]);
      });
    }
  });
};

HashTable.prototype.insert = function(k, v){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var length;
  var obj = {};
  var storedHash = [];
  var containsKey = false;

  // Create a new bucket if it doesn't exist
  if (!this.keys[hash]) {
    this.keys[hash] = hash;
  }

  length = this.keys[hash].length;
  storedHash = this._storage.get(hash); // <-- Bucket array
  obj[k] = v;

  // First item in bucket
  if (!storedHash) {
    storedHash = [];
  }

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

  // Check lengths to extend
  this.counter += 1;
  if ((this.counter / this._limit) >= 0.75) {
    this.resize(2);
  }

  // Check our bucket size to extend
  if ((length / this.bucketSize) >= 0.75) {
    this.resize(2);
  }

};

HashTable.prototype.retrieve = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storedHash = this._storage.get(hash);

  var value = null;

  if (!storedHash) {
    return value;
  }

  storedHash.forEach(function(val) {
    if (val !== null && val.hasOwnProperty(k)) {
      value = val[k];
    }
  });

  return value;
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

  if (temp) {
    this.counter -= 1;
  }

  if ((this.counter / this._limit) < 0.25) {
    this.resize(0.5);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
