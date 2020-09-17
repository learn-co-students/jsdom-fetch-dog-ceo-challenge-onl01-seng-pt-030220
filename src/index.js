const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images){
  const main = document.querySelector('body');
  images.message.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    main.appendChild(img);
  })
}


function getBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(breeds){
  object = breeds.message
  const main = document.querySelector('body');

  for (const breed in object){
    if(object[breed]!= 0) {
      const list = document.createElement('li');
      main.appendChild(list);
      object[breed].forEach(b =>{
          const text = document.createElement('ul');
          text.innerHTML = b;
          list.appendChild(text);
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  getImages();
  getBreeds();
})
