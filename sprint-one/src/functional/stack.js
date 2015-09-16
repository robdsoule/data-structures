var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size += 1;
    return size;
  };

  someInstance.pop = function(){
    var temp;

    if (size === 0) {
      return undefined;
    }
    size -= 1;
    temp = storage[size];

    delete storage[size];

    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
