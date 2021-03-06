function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

function LinkedList(){
  this.num_elements = 0;
  this.head = null;
  this.tail = null;

  this.insert = function(node){
    if (this.head == null){
      this.head = node;
      this.tail = node;
    }else{
      node.next = this.head;
      this.head.prev = node;

      this.head = node;
    }
    this.num_elements += 1 ;
  };

  this.size = function(){
    return this.num_elements;
  };

  this.to_s = function(){
    var tmp = this.head;
    var result = "";
    while(tmp != null){
      result += tmp.value + ", ";
      tmp = tmp.next;
    }
    result = result.substring(0, result.length-2);
    return result;
  };

  this.search = function(val){
    var tmp = this.head;
    var result = null;
    while(tmp != null){
      if(tmp.value == val){
        result= tmp;
        break;
      }
      tmp = tmp.next;
    }
    return result;
  };

  this.remove = function(node){
    var tmp = this.head;
    var result = null;

    while(tmp != null){
      if(tmp.value == node.value){
        result= tmp;

        if (tmp.next != null) {
          tmp.next.prev = tmp.prev;

        }

        if (tmp.prev != null) {
          tmp.prev.next = tmp.next;
        } else{
          this.head = tmp.next;
        }
        this.num_elements -= 1;
        break;
      }
      tmp = tmp.next;
    }
    return result;
  };
}

