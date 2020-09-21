
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

let breeds = []

function fetchImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json.message))
}

function renderImages(images) {
    images.forEach(imgUrl => {
        const dogImage = document.querySelector("#dog-image-container")
        const img = document.createElement('img')
        img.src = imgUrl
        dogImage.appendChild(img)
    })
}

function fetchDogBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message)
            renderBreeds(breeds)

        })
        .catch(err => console.log('err:', err))
}

function renderBreeds(breeds) {
    const dogList = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        let li = document.createElement('li')
        dogList.appendChild(li)
        li.innerText = breed
        changeColor(li)
    })
}

function changeColor(breed) {
    breed.addEventListener("click", function(e) {
        breed.style.color = "red"
    })
}


let dogSelect = document.getElementById("dog-breeds")
let breedDropDown = document.getElementById("breed-dropdown")
breedDropDown.addEventListener("change", (e) => {
    let letter = e.target.value
    let filter = breeds.filter(breed => breed.startsWith(letter))
    dogSelect.innerHTML = ""
    renderBreeds(filter)
})

// let dogList = document.getElementById("dog-breeds")
// let breedDropDown = document.getElementById("breed-dropdown")
// breedDropDown.addEventListener("change", function(e) {
//     let letter = e.target.value
//     let filter = breeds.filter(breed => breed.startsWith(letter))
//     dogList.innerHTML = ""
//     renderBreeds(filter)
// })

document.addEventListener('DOMContentLoaded', function() {
   fetchImages();
   fetchDogBreeds()
})