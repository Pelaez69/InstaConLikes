

class Frame extends HTMLElement {
    static get observedAttributes(){
        return ["imagenprincipal", "nick", "nick2"]
    }
    
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propiedades, oldValue, newValue) {
        this[propiedades] = newValue
        this.render();
    }
    
    render (){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/components/postpirata/styles.css">
        <section class = "cartablanca">
        <image class = "imagenprincipal" src= "${this.imagenprincipal}"></image>
        <h1 class = "nick"> ${this.nick}</h1>
        <h1 class = "nick2"> ${this.nick2}</h1>

        <image class = "globo" src = "./imagenes/globo.png"></image>
        <image class = "guardado" src = "./imagenes/guardado.png"></image>
        <image class = "mensaje" src = "./imagenes/mensaje.png"></image>
        <image class = "puntos" src = "./imagenes/puntos.jpg"></image>
        <image class = "perfil" src = "./imagenes/perfil.png"></image>

        <h2 class = "views"> View all coments <h2>

        </section>`;
}

 
}
customElements.define('my-frame', Frame); 
export default Frame;