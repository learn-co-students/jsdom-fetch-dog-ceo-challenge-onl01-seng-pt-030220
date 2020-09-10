console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//let breedLi = document.getElementById("dog-breeds")



//updating the color when clicking on dog breeds
document.getElementById("dog-breeds").addEventListener("click", (e) => {
    e.target.style.color = "firebrick"
})

document.addEventListener('DOMContentLoaded', function(){
    fetchDogs()
    fetchBreeds()
})

//fetching Dog Breeds
function fetchBreeds(){
    fetch(breedUrl)
        .then(response => response.json())
        .then(json => getBreeds(json.message))
}

function getBreeds(breeds){
    let breedsArray = Object.keys(breeds)

    breedsArray.forEach(breed => {
        renderBreed(breed)    
    })
}

function renderBreed(breed){
    const ulBreeds = document.querySelector("#dog-breeds")
    let li = document.createElement("li")
    li.innerHTML = breed
    ulBreeds.appendChild(li)
}


//fetching Dog Images
function fetchDogs(){
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => getImgs(json.message))      
}

function getImgs(images){
    images.forEach(image => {
        renderImg(image)
    })
}

function renderImg(image){
    const imageContainer = document.querySelector("#dog-image-container")
    let div = document.createElement("div")
    div.innerHTML = `<img src= ${image} />`
    imageContainer.appendChild(div)
}