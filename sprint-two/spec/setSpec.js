describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should accept numbers', function() {
    set.add(1);
    set.add(2);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
  });

  it('should accept objects', function() {
    var asdf = {'asdf':'fdsa'};
    var steve = {'steve':'frank'};
    var array = [1,2,3];
    var func = function(value) {
      return value;
    };
    set.add(asdf);
    set.add(steve);
    set.add(array);
    set.add(func);
    expect(set.contains(asdf)).to.equal(true);
    expect(set.contains(steve)).to.equal(true);
    expect(set.contains(array)).to.equal(true);
    expect(set.contains(func)).to.equal(true);
  });

});
