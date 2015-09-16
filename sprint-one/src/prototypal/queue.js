var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.quantity = 0;
  instance.firstIndex = 0;

  return instance;
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
      return;
    }
    temp = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex += 1;

    return temp;
  }
};


