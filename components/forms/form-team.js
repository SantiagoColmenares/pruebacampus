import { postData, opcion } from "../../Api/api-team.js"; 
export class FormTeam extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.saveData();
    }
    render(){
        this.innerHTML = /* html */`
    <div class="container mt-4 text-danger fw-bolder fs-3">
        <form class="row g-3" id="myForm">
            <div class="col-md-4">
                <label for="nombreteam" class="form-label">Nombre Team</label>
                <input type="text" class="form-control" id="nombre" name="nombreteam">
            </div>
            <div class="col-md-4">
                <label for="traineraso" class="form-label">Trainer Asociado</label>
                <input type="text" class="form-control" id="traineraso" name="traineraso">
            </div>
            <div class="container mt-4 text-center">
                <input class="btn btn-primary" data-accion="POST" type="submit" value="Guardar Datos">
            </div>
        </form>
    </div>
    `
    }
    saveData = () =>{
        let myForm = document.querySelector("#myForm");
        myForm.addEventListener("submit", (e) =>{
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target))
            opcion[e.submitter.dataset.accion](data)
        })
    }
}
customElements.define("form-team",FormTeam)