
export default class Request {

    constructor() {
        this.template = document.querySelector('.card-template').content;
        this.fragment = new DocumentFragment();
    }

    getDataMovies(dataMovies) {
        const moviesInfo = [[], []];
        const result = dataMovies.map(movie => {
            return new Promise(async (resolve, reject) => {
                try {
                    const url = `https://www.omdbapi.com/?t=${movie}&apikey=6f9da08e=${movie.imdbID}`;
                    const res = await fetch(url);
                    const data = await res.json();
                    moviesInfo[0].push(data);
                    resolve(moviesInfo);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

}