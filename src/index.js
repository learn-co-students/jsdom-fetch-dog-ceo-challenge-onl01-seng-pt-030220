console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let type 
let breedList
let fetchedList

document.addEventListener("DOMContentLoaded", () => {
  fetchImages()
  fetchBreed()
  document.getElementById("breed-dropdown").addEventListener("change", findBreedByFirstLetter)
  breedList = document.getElementById("dog-breeds")
})

function fetchImages(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => addImages(json))
}

function addImages(images){
  const imgContainer = document.getElementById("dog-image-container")
  images.message.forEach(image => {
    let img = document.createElement("IMG")
    img.src = image
    imgContainer.appendChild(img)
  })
}

function fetchBreed(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => addBreed(json)) 
}

function addBreed(breeds){
  const breedList= document.getElementById("dog-breeds")

  breedList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI"){
      e.target.style.color = "red"
    }
  })

  fetchedList = Object.keys(breeds.message)
  createLiForBreeds(fetchedList)
}

function createLiForBreeds(breeds){
  console.log(breeds)
  breeds.forEach(breed => {
    let type = document.createElement("LI")
    type.setAttribute('class','breed-list')
    type.innerText = breed
    breedList.appendChild(type)
  })
}

function findBreedByFirstLetter(e){
  const filteredBreeds = fetchedList.filter((breed) => breed[0] === e.target.value)
  breedList.innerHTML = " "
  createLiForBreeds(filteredBreeds)
} 
