/* Object destructuring enabels us to extract properties from objects into distinct value  */

const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

const dtitle = favouriteFilm.title
const dyear = favouriteFilm.year
const dgenre = favouriteFilm.genre
const dstar = favouriteFilm.star
const ddirector = favouriteFilm.director

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)


/* Above code is repetative  */

const {title,year,genre,star,director} = favouriteFilm