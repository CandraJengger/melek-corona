class ChartProvinsi extends HTMLElement {

    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
            .title-chart {
                text-align: center;
                margin-bottom: 20px;
                margin-bottom: 40px;
            }
        </style>
            <h1 class="title-chart">Statistik Data Provinsi</h1>
            <div id="chart1"></div>
            <div id="chart2"></div>
            <div id="chart3"></div>
        
        `
    }

}

customElements.define("chart-provinsi",ChartProvinsi)