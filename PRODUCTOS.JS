PRODUTOS.forEach((PRODUTOS)=>{
    PRODUTOS.addEventListener('VER', (Descrip)=>{
        let id=Descrip.target.getAttribute('produ-id');
        bd.forEach((PRODUTOS)=>{
            if(id == PRODUTOS.Id){
                const verDetalle=Descripcion.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="PRODUTOS."
                                        <h2>Datos del productos:</h2>
                                        <p>${PRODUTOS.Descripcion}</p>
                                        <p>${PRODUTOS.Unidad}</p>
                                        <p>${PRODUTOS.Cantidad}</p>
                                        <p>${PRODUTOS.Proveedor}</p>
                                    </div>`

            }
        })
    })
})
