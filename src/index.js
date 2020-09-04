console.log('%c HI', 'color: firebrick')

function addImage(images) {
    const container = document.querySelector("div#dog-image-container")
    images.forEach(image => {
        const img = document.createElement("img")
        img.src = image
        img.height = 100
        img.width = 100
        container.appendChild(img)
    });
}

function addBreed(breeds) {
    const list = document.querySelector("ul#dog-breeds")
    Object.keys(breeds).forEach(function(key){
        if (breeds[key].length != 0) {
            for (let i in breeds[key]) {
                const li = document.createElement("li")
                li.innerText = breeds[key][i] + " " + key
                list.appendChild(li)
            } 
        } else {
            const li = document.createElement("li")
            li.innerText = key
            list.appendChild(li)
        }
    }) 

    const items = document.querySelectorAll('li')
    items.forEach(function(item) {
        item.addEventListener("click", function(e) {
            if (item.style.color == "pink") {
                item.style.color = "black"
            } else {
                item.style.color = "pink"
            }
        })
    })
}

function showSelectedBreeds(breeds, letter) {
    const list = document.querySelector("ul#dog-breeds")
    const items = document.querySelectorAll('li')
        items.forEach(function(item) {
            item.remove()
        })
    Object.keys(breeds).forEach(function(key){
        if (breeds[key].length != 0) {
            for (let i in breeds[key]) {
                const li = document.createElement("li")
                li.innerText = breeds[key][i] + " " + key
                if (li.innerText.startsWith(letter)) {
                    list.appendChild(li)
                }
            } 
        } else {
            const li = document.createElement("li")
            li.innerText = key
            if (li.innerText.startsWith(letter)) {
                list.appendChild(li)
            }
        }
    }) 
}

function resetBreeds(letter) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => showSelectedBreeds(json["message"], letter))
}

function selectBreeds() {
    const selector = document.getElementById('breed-dropdown')
    selector.addEventListener("change", function() {
        const value = selector.value
        resetBreeds(value)
    }) 
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreed(json["message"]))
}

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImage(json["message"]))
}


document.addEventListener("DOMContentLoaded", function(){
    fetchImages()

    fetchBreeds()

    selectBreeds()
});


