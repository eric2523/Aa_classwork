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