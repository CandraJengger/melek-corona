class AppBar extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .nav-logo {
                    display: block;
                    width: 100%;
                    height: 80px;
                    padding: 20px 80px;
                    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.1);
                }
                .nav-logo > img {
                    width: 200px;
                }
            </style>
            <div class="nav-logo" id="logo">
            <img src="../../../src/img/your-logo.png" alt="Logo">
            </div>
        `
    }

}

customElements.define("app-bar", AppBar)