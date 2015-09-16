var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = {};
  queueObj.storage = {};
  queueObj.quantity = 0;
  queueObj.firstIndex = 0;
  _.extend(queueObj, queueMethods);

  return queueObj;
};

var queueMethods = {
  size: function() {
    return this.quantity - this.firstIndex;
  },
  enqueue: function(val) {
    this.storage[this.quantity] = val;
    this.quantity += 1;
    return this.size();
  },
  dequeue: function() {
    var temp;

    if (this.size() === 0) {
      return undefined;
    }

    temp = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex += 1;

    return temp;
  }
};
