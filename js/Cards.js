// import Request from "./Request.js";

// export default class Cards {

//     async getMoviesPreviews() {
//         const res = await fetch('/exampleDB.json');
//         const data = await res.json();
//         this.getImages(data);
//     }

//     async getImages(data) {
//         // esta constante guarda los valores del objeto json
//         const values = Object.values(data);
//         // console.log(values);
//         // esta constante guarda las keys del objeto json
//         // const keys = Object.keys(data);
//         // console.log(keys);
//         const imgArray = [];
//         // este ciclo pushea los valores en el arreglo imgArray y 
//         // los muestra aleatoriamente cada que se llama la funcion
//         while (imgArray.length <= 11) {
//             let item = Math.floor(Math.random() * values.length);
//             if (imgArray.indexOf(values[item]) === -1) {
//                 imgArray.push(values[item]);
//             }
//         }
//         const request = new Request();
//         request.getDataMovies(imgArray);
//     }
// }

import Request from "./request.js";

export default class Cards {

    async getImages(data) {
        const values = Object.values(data);
        const imgArray = [];

        while (imgArray.length <= 11) {
            let item = this.newItem(values);

            imgArray.push(item);
        }

        const request = new Request();
        request.getDataMovies(imgArray);
    }

    newItem(values) {
        const item = values[Math.floor(Math.random() * values.length)];
        return item;
    }

    async getMoviesExample() {
        const response = await fetch("/exampleDB.json");
        const data = await response.json();

        this.getImages(data);
    }
}