import { getDataAll } from "../../Api/api-reclutas.js";
export class DataList extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.requestApiGetRecluta();
    }
    render(){
        this.innerHTML = /* html */`
        <table class="table table-dark table-hover table-striped border-primary table-bordered mt-3 ">
        <h3 class="mt-3 text-center fs-2 text-danger">Listado Reclutas<h3>
        <thead>
        <tr>
            <th>Id</th>
            <th>Nombre-Apellidos</th>
            <th>Edad</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Numero de Identificacion</th>
        </tr>
        </thead>
        <tbody id="lista-reclutas">
            
        </tbody>
    </table>

    <table class="table table-success table-striped">
    
    </table>
        
        `
    }

    requestApiGetRecluta = () =>{
        getDataAll()
            .then((result)=>{
                this.renderReclutas(result);
            })
            console.log(result);
    }
    renderReclutas = (reclutas)=>{
        let reclutasHTML = '';
        for(let recluta of reclutas){
            reclutasHTML += this.crearListaClientesHTML(recluta);
        }
        document.getElementById('lista-reclutas').innerHTML = reclutasHTML;
    }
    crearListaClientesHTML = (reclutas)=>{
        let listaHTML = /* html */ `
        <tr>
            <td>${reclutas.id}</td>
            <td>${reclutas.nombre}</td>
            <td>${reclutas.edad}</td>
            <td>${reclutas.telefono}</td>
            <td>${reclutas.email}</td>
            <td>${reclutas.cc}</td>
            
        </tr>
        `;
        console.log(reclutas)
        return listaHTML;
        
    }
}
customElements.define("data-list",DataList)