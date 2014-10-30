function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
  this.count = 0;

  this.insertHelper = function(node,val){
    if(node.value > val){
      if (node.left == null) {
        node.left = new Node(val);
        this.count += 1;
      }else{
        this.insertHelper(node.left ,val);
      }
    } else if (node.value < val) {
      if (node.right == null){
        node.right = new Node(val);
        this.count += 1;
      }else{
        this.insertHelper(node.right ,val);
      }
    } else{
      return;
    }
  };

  this.insert = function(val){
    if (this.root == null){
      this.root = new Node(val);
      this.count += 1;
    }else{
      this.insertHelper(this.root , val);
    }
  };

  this.inorder_traverse = function(){
    return this.inorder_traverseHelper(this.root);
  };

  this.inorder_traverseHelper = function(node){
    if (node == null){
      return [];
    }
    return this.inorder_traverseHelper(node.left).concat(node.value).concat(this.inorder_traverseHelper(node.right));
  };

  this.postorder_traverse = function(){
    return this.postorder_traverseHelper(this.root);
  };

  this.postorder_traverseHelper = function(node){
    if (node == null){
      return [];
    }
    return this.postorder_traverseHelper(node.left).concat(this.postorder_traverseHelper(node.right)).concat(node.value);
  };

  this.preorder_traverse = function(){
    return this.preorder_traverseHelper(this.root);
  };

  this.preorder_traverseHelper = function(node){
    if (node == null){
      return [];
    }
    return [node.value].concat(this.preorder_traverseHelper(node.left)).concat(this.preorder_traverseHelper(node.right));
  };

  this.breadth_first_traverse = function(){


  };

  this.containsHelper = function(node, val){
    if (node == null){
      return false;
    }

    if (node.value === val){
      return true;
    }

    return this.containsHelper(node.left, val) || this.containsHelper(node.right, val);
  };

  this.contains = function(val){
    return this.containsHelper(this.root, val);
  };

  this.size = function(){
    return this.count;
  };

  this.depthHelper = function(node){
    if(node == null){
      return 0;
    }

    var left = this.depthHelper(node.left) + 1;
    var right = this.depthHelper(node.right) + 1;

    return Math.max(left,right);
  };

  this.depth = function(){
    return this.depthHelper(this.root);
  };

  this.balance = function(){
    if (this.count < 2)
    {
      return 0;
    } else {
      return this.depthHelper(this.root.left) - this.depthHelper(this.root.right);
    }
  };
}



