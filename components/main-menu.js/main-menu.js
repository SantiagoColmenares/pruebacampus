export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
    <nav class="navbar navbar-expand-lg bg-light fs-4 ">
        <div class="container-fluid d-flex justify-content-around">
            <a class="navbar-brand fs-4" href="index.html">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="form-reclutas.html">Registro Reclutas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form-team.html">Registro Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="listas.html">Listado de Registros</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        `
    }
}
customElements.define("main-menu",MainMenu);