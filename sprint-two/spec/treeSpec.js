describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(9);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should not have a parent if it is the first node in a tree', function() {
    tree.setValue(4);
    expect(tree.value).to.equal(4);
    expect(tree.parent).to.equal(null);
  });

  it('should add a parent to the tree', function() {
    var child = tree.addChild(5);

    expect(child.parent).to.equal(tree);
    expect(child.parent.value).to.equal(tree.value);
  });

  it('should remove a parent from a child', function() {
    var child = tree.addChild(5);
    expect(child.parent).to.equal(tree);
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(tree.contains(child.value)).to.equal(false);
  });

  it('should return true for a value that the tree contains', function(){
    var child1 = 5;
    tree.addChild(child1);
    expect(tree.contains(child1)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    var child1 = 5;
    tree.addChild(child1);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    var child1 = 5;
    var child2 = 6;
    tree.addChild(child1);
    tree.children[child1].addChild(child2);
    expect(tree.children[child1].children[child2].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    var child1 = 5;
    var child2 = 6;
    tree.addChild(child1);
    tree.addChild(child2);
    tree.children[child1].addChild(7);
    tree.children[child2].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
