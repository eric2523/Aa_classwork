export class DOMNodeCollection {
    constructor(HTMLEleArr){
        this.HTMLArr = HTMLEleArr;
    }
}

DOMNodeCollection.prototype.html = function(strArg){
    if (strArg !== undefined) {
        this.HTMLArr.forEach (node => node.innerHTML = strArg)
    } else {
        return this.HTMLArr[0].innerHTML;
    }
}

// module.exports = DOMNodeCollection