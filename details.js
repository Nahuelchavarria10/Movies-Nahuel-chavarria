const $main = document.getElementById("main")
const id = location.search
const movieId = new URLSearchParams(id).get("id")
console.log(location.search);

fetch(`https://moviestack.onrender.com/api/movies`, {
    method: "get",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}).then(response => response.json())
    .then(data=> {
        const movie = data.movies.find((movie) => movie.id == movieId)
        $main.innerHTML = tableWrapper(movie)
        const favoritos = new Set(JSON.parse(localStorage.getItem("colorbtn"))) || [];
        const $favoritosButtons = document.querySelectorAll(".corazones")
        $favoritosButtons.forEach((btn)=>{
            const idSection = btn.closest("article").getAttribute("data-id")
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
    })


function tableWrapper(movie) {
    return `<article data-id ="${movie.id}" class="flex flex-col gap-5 items-center  justify-between md:flex-row md:justify-evenly">
    <div class="relative">
    <button class="corazones absolute place-items-end w-20 h-10 border rounded-md">FAVS</button>
        <img src="https://moviestack.onrender.com/static/${movie.image}" alt="" class="border rounded-xl mt-10 md:h-80 ">
    </div>
    
    <div class=" md:w-1/4">
        <h1 class="text-4xl py-2 font-bold">${movie.title}</h1>
        <h2 class="text-2xl py-2 text-blue-400">${movie.tagline}</h2>
        <h3 class="text-xl py-2 text-green-600">${movie.genres}</h3>
        <p class="text-lg pb-2">${movie.overview}</p>
    </div>
    </article>
    <h3 class="text-2xl py-2 font-semibold"><span class="text-blue-400">Technical</span> Information</h3>
    <article class="flex flex-col w-5/6 gap-3 items-start justify-between md:flex-row md:justify-evenly md:gap-20">

        <table class="border border-white md:w-[20em] xl:w-[30em]">
            <thead class="border border-white">
                <tr class="">
                    <th class="border border-white ">KEY</th>
                    <th class="border border-white ">VALUE</th>
                </tr>
            </thead>
            <tbody class="border border-white">
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">original language</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.original_language}</td>
                </tr>
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl ">release date</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.release_date}</td>
                </tr>
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl ">runtime</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.runtime}</td>
                </tr>
            </tbody>
            <tfoot class="border border-white">
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl ">status</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.status}</td>
                </tr>
            </tfoot>
        </table>

    

        
        <table class="border border-white md:w-[20em] xl:w-[30em] text-center">
            <thead class="border border-white">
                <tr class="">
                    <th class="border border-white ">KEY</th>
                    <th class="border border-white ">KEY</th>
                    
                </tr>
            </thead>
            <tbody class="border border-white">
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">vote average</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.vote_average}</td>
                </tr>
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">budget</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.budget}</td>
                </tr>
            </tbody>
            <tfoot class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">
                <tr class="">
                    <td class="px-5 text-lg font-medium border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">revenue</td>
                    <td class="px-5 text-lg font-medium text-blue-400 border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.revenue}</td>
                </tr>
            </tfoot>
        </table>
    
    
    </article>`
}

