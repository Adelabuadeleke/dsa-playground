// create stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // PUSH: Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // POP: Removes and returnd the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
}

var kamStack = new Stack();
console.log(kamStack.count);