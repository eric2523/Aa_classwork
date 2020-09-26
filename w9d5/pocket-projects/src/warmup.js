const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if (htmlElement.children){
        let childrenArray = Array.from(htmlElement.children);
        childrenArray.forEach((ele) => htmlElement.removeChild(ele))
    }

    const pTag = document.createElement("p")
    pTag.innerHTML = string
    htmlElement.appendChild(pTag)
};

htmlGenerator('Party Time.', partyHeader);
