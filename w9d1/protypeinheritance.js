Function.prototype.inherits = function (child, parent) {
    var Surrogate = function (){};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
                    // new -> looking for and calling some constructor?
                    // so, it does call parent constructor 
                    // *YES* constructor gets called, but it's not available to you
                    // in any kind of straightforward way
    child.prototype.constructor = child;
}

// child.prototype = Object.create(parent.prototype)
// child.prototype.constructor = child;