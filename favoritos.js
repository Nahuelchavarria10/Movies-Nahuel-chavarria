import { structureCard, showCards, favorit } from "./module/functions.js"



const favoritos = new Set(JSON.parse(localStorage.getItem("colorbtn"))) || new Set();

(fetch(`https://moviestack.onrender.com/api/movies`, {
    headers: {
        "x-api-key": `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`
    }
}).then(response => response.json()
    .then(data => {
        const moviesFavoritas = data.movies.filter(movie => favoritos.has(movie.id))
        const $containerFavs = document.getElementById("containerFavs");
        $containerFavs.innerHTML = showCards(moviesFavoritas)
        const $favoritosButtons = document.querySelectorAll(".corazones")
        $favoritosButtons.forEach((btn) => {
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
                    btn.parentElement.remove()
                }
                localStorage.setItem("colorbtn", JSON.stringify([...favoritos]))
                console.log(favoritos);
            })
        })
    })
))
    .catch(error => console.log(error))