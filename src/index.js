console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreeds = document.querySelector("#dog-breeds")


let breeds = []


function fetchImgs() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImgs(json))
  }
  
function renderImgs(json) {
        i = 0
    while (i < json.message.length) {
        const div = document.querySelector('#dog-image-container')
        let img = document.createElement('img')
        img.src = json.message[i]
        div.appendChild(img)
        i++;
    }
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message)
        listBreeds(breeds)
    })
}

function listBreeds(breeds) {
 breeds.forEach(dog => {
    let li = document.createElement('li')
    let ul = document.querySelector('#dog-breeds')
    ul.appendChild(li);
    li.innerText = dog;
    changeColor(li);
 })   
}

function changeColor(dog) {
    dog.addEventListener('click', () => {
        dog.style.color = 'blue'
    })
}
document.addEventListener('DOMContentLoaded', function() {
    fetchImgs();
    fetchBreeds();
  })

  
  function filteredList(){
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', (e) => {
      let filteredList = breeds.filter(breed => breed.startsWith(e.target.value))
      
      dogBreeds.innerHTML = ""
      listBreeds(filteredList)
  })
  }
  
 
  

//   document.addEventListener('DOMContentLoaded', function() {
    
//   })

  