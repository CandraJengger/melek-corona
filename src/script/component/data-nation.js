class DataNation extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode:"open"})
    }


    set data(data) {
        this._data = data
        this.render()
    }
    
    render() {
        this.shadowDOM.innerHTML = `
            <style>
            
            * {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
                box-sizing:border-box;
            }
            :host {
                display:block;
                width:100%;
                height: 100vh;
                background-color: #fff;
            }
            .hero {
                background-image: linear-gradient(rgba(0,0,0,09),rgba(0,0,0,0.8)),
                                  url(../../../src/img/id.png);
                background-size:cover;
                width: 100%;
                height: 85vh;
                text-align:center;
            }
            h1 {
                color: #20F4F5;
                transform: translateY(220px);
                font-weight: normal;
                font-size: 80px;
            }
            h4 {
                color: #20F4F5;
                transform: translateY(230px);
                font-weight: normal;
                letter-spacing: 1px;
            }
            :host .hero .card {
                width: 250px;
                height:130px;
                background-color: #fff;
                display: inline-block;
                margin: 20px;
                transform: translateY(360px);
                box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
                border-radius: 10px;
            }
            :host .hero .card > .title {
                display:block;
                background-color: #20F4F5;
                font-size: 23px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                padding: 10px 0;
            }
            :host .hero .card .data {
                display: block;
                margin-top: 10px;
                font-size: 30px
            }
            </style>

            <div class="hero">
                <h1>INDONESIA</h1>
                <h4>Buka mata, tumbuhkan empati dan kesadaran untuk sesama</h4>
                <div class="card">
                    <span class="title">Positif</span>
                    <span class="data">${this._data.positif}</span>
                    <span class="inak">orang</span>
                </div>
                <div class="card">
                    <span class="title">Sembuh</span>
                    <span class="data">${this._data.sembuh}</span>
                    <span class="inak">orang</span>
                </div>
                <div class="card">
                    <span class="title">Meninggal</span>
                    <span class="data">${this._data.meninggal}</span>
                    <span class="inak">orang</span>
                </div>
            </div>

        `
    }
}

customElements.define("data-nation",DataNation)