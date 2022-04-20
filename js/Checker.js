import Request from "./Request.js";

class Checker {

    verifyInput(input) {
        if (input.value.length > 0) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            const request = new Request();
            request.getDataMovies(input.value);
        }
        else {
            this.getErrorContainer("This field is required");
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
    }

    getErrorContainer(errorMsg = String) {
        const fragment = new DocumentFragment();
        const errorContainer = document.getElementById("error-container");
        // se crea la variable y con .content se obtiene el contenido del elemento que esta dentro
        const errorTemplate = document.getElementById("error-template").content;
        // se crea una variable para obtener el elemento que se va a clonar
        const clone = errorTemplate.cloneNode(true);
        // con appendChild se agrega el contenido del elemento clonado al elemento padre
        fragment.appendChild(clone);
        // se obtiene el elemento que se va a modificar
        errorContainer.appendChild(fragment);

        document.querySelector(".alert-error").innerText = errorMsg;
        this.displayError(errorContainer);
    }

    displayError(errorContainer) {
        errorContainer.style.display = "block";
        setTimeout(() => {
            errorContainer.style.display = "none";
            while (errorContainer.firstChild) {
                errorContainer.firstChild.remove();
            }
        }, 1500);
    }


}

export default Checker;