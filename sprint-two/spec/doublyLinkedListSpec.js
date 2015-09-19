describe('doublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.addToHead).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it ('should designate a previous node on tail when new tail is added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(8);
    expect(linkedList.tail.value).to.equal(8);
    expect(linkedList.tail.prev.value).to.equal(4);
    expect(linkedList.tail.prev.next.value).to.equal(8);
  });

  it ('should assign previous node on former head when new head is added', function () {
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    expect(linkedList.head.value).to.equal(2);
    expect(linkedList.head.next.prev.value).to.equal(2);
  });

  it ('should assign next node on head to old head', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    expect(linkedList.head.value).to.equal(2);
    expect(linkedList.head.next.value).to.equal(3);
  });

  it ('should not connect the tail to the head', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    expect(linkedList.head.value).to.equal(2);
    expect(linkedList.head.next.value).to.equal(3);
    expect(linkedList.head.next.next.value).to.equal(4);
    expect(linkedList.tail.next).to.equal(undefined);
  });

  it ('should not connect the head to the tail', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    expect(linkedList.head.value).to.equal(2);
    expect(linkedList.head.prev).to.equal(undefined);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
