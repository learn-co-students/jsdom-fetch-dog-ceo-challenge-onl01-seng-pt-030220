console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogsContainer =  document.querySelector("#dog-image-container")
const dogBreeds = document.querySelector("#dog-breeds")
const breedFilter = document.querySelector("#breed-dropdown")

let breeds = [];

function fetchImages(){
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message))
}

function renderImages(json){
  json.forEach(imgUrl => {
    const img = document.createElement('img')
    img.src = imgUrl
    dogsContainer.appendChild(img)
  })
}

function fetchBreeds(){
  fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
      // breeds = json.message
      breeds = Object.keys(json.message)
      renderDogs(breeds)
    })
}

function renderDogs(dogs){
  // for (dog in dogs){
  //   let dogName = document.createElement('li')
  //   changeColor(dogName)
  //   dogName.textContent = dog
  //   dogBreeds.appendChild(dogName)
  // }
  dogs.forEach(dog => {
    let li = document.createElement('li')
    dogBreeds.appendChild(li);
    li.innerText = dog;
    changeColor(li)
})
}
// https://www.w3schools.com/js/js_json_objects.asp
//need to research Oject.keys only way to get filter with array to work
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

function changeColor(dogName){
  dogName.addEventListener("click", () =>{
    dogName.style.color = "purple"
  })
}

breedFilter.addEventListener("change", (e) =>{
  // alert(e.target.value)
  // console.log(breedFilter.value)
  let selected = e.target.value
  // console.log(breeds)
  let filtered = breeds.filter(breed => breed.startsWith(selected)) //https://stackoverflow.com/questions/50030338/combine-filter-and-startswith-to-filter-array
  // console.log(filtered)
  dogBreeds.innerHTML = ""
  renderDogs(filtered)
})


document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})




















// let breeds = [];
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// function fetchImages() {
//   fetch(imgUrl)
//   .then(resp => resp.json())
//   .then(json => renderImages(json))
// }

// function renderImages(json) {
//   const main = document.getElementById('dog-image-container')
//   json["message"].forEach(imgUrl => {
//     const img = document.createElement('img')
//     img.src = imgUrl
//     main.appendChild(img)
//   })
// }

// function fetchBreeds() {
//   fetch(breedUrl)
//   .then(resp => resp.json())
//   .then(json => {
//     breeds = Object.keys(json["message"]);
//     breeds.forEach( (breed) => renderBreeds(breed));
// });
// }

// function renderBreeds(breed) {
//   let ul = document.getElementById('dog-breeds');
//   let li = document.createElement('li')
//   ul.appendChild(li);
//   li.innerText = breed;

//   li.addEventListener('click', () => {
//     li.style.color = "chartreuse"
//   })
// }

// let filter = document.querySelector('#breed-dropdown');


// filter.addEventListener('change', () => {
//   let selected = filter.value;
//   let filteredBreeds = breeds.filter(breed => {
//     return breed[0] === selected
//   });
//   let ul = document.querySelector('#dog-breeds');
//   ul.innerHTML = "";
//   filteredBreeds.forEach((breed) => renderBreeds(breed));
// });


// document.addEventListener('DOMContentLoaded', function() {
//   fetchImages()
//   fetchBreeds()
// })