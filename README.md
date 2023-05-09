# Santiago-Colmenares-App
Prueba Apis y Json server Campus
document.querySelectorAll('.tabOpcion').forEach((val,id) =>{
    val.addEventListener("click", (e) =>{
        let datos = JSON.parse(e.target.dataset.verocultar);
        let cardVer = document.querySelector(datos[0]);
        if(cardVer.classList == 'btn-primary'){


        }
        cardVer.style.display = 'block';
        datos[1].forEach(card => {
            let cardActual = document.querySelector(card);
            cardActual.style.display = 'none';
        })
        e.stopImmediatePropagation();
        e.preventDefault();
    })
});