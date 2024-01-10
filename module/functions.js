export function structureCard(movie) {
    return `<section class= "flex flex-col justify-between items-center w-80  m-2 text-center border-2 border-purple-400 rounded-xl bg-black">
        <img class="object-cover border rounded-xl " src="${movie.image}" alt="">
        <h3 class="text-lg font-medium py-5">${movie.title}</h3>
        <h4 class="text-gray-400 font-medium">${movie.tagline}</h4>
        <p class="text-gray-400 line-clamp-4">${movie.overview}</p>
        <a href="./favs.html?id=${movie.id}"><button class="bg-green-300 w-32 border rounded-md">See more</button></a>
    </section>`
}


export function showCards(movies) {
    let containerCard = ""
    movies.forEach((movie) => {
        containerCard += structureCard(movie)
    })
    return containerCard
}

export function filterMovies(movies, name) {
    return movies.filter((movie) => movie.title.toLowerCase().includes(name.toLowerCase()))
}



export function filterGenero(movies, option) {
    return movies.filter((movie) => {
        movie.genero.includes(option)
    })
}    


export function filtraroption(movies,option) {
    return movies.filter((movie)=>{
        if (option == `All`) {
            return true
        } else {
            return movie.genres.includes(option)
        }
    })
}

export function tableWrapper(movies) {
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