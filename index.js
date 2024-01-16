
//tengo que repasar la clase de module
/* import { } from "./module/functions.js" */



const $containerCards = document.getElementById("containerCards")
const $inputSearchMovies = document.getElementById("inputSearchMovies")

const favoritos = new Set(JSON.parse(localStorage.getItem("colorbtn")))

fetch(`https://moviestack.onrender.com/api/movies`, {
    method: "get",
    headers: {
        "x-api-key": `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`
    }
}).then(response => response.json()
    .then(data=>{
        $containerCards.innerHTML = showCards(data.movies)
        favorit()
    } ))
    .catch(error => console.log(error))

function structureCard(movie) {
    return `<section data-id= "${movie.id}" class= "flex flex-col justify-between items-center w-80  m-2 text-center border-2 border-purple-400 rounded-xl bg-black relative">
    <img class="object-cover border rounded-xl " src="https://moviestack.onrender.com/static/${movie.image}" alt="">
    <h3 class="text-lg font-medium py-5">${movie.title}</h3>
    <h4 class="text-gray-400 font-medium">${movie.tagline}</h4>
    <p class="text-gray-400 line-clamp-4">${movie.overview}</p>
    <a href="./details.html?id=${movie.id}"><button class="bg-green-300 w-32 border rounded-md">See more</button></a>
    <button class="corazones bg-gray-700 absolute right-5 place-items-end w-10 h-10 border rounded-md">FAVS</button>
    </section>`
}


function showCards(movies) {
    let containerCard = ""
    movies.forEach((movie) => {
        containerCard += structureCard(movie)
    })
    return containerCard
}


function filterMovies(movies, name) {
    return movies.filter((movie) => movie.title.toLowerCase().includes(name.toLowerCase()))
}


$inputSearchMovies.addEventListener("input", () => {
    fetch(`https://moviestack.onrender.com/api/movies`, {
        method: "get",
        headers: {
            "x-api-key": `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`
        }
    }).then(response => response.json())
        .then(data => {
            const comparation = fusionFilter(filterMovies(data.movies, $inputSearchMovies.value), filtrarOption(data.movies, $genero.value))
            $containerCards.innerHTML = showCards(comparation)
            favorit()
        })
}
)


const $genero = document.getElementById("genero")

function filtrarOption(movies, option) {
    return movies.filter((movie) => {
        if (option == `All`) {
            return true
        } else {
            return movie.genres.includes(option)
        }
    })
}

function fusionFilter(filterMovies, filtrarOption) {
    return filtrarOption.filter((movie) => filterMovies.includes(movie))
}


$genero.addEventListener("change", () => {
    fetch(`https://moviestack.onrender.com/api/movies`, {
        method: "get",
        headers: {
            "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
        }
    }).then(response => response.json())
        .then(data => {
            const comparation = fusionFilter(filterMovies(data.movies, $inputSearchMovies.value), filtrarOption(data.movies, $genero.value))
            $containerCards.innerHTML = showCards(comparation)
            favorit()
        })
})



function favorit() {
    const favoritos = new Set(JSON.parse(localStorage.getItem("colorbtn"))) || [];
    const $favoritosButtons = document.querySelectorAll(".corazones")
    $favoritosButtons.forEach((btn)=>{
        const idSection = btn.closest("section").getAttribute("data-id")
        const isFavorita = favoritos.has(idSection)
        if (isFavorita) {
            btn.classList.add("bg-red-300")
        }
        btn.addEventListener("click", () => {
            
            btn.classList.toggle("bg-red-300")
            
            if (btn.classList.contains("bg-red-300")) {
                favoritos.add(idSection)
            } else {
                favoritos.delete(idSection)
            }
            localStorage.setItem("colorbtn",JSON.stringify([...favoritos]))
        })
    })
}