console.log(movies);
const $main = document.getElementById("cards")


const createCard = function (array) {
    const fragment = document.createDocumentFragment()
    for (const movie in array) {
        const $article = document.createElement("article")
        $article.innerHTML = `
        <img class="object-cover" src="${array[movie].image}" alt="">
        <h3 class= "text-lg font-medium py-5">${array[movie].title}</h3>
        <h4 class = "text-gray-400 font-medium">${array[movie].tagline}</h4>
        <p class = "text-gray-400 line-clamp-4">${array[movie].overview}</p>
        `
        $article.className = "w-80 h-96 m-2 text-center border-2 border-purple-400 rounded-md bg-black "
    fragment.appendChild($article)
    }
    return fragment
}

$main.appendChild(createCard(movies));