console.log('%c HI', 'color: firebrick')

// CHALLANGE ONE

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// function fetchImages() {
//     return fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(json => renderImages(json));
  
//   }

//   function renderImages(images){
//     //   console.log(images["message"])
//       let allImages = images["message"]
//       console.log(allImages)
//       allImages.forEach(image =>{
//           const div = document.createElement('div')
//           div.innerHTML = `<img src=${image}/>`
//           let main = document.querySelector("div#dog-image-container")
//           main.appendChild(div)
//       })

//   }

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
    console.log("I am here", e.currentTarget)
    currentLi = e.currentTarget
    currentLi.style.color = "blue"
}
// document.getElementsByClassName("the-li").addEventListener("click", function(e){
//     console.log(e)
//     // document.getElementById("demo").innerHTML = "Hello World";
//   });

  document.addEventListener('DOMContentLoaded', function() {
    // fetchImages()
    fetchBreeds()
  })
