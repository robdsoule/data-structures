var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size += 1;
    return size;
  };

  someInstance.dequeue = function(){
    var temp;
    if (someInstance.size() === 0) {
      return undefined;
    }
    temp = storage[firstIndex];
    delete storage[firstIndex];

    firstIndex += 1;
    return temp;
  };

  someInstance.size = function(){
    return size - firstIndex;
  };

  return someInstance;
};
