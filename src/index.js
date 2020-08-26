console.log('%c HI', 'color: firebrick')

let breeds = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json))
}

function renderImages(json) {
  const main = document.getElementById('dog-image-container')
  json["message"].forEach(imgUrl => {
    const img = document.createElement('img')
    img.src = imgUrl
    main.appendChild(img)
  })
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    breeds = Object.keys(json.message);
    breeds.forEach( (breed) => renderBreeds(breed));
});
}

function renderBreeds(breed) {
  let ul = document.getElementById('dog-breeds');
  let li = document.createElement('li')
  ul.appendChild(li);
  li.innerText = breed;

  li.addEventListener('click', () => {
    li.style.color = "chartreuse"
  })
}

let filter = document.querySelector('#breed-dropdown');

filter.addEventListener('change', () => {
  let selected = filter.value;
  let filteredBreeds = breeds.filter(breed => {
    return breed[0] === selected
  });
  let ul = document.querySelector('#dog-breeds');
  ul.innerHTML = "";
  filteredBreeds.forEach((el) => renderBreeds(el));
});


document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})