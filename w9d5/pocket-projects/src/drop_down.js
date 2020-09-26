
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  let dogLiTags = [];
  let dogTypes = Object.keys(dogs)

  dogTypes.forEach((breed) => {
    let linkTag = document.createElement("a")
    // <a>"Corgi"</a> 
    linkTag.innerHTML = breed
    linkTag.href = dogs[breed]

    let liTag = document.createElement("li");
    liTag.classList.add("dog-link")
    liTag.append(linkTag)
    
    dogLiTags.push(liTag)
  })

  return dogLiTags;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator(dogs);
  let dropDown = document.querySelector(".drop-down-dog-list")
  dogLinks.forEach((link) => {
    dropDown.appendChild(link)
  })
}

attachDogLinks();


function handleEnter() {
  let listItems = document.querySelectorAll(".dog-link");
  for(let i = 0; i < listItems.length; i ++){
    listItems[i].classList.add("reveal")
  }
}

function handleLeave() {
  let listItems = document.querySelectorAll(".dog-link");
  for(let i = 0; i < listItems.length; i ++){
      listItems[i].classList.remove("reveal")
    }
}
    
// document.addEventListener("DOMContentLoaded", () => {
  const droppy = document.querySelector(".drop-down-dog-nav");
  droppy.addEventListener("mouseenter", handleEnter)
  droppy.addEventListener("mouseleave", handleLeave)
// })
