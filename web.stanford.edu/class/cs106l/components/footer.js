class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="row" style="position:absolute; bottom: 0px; width: 100%; text-align: center;">
        <div class="col-lg-12">
            <footer>
              <small>© 2024. Created by Jacob Roberts-Baca and Fabio Ibanez. Template created by Ethan Chi</small>
            </footer>
        </div>
    </div>
    `;
    }
}


customElements.define('footer-component', Footer);
