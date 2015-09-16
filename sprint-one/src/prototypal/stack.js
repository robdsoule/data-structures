var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.quantity = 0;

  return instance;
};


var stackMethods = {
  size: function () {
    return this.quantity;
  },
  push: function (value) {
    this.storage[this.quantity] = value;
    this.quantity += 1;

    return this.quantity;
  },
  pop: function () {
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


