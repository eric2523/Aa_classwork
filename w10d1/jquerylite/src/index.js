// const DOMNodeCollection = require("dom_node_collection.js")
import {DOMNodeCollection} from "./dom_node_collection.js"

window.$1 = function (arg){
    if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg])
    } else {
        let nodes = document.querySelectorAll(arg);
        let nodeArr = [];
        nodes.forEach(node => nodeArr.push(node))
        return new DOMNodeCollection(nodeArr)
    }
}