import { postData, opcion, putData } from "../../Api/api-reclutas.js";
export class FormReclutas extends HTMLElement {
    constructor() {
        super();
        this.render();

        this.saveData();
    }
    render() {
        this.innerHTML = /* html*/`
        
    <div class="container mt-4 text-danger fw-bolder fs-3">
        <form class="row g-3 fw-bold" id="myForm">
            <div class="col-md-5">
                <label for="nombre" class="form-label">Nombre y Apellidos</label>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombres y Apellidos">
            </div>
            <div class="col-md-3">
                <label for="edad" class="form-label">Edad</label>
                <input type="text" class="form-control" id="edad" name="edad" placeholder="Ej: 18">
            </div>
            <div class="col-md-3">
                <label for="telefono" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="telefono" name="telefono" placeholder="Ej: 123456789">
            </div>
            <div class="col-md-5">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="correo@cualquiera.com">
            </div>
            <div class="col-md-3">
                <label for="direccion" class="form-label">Direccion</label>
                <input type="text" class="form-control" id="direccion" name="direccion" placeholder="Ej: Calle#12-34">
            </div>
            <div class="col-md-3">
                <label for="fechanac" class="form-label">Fecha de Nacimiento</label>
                <input type="date" class="form-control" id="fechanac" name="fechanac" placeholder="Ej: 00/00/0000">
            </div>
            <div class="col-md-3">
                <label for="cc" class="form-label">Numero C.C</label>
                <input type="text" class="form-control" id="cc" name="cc" placeholder="C.C">
            </div>
            <div class="col-md-3">
                <label for="fechaing" class="form-label">Fecha de Ingreso</label>
                <input type="date" class="form-control" id="fechaing" name="fechaing" placeholder="Fecha de ingreso">
            </div>
            <div class="mt-4 text-center">
                <input class="btn btn-primary" data-accion="POST" type="submit" value="Guardar Datos">
            </div>
        </form>
    </div>
        
        `
    }
    saveData = () => {
        let myForm = document.querySelector("#myForm");
        myForm.addEventListener("submit", (e) => {
            e.stopImmediatePropagation();
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target))
            opcion[e.submitter.dataset.accion](data)
        })
    }



}
customElements.define("form-reclutas", FormReclutas);