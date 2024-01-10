const id = location.search
const movieId = new URLSearchParams(id).get("id")
const movie = movies.find((movie) => movie.id == movieId)

const $main = document.getElementById("main")
function tableWrapper(movies) {
    return `<article class="flex flex-col gap-5 items-center  justify-between md:flex-row md:justify-evenly">
    <div class="">
        <img src="${movie.image}" alt="" class="border rounded-xl mt-10 md:h-80 ">
    </div>
    
    <div class=" md:w-1/4">
        <h1 class="">${movie.title}</h1>
        <h2>${movie.tagline}</h2>
        <h3>${movie.genres}</h3>
        <p>${movie.overview}</p>
    </div>
    </article>
    
    <article class="flex flex-col gap-5 items-center justify-between md:flex-row md:justify-evenly md:gap-20">

        <table class="border border-white md:w-[20em] xl:w-[30em] text-center">
            <thead class="border border-white">
                <tr class="">
                    <th class="border border-white ">KEY</th>
                    <th class="border border-white ">VALUE</th>
                </tr>
            </thead>
            <tbody class="border border-white">
                <tr class="">
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">original language</td>
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.original_language}</td>
                </tr>
                <tr class="">
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl ">release date</td>
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.release_date}</td>
                </tr>
                <tr class="">
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl ">runtime</td>
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.runtime}</td>
                </tr>
            </tbody>
            <tfoot class="border border-white">
                <tr class="">
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl ">status</td>
                    <td class="border border-whit xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.status}</td>
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
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">vote average</td>
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.vote_average}</td>
                </tr>
                <tr class="">
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">budget</td>
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.budget}</td>
                </tr>
            </tbody>
            <tfoot class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">
                <tr class="">
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">revenue</td>
                    <td class="border border-white xl:py-3 xl:text-2xl md:py-2 md:text-xl">${movie.revenue}</td>
                </tr>
            </tfoot>
        </table>
    
    
    </article>`
}



$main.innerHTML = tableWrapper(movies)