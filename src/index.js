const imgUrl = "https://dog.ceo/api/breeds/image/random/6"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {

    ///first challange
    function fetchDogs() {
        fetch(imgUrl).then(resp => resp.json()).then(json => renderImages(json["message"]))

    }

    function renderImages(images) {

        const divTag = document.getElementById("dog-image-container")

        images.forEach(element => {

            const imgaeTag = document.createElement("img")
            imgaeTag.src = element
            divTag.append(imgaeTag)
        });

    }

    fetchDogs()

    fetch(breedUrl).then(resp => resp.json()).then(json => aa(json["message"]))

    function aa(list) {
        const dropDown = document.getElementById("breed-dropdown")



        dropDown.addEventListener("change", (e) => {
            const ulTag = document.getElementById("dog-breeds")
            const ilTag = document.createElement("li")

            if (dropDown.value != "all") {
                let output = dropDown.value;
                ulTag.innerHTML = ""

                for (const el in list) {

                    if (output == el.charAt(0)) {

                        const ilTag = document.createElement("li")
                        ilTag.innerHTML = el
                        ulTag.append(ilTag)
                        changeColor(ilTag)
                            //ulTag.innerHTML += `<li>${el}!</li>`
                    }
                }

            } else {
                ulTag.innerHTML = ""
                for (const ele in list) {
                    const ilTag = document.createElement("li")
                    ilTag.innerHTML = ele
                    ulTag.append(ilTag)
                    changeColor(ilTag)

                }


            }

        })

    }

    //third challange 

    function changeColor(litag) {

        litag.addEventListener("click", function(e) {
            e.preventDefault()
            e.target.style.color = "blue"
                // litag.style.color = "red"
        })

    }
})