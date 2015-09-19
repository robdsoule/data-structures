describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", "breadthFirstLog" and "depthFirstLog"', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.breadthFirstLog).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,1,3,4,6]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(node) { array.push(node.value); };

    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5,2,6,1,3,4]);
  });

  it ('should keep track of the depth the node is', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    var depth3 = binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    var depth2 = binarySearchTree.insert(1);
    expect(depth3.depth).to.equal(3);
    expect(depth2.depth).to.equal(2);
  });

  it ('should autobalance a tree when appropriate (AVL)', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.left.value).to.equal(2);
    expect(binarySearchTree.left.left.value).to.equal(1);
    expect(binarySearchTree.left.right.value).to.equal(3);
  });
});
