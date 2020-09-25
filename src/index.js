document.addEventListener("DOMContentLoaded", function(){


  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log(json)
      picsOnDom(json.message)
});
    })

function picsOnDom(doggys) {
const ul = document.getElementById("dog-image-container")
    for (const picture of doggys) {
    let image = document.createElement("img")
    image.src = picture
    ul.appendChild(image)
};

fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response){
  return response.json()
})
.then(function(json){
//console.log(json)
let newjson = Object.keys(json.message)
breedsDom(newjson)
})

function breedsDom(breeds) {
  //challengeFour();
const ulTwo = document.getElementById("dog-breeds")
for (x in breeds) {
  let liTwo = document.createElement("li")
  liTwo.innerHTML = breeds[x]
  ulTwo.appendChild(liTwo)
  liTwo.addEventListener("click", function(event){
    event.target.style.color = "blue";
  })
}
challengeFour(breeds)
}

function challengeFour(breeds) {
  let ulTwo = document.getElementById("dog-breeds")
  let array = []
  let selector = document.getElementById("breed-dropdown")

  selector.addEventListener("change", function(){
      if (selector.value === "a") {
          ulTwo.innerHTML = "";
    for (i = 0; i < breeds.length; i++) {
    if (breeds[i].startsWith("a")) {
      //array.push(breeds[i])
      let newli = document.createElement("li")
      newli.innerHTML = breeds[i]
      ulTwo.appendChild(newli)
    }
   }
 }
 });
 }

 }
