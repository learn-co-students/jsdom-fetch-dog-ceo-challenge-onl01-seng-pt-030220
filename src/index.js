const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  const dogBreedUl = document.getElementById("dog-breeds") 
  const dogBreedFilter = document.querySelector('#breed-dropdown')

  let dogBreeds = []

  function fetchDogImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogImages(json["message"]))
  }

  function renderDogImages(images){
    const div = document.getElementById("dog-image-container")
    images.forEach(images => {
      let imgTag = document.createElement('img')
      imgTag.src = images
      imgTag.width = "280"
      imgTag.height = "280"
      div.appendChild(imgTag);
    })
  }


  function fetchDogBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      dogBreeds = Object.keys(json['message'])
      renderDogBreeds(dogBreeds)
    })
  }

  function renderDogBreeds(breeds){
    breeds.forEach(breed => {
      let li = document.createElement("li")
      li.innerHTML = breed;
      dogBreedUl.appendChild(li)
      changeTextColor(li)
    })
  }

  
  function changeTextColor(liTag){

    liTag.addEventListener('click', (li) => {
      li.preventDefault() 
      li.target.style.color = 'red' })
  }



  dogBreedFilter.addEventListener('change', (e) => {
    let select = e.target.value
    let selectedBreeds = dogBreeds.filter(breed => breed.startsWith(select))
    dogBreedUl.innerHTML = ""
    renderDogBreeds(selectedBreeds)
  })


  fetchDogImages();
  fetchDogBreeds();


});