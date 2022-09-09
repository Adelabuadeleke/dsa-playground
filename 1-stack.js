// create stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // PUSH: Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // POP: Removes and return the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Size: Get number of items in stack
    this.size = function() {
        return this.count;
    }

    // PEEK:Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var fruits = new Stack();
fruits.push('apple');
fruits.push('banana');
fruits.push('coconut');
fruits.push('water melon');
fruits.push('cashew');
console.log(fruits.storage);
console.log(`total number of fruits:${fruits.size()}`);
console.log(fruits.pop());
console.log(fruits.storage);
console.log(`total number of fruits:${fruits.size()}`);
console.log(fruits.peek());