var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.quantity = 0;
};

Stack.prototype.size = function() {
  return this.quantity;
};

Stack.prototype.push = function(val) {
  this.storage[this.quantity] = val;
  this.quantity += 1;
  return this.quantity;
};

Stack.prototype.pop = function() {
  var temp;

  if (this.quantity === 0) {
    return;
  }
  this.quantity -= 1;
  temp = this.storage[this.quantity];
  delete this.storage[this.quantity];

  return temp;
};
