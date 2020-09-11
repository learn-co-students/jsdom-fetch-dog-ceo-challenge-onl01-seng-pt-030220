console.log('%c HI', 'color: firebrick')
// fetch images from imgUrl
//parse response as JSON
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    // .then(json => console.log(json)); 
    .then(json => renderImages(json));
}

//add image elements to the DOM for each image in the array
//<div id="dog-image-container">
function renderImages(images) {
    const imageContainer = document.querySelector('#dog-image-container')
    
    for (let i = 0; i < images.message.length; i++) {
        let image = document.createElement('img');
        image.src = images['message'][i];
        imageContainer.appendChild(image);
    }

}


// fetch breeds from breedUrl
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let allBreeds = []

function fetchBreeds() {
    fetch(breedUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data); // object hash key= data.message
        Object.keys(data.message).forEach(breed => {
            allBreeds.push(breed);
            addBreeds(breed)
        })
    })
}
// add breeds to page <ul id="dog-breeds">
function addBreeds(breed) {
    const ul = document.querySelector("#dog-breeds");
    let li = document.createElement('li');
    li.innerHTML = breed;
    ul.appendChild(li);
    // <li> breed font color changes on click
    li.addEventListener("click", function(){
        li.style.color = '#EEC2FF';
    });

}


// breeds drop down filter by letter (remove ul and recreate)
// <select id="breed-dropdown" name="select-breed">
function filterBreeds() {
    const ul = document.querySelector("#dog-breeds");
    let filter = document.querySelector("#breed-dropdown");
    filter.addEventListener('change', function(e) {
        ul.remove();
        newList = document.createElement('ul') // new ul (ul parent is <body>)
        newList.id = "dog-breeds";
        document.querySelector('body').appendChild(newList);
        let filterLetter = e.target.value;
        console.log(allBreeds);
        newBreedsList = allBreeds.filter(breed => breed.startsWith(filterLetter));
        newBreedsList.forEach(breed => addBreeds(breed));
    })
} //works for the first filter, but then adds to the existing filter but doesn't clear the first filter?

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    filterBreeds()
})