var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.quantity = 0;

  extend(instance, stackMethods);

  return instance;
};

// push, pop, size

var stackMethods = {
  size: function() {
    return this.quantity;
  },
  push: function(value) {
    this.storage[this.quantity] = value;
    this.quantity += 1;
    return this.quantity;
  },
  pop: function() {
    var temp;

    if (this.quantity === 0) {
      return undefined;
    }

    this.quantity -= 1;
    temp = this.storage[this.quantity];
    delete this.storage[this.quantity];

    return temp;
  }
};

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}
