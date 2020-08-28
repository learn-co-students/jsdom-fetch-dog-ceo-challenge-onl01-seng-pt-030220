// console.log('%c HI', 'color: firebrick')
let breeds = []

// CHALLANGE ONE

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
  
  }

  function renderImages(images){
    //   console.log(images["message"])
      let allImages = images["message"]
    //   console.log(allImages)
      allImages.forEach(image =>{
          const div = document.createElement('div')
          div.innerHTML = `<img src=${image}>`
          let main = document.querySelector("div#dog-image-container")
          main.appendChild(div)
      })

  }

//   CHALLENGE TWO
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
  
  }

  function renderBreeds(images){
      let allBreeds = images["message"]
      // had to google how to iterate over a hash
    //   console.log(allBreeds)
      for(let breed in allBreeds) {
        // console.log(breed);
        breeds.push(breed)
        const ul = document.querySelector("ul#dog-breeds")
        const li = document.createElement('li')
        li.className = "the-li"
        li.innerHTML = `${breed}`
        li.addEventListener("click", function(e){
            //    console.log(e)
               changeColor(e)
            //     // document.getElementById("demo").innerHTML = "Hello World";
           });
        ul.appendChild(li)
    }
  }

// Challenge Three
function changeColor(e){
    // console.log("I am here", e.currentTarget)
    currentLi = e.currentTarget
    currentLi.style.color = "blue"
}



    // function down(){
    //     const dropDown = document.querySelector("#breed-dropdown")
    //     console.log(dropDown)
    //     // dropDown.forEach(select =>{
    //     //     console.log(select)
    //     // });

    //     // dropDown.addEventListener("click", function(e){
    //     //     //    console.log(e)
    //     //        console.log(e)
    //     //     //     // document.getElementById("demo").innerHTML = "Hello World";
    //     //    });
    // }
    // function updateBreedList(breeds) {
    //     // console.log(breeds)
    //     let ul = document.querySelector('#dog-breeds');
    //     // ul.querySelectorAll('*').forEach(n => n.remove());
    //     removeChildren(ul);
    //     breeds.forEach(breed => addBreed(breed));
    //   }

    //   function removeChildren(element) {
    //     let child = element.lastElementChild;
    //     while (child) {
    //       element.removeChild(child);
    //       child = element.lastElementChild;
    //     }
    //   }
      

    // function selectBreedsStartingWith(letter) {
    //     // const breeds = document.querySelectorAll("li#the-li")
    //     console.log(breeds)
    //     updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
    //   }
      
    //   function addBreedSelectListener() {
    //     let breedDropdown = document.querySelector('#breed-dropdown');
    //     breedDropdown.addEventListener('change', function (event) {
    //       selectBreedsStartingWith(event.target.value);
    //     });
    //   }

    //   function addBreed(breed) {
    //     let ul = document.querySelector('#dog-breeds');
    //     let li = document.createElement('li');
    //     li.innerText = breed;
    //     li.style.cursor = 'pointer';
    //     ul.appendChild(li);
    //     li.addEventListener('click', updateColor);
    //   }

    // MEGS SOLUTION
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


