console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
  
  }

  function renderImages(images){
    //   console.log(images["message"])
      let allImages = images["message"]
      console.log(allImages)
      allImages.forEach(image =>{
          const h2 = document.createElement('h2')
          h2.innerHTML = `<img src=${image}>`
          let main = document.querySelector("div#dog-image-container")
          main.appendChild(h2)
      })

  }

  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
