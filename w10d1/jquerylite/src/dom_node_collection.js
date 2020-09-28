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

DOMNodeCollection.prototype.empty = function(){
    this.html("")
}

//append
// can accept DOMNodeCollection, HTMLEle, or string
DOMNodeCollection.prototype.append = function(ele) {
    //if given domnodecollection, append all eles in args to outer els 
    if (ele instanceof DOMNodeCollection) {
        let that = this;
        ele.HTMLArr.forEach((node) => {
            that.HTMLArr.forEach((outerNode) => {
                let outerNodeInnerText = outerNode.innerHTML
                let nodeHTMLText = node.outerHTML
                outerNode.innerHTML = outerNodeInnerText.concat(nodeHTMLText)
            })  

        })
    }

    


}