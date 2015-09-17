

var Graph = function(){
  this.nodes = {};
  this.edges = {};

  // {
  //   'node1': {
  //     'node2': 'node2'
  //   }
  // }
};

var Node = function(value) {
  this.value = value;
}

Graph.prototype.removeAllEdges = function(node) {
  for (var key in this.edges) {
    delete this.edges[key][node];
  }
  delete this.edges[node];
};

Graph.prototype.addNode = function(node){
  // Create a new node with 'node'
  // Add newly created node to graph
  this.nodes[node] = new Node(node);
  this.edges[node] = {};
  return this.nodes[node];
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  if (this.nodes[node]) {
    delete this.nodes[node];
    this.removeAllEdges(node);
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.edges[fromNode][toNode] || false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.edges[fromNode][toNode] = true;
    this.edges[toNode][fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.edges[fromNode] && this.edges[toNode]) {
    delete this.edges[fromNode][toNode];
    delete this.edges[toNode][fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
    addNode()     : O(1), Directly accesses object using key
    contains()    : O(1), Directly accesses object using key
    removeNode()  : O(1), Directly accesses object using key
    hasEdge()     : O(1), Directly accesses object using key
    addEdge()     : O(1), Directly accesses object using key
    removeEdge()  : O(1), Directly accesses object using key
    forEachNode() : O(n), Iterates over every node
 */

