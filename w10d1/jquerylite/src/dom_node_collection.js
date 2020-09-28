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

DOMNodeCollection.prototype.append = function(ele) {
    this.HTMLArr.forEach((outerNode) => {
      let outerText = outerNode.innerHTML;

      if (ele instanceof DOMNodeCollection) {
        ele.HTMLArr.forEach((node) => {
          let innerText = node.outerHTML;
          outerText = outerText.concat(innerText);
          outerNode.innerHTML = outerText;
        });
      } else {
        (ele instanceof HTMLElement) ? 
            outerText = outerText.concat(ele.outerHTML) : 
            outerText = outerText.concat(ele)
        outerNode.innerHTML = outerText;
      }
    });  
}

DOMNodeCollection.prototype.attr = function(attrName, attrVal){
    if (attrVal === undefined){
        for (let i = 0; i < this.HTMLArr.length; i++) {
            let el = this.HTMLArr[i]
            let name = el.getAttribute(attrName);   
            if (name !== null) return name;
        }
    } else {
        let eles = this.HTMLArr.filter(el => el.getAttribute(attrName))
        eles.forEach(el => el.setAttribute(attrName, attrVal))
    }
}

DOMNodeCollection.prototype.addClass = function(val) {
    this.HTMLArr.forEach((el) => el.classList.add(val))
}

DOMNodeCollection.prototype.removeClass = function(className){
    this.HTMLArr.forEach((el) => el.classList.remove(className))
}

DOMNodeCollection.prototype.children = function() {
    let allChildren = [];
    this.HTMLArr.forEach((el) => allChildren.push(el.children))
    return new DOMNodeCollection(allChildren[0])
}

DOMNodeCollection.prototype.parent = function() {
    let allparents = [];
    this.HTMLArr.forEach((el) => allparents.push(el.parentNode))
    return new DOMNodeCollection(allparents)
}

DOMNodeCollection.prototype.find = function(selector) {
    let nodes = [];
    this.HTMLArr.forEach(el => {
        nodes.push(el.querySelectorAll(selector))
    })
    return new DOMNodeCollection(nodes[0])
}

DOMNodeCollection.prototype.remove = function(){
    this.HTMLArr.forEach(el => el.remove())
}