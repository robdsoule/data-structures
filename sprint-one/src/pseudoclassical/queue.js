var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.quantity = 0;
  this.firstIndex = 0;
};

Queue.prototype.size = function() {
  return this.quantity - this.firstIndex;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.quantity] = val;
  this.quantity += 1;

  return this.size();
};

Queue.prototype.dequeue = function() {
  var temp;
  if (this.size() === 0) {
    return;
  }
  temp = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.firstIndex += 1;

  return temp;
};
