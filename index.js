
//tengo que repasar la clase de module
/* import { } from "./module/functions.js" */


console.log(movies);
const $containerCards = document.getElementById("containerCards")
const $inputSearchMovies = document.getElementById("inputSearchMovies")


function structureCard(movie) {
    return `<section class= "flex flex-col justify-between items-center w-80  m-2 text-center border-2 border-purple-400 rounded-xl bg-black">
        <img class="object-cover border rounded-xl " src="${movie.image}" alt="">
        <h3 class="text-lg font-medium py-5">${movie.title}</h3>
        <h4 class="text-gray-400 font-medium">${movie.tagline}</h4>
        <p class="text-gray-400 line-clamp-4">${movie.overview}</p>
        <a href="./favs.html?id=${movie.id}"><button class="bg-green-300 w-32 border rounded-md">See more</button></a>
    </section>`
}


function showCards(movies) {
    let containerCard = ""
    movies.forEach((movie)=>{
        containerCard += structureCard(movie)
    })
    return containerCard
}


$containerCards.innerHTML = showCards(movies)


function filterMovies(movies,name) {
return movies.filter((movie)=> movie.title.toLowerCase().includes(name.toLowerCase()))}


$inputSearchMovies.addEventListener("input",function() {
    let foundMovie = filterMovies(movies,$inputSearchMovies.value)
    $containerCards.innerHTML = showCards(foundMovie)
}
)

function filterGenero(movies,option) {
    return movies.filter((movie)=>{
        movie.genero.includes(option)
    })
}

const $genero = document.getElementById("genero")

function filtraroption(movies,option) {
    return movies.filter((movie)=>{
        if (option == `All`) {
            return true
        } else {
            return movie.genres.includes(option)
        }
    })
}

$genero.addEventListener("change",function() {
    let genre = filtraroption(movies,$genero.value)
    $containerCards.innerHTML = showCards(genre)
})