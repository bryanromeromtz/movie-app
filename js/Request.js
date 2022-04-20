
import DisplayMovies from "./DisplayMovies.js";


export default class Request {

    constructor() {
        this.template = document.querySelector('.card-template').content;
        this.fragment = new DocumentFragment();
    }

    async getInfo(inputValue) {
        try {
            const url = `https://www.omdbapi.com/?t=${inputValue}&apikey=e0b53384`;
            const response = await fetch(url);
            const json = await response.json();

            const container = document.querySelector(".new-row");

            const display = new Display(json.Search, this.template, container);
            display.displayUserCards();
        } catch (error) {
            const checker = new Checker();
            checker.displayError("Movie not found!");
        }
    }

    // funcion para obtener la informacion de la API
    getDataMovies(dataMovies) {
        // arreglo con 2 arreglos anidados 
        // uno con las imagenes y otro con los titulos
        const moviesInfo = [[], []];

        // ciclo para obtener los valores de las imagenes y titulos de la API
        const result = dataMovies.map(movie => {

            // se declara una constante con una nueva promesa
            return new Promise(async (resolve, reject) => {
                try {
                    // peticion a la Api con fetch
                    const url = `https://www.omdbapi.com/?t=${movie}&apikey=e0b53384`;
                    const res = await fetch(url);
                    const data = await res.json();
                    // en moviesInfo se guardan las imagenes y titulos con la funcion push
                    // en este primer push se guardan las imagenes
                    moviesInfo[0].push(data.Poster);
                    // en este segundo push se guardan los titulos
                    moviesInfo[1].push(data.Title);
                    // console.log(moviesInfo);
                    resolve();
                } catch (error) {
                    reject("Error de conexión", error);
                }
            });
        });
        Promise.all(result).then(() => {
            const container = document.querySelectorAll('.default-row');
            const movieDisplay = new DisplayMovies(moviesInfo, this.template, container);
            movieDisplay.displayDefaultCards();
        });
    }

}