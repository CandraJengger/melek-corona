
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
                :host {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    height: 80px;
                    position: fixed;
                    z-index: 111;
                    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.1);
                    background-color: #fff;
                }
                .nav-logo {
                    padding: 20px 80px;
                }
                .nav-logo > img {
                    width: 200px;
                }
                input[type="button"] {
                    width: 200px;
                    height: 50px;
                    background-color: #333;
                    color: #20F4F5;
                    border: none;
                    margin: 20px 80px;
                    font-family: calibri;
                    cursor: pointer;
                    border-radius: 40px;
                    font-size: 16px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    transition: .3s;
                }
                input[type="button"]:hover {
                    transform: translateY(-2px);
                }

                @media screen and (max-width:800px) {
                    :host {
                        justify-content: flex-start;
                        height: auto;
                    }
                    .nav-logo {
                        padding: 20px 0px 20px 20px;
                    }
                    input[type="button"] {
                        margin-left: 50px;
                    }
                }

                @media screen and (max-width:500px) {
                    :host {
                        flex-direction: column;
                    }
                    .nav-logo {
                        padding: 20px 0 0 20px;
                    }
                    input[type="button"] {
                        width: 200px;
                        background-color: transparent;
                        color: #20F4F5;
                        border: none;
                        margin: 0 0 0 20px;
                        font-family: calibri;
                        cursor: pointer;
                        border-radius: 0;
                        font-size: 15px;
                        box-shadow: none;
                        transition: .3s;
                        text-decoration: underline;
                    }
                    input[type="button"] {
                        margin-left: -10px;
                        transform: translateY(-20px);
                    }
                }
            </style>
            <div class="nav-logo" id="logo">
                <img src="../../../src/img/your-logo.png" alt="Logo">
            </div>
            <a target="_blank" href="https://covid19.kemkes.go.id/qna-pertanyaan-dan-jawaban-terkait-covid-19-update-6-maret-2020/#.XoCi34gzbDc">
                <input type="button" name="tanyaCovid" value="Tanya Jawab Covid-19">
            </a>
        `
    }

}

customElements.define("app-bar", AppBar)