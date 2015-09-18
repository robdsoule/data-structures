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
  var bucket = [];
  var containsKey = false;

  // Create a new bucket if it doesn't exist
  if (!this.keys[hash]) {
    this.keys[hash] = hash;
  }

  length = this.keys[hash].length;
  bucket = this._storage.get(hash); // <-- Bucket array
  obj[k] = v;

  // First item in bucket
  if (!bucket) {
    bucket = [];
  }

  // Search if key already exists in bucket
  bucket.forEach(function(val) {
    if (val !== null && val.hasOwnProperty(k)) {
      containsKey = true;
    }
  });

  if (containsKey) {
    return;
  }

  bucket.push(obj);
  this._storage.set(hash, bucket);

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
  var bucket = this._storage.get(hash);

  var value = null;

  if (!bucket) {
    return value;
  }

  bucket.forEach(function(val) {
    if (val !== null && val.hasOwnProperty(k)) {
      value = val[k];
    }
  });

  return value;
};

HashTable.prototype.remove = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(hash);
  var temp;

  if (!bucket) {
    return null;
  }

  bucket.forEach(function(val, ind, arr) {
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

/*
      resize()   : O(n), basically. Has to run through each stored value
      insert()   : O(1), basically. O(1) except for searching through bucket array, which is only at max 4 values
      retrieve() : O(1), basically. O(1) except for searching through bucket array, which is only at max 4 values
      remove()   : O(1), basically. O(1) except for searching through bucket array, which is only at max 4 values

    LimitedArray methods:

      get()  : O(1), accessing array through index
      set()  : O(1), accessing array through index
      each() : O(n), iterates over each value in array once
 */
