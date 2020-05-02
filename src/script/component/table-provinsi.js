class TableProvinsi extends HTMLElement {

    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode : "open"})
    }

    set data(data) {
        this._data = data
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            :host {
                text-align:center;
                
            }
            h1 {
                margin: 40px auto 70px;
            }
            table {
                width: 70%;
                margin: 20px auto 40px;
                font-size: 18px;
                border-collapse: collapse;
            }
            th {
                font-size: 20px;
                border: 1px solid #ededed;
                padding:7px;
            }
            td {
                border: 1px solid #ededed;
                padding:7px;
            }
            th, td {
                text-align:left;
            }
            @media screen and (max-width:400px) {
                table {
                    width: 80%;
                }
            }
            </style>
            <h1>Data COVID-19 di Indonesia Berdasarkan Provinsi</h1>
            <table>
                <thead>
                    <tr>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    ${this._data.map(item => 
                        `
                            <tr>
                                <td>${item.attributes.Provinsi}</td>
                                <td>${item.attributes.Kasus_Posi}</td>
                                <td>${item.attributes.Kasus_Semb}</td>
                                <td>${item.attributes.Kasus_Meni}</td>
                            </tr>
                        `
                    ).join("")}

                </tbody>
            </table>

        `
    }

}

customElements.define("table-provinsi", TableProvinsi)