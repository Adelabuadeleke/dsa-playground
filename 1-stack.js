// create stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // PUSH: Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
}

var kamStack = new Stack();
console.log(kamStack.count);