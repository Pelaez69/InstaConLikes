import * as components from "./components/index.js";
import data from "./components/data.js"
import "./components/contador/contador.js"

class AppContainer extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }
    
    render (){
        const compts = data.map(({ imagenprincipal, nick, nick2 }) => `<my-frame
       
        imagenprincipal = "${imagenprincipal}"
        nick = "${nick}"
        nick2 = "${nick2}"

        







        ></my-frame>
        <my-contador></my-contador>`)
        
        console.log(compts)
        this.shadowRoot.innerHTML = compts.join("")

        
        
}

}

customElements.define('app-container', AppContainer);


