/* Sets */ 
function mySet() {
    // the  var collection will hold the set
    var collection = [];
    // this method will chck for presence of an element and return true
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    // this  method will return all the values in a set
    this.values = function() {
        return collection;
    }
    // this method will add an element to the set


}