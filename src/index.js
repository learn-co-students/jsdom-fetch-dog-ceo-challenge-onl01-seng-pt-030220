console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogs = [] 

function showDog(){
return fetch(imgUrl)
.then(resp => resp.json())
.then(json => addElementDog(json)); 
};

function addElementDog(json){
    const main = document.getElementById('dog-image-container')
    json["message"].forEach(imgUrl => {
        const image = document.createElement("img") 
        image.src = imgUrl
        main.appendChild(image)
    })
}; 

function showBreed(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then (json => dogBreed(json))
}; 

function dogBreed(json){
const allBreeds = Object.keys(json["message"]) 
const main = document.getElementById("dog-breeds")
    allBreeds.forEach(breed => {
    const doggy = document.createElement("p")
    doggy.innerText = breed
    dogs.push(doggy.innerText)
    main.appendChild(doggy)
    doggy.addEventListener("click", (e) => {
    doggy.style.color = "red"
    })
    })
}


function breeds(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then (json => allBreeds(json))
}

function allBreeds(json){
// dogs.push(Object.keys(json["message"]))
}; 


function filterBreed(){
    const filter = document.getElementById("breed-dropdown") 
    filter.addEventListener("change", (e) => { 
        let selected = e.target.value
        dogs.forEach(dog=> {
            if (dog.startsWith(selected)){
                console.log(dog)}
            })
        })
    }



document.addEventListener('DOMContentLoaded', function(){
    // showDog()
    showBreed()
    filterBreed()
  })