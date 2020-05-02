import ApexCharts from "apexcharts"
class ChartProvinsi {

    static getData() {
        return fetch("https://api.kawalcorona.com/indonesia/provinsi/")
        .then(respon => { 
            return respon.json()
        })
        .then(responJSON => { 
            const data = responJSON
            let kodeProv = [] 
            let namaProvinsi = []
            let positif = []
            let sembuh = []
            let meninggal = []
            data.forEach(total => {
                kodeProv.push(total.attributes.Kode_Provi)
                namaProvinsi.push(total.attributes.Provinsi)
                positif.push(total.attributes.Kasus_Posi)
                sembuh.push(total.attributes.Kasus_Semb)
                meninggal.push(total.attributes.Kasus_Meni)
            });
                  
        let options = {
            series: [{
            data: positif,
            name:"orang"
          }],
            chart: {
            id: 'positif',
            group: 'covid',
            type: 'line',
            height: 200
          },
          colors: ['#de1414'],
          yaxis: {
            labels: {
              minWidth: 40
            }
          },
          xaxis: {
              categories: kodeProv
          },
          title: {
              text: 'Positif'
          }
          };
  
          let chart = new ApexCharts(document.querySelector("#chart1"), options);
          chart.render();
        
          let optionsLine2 = {
            series: [{
            data: sembuh,
            name:"orang"
          }],
            chart: {
            id: 'sembuh',
            group: 'covid',
            type: 'line',
            height: 200
          },
          colors: ['#00E396'],
          yaxis: {
            labels: {
              minWidth: 40
            }
          },
          xaxis: {
              categories: kodeProv
          },
          title: {
              text: 'Sembuh'
          }
          };
  
          let chartLine2 = new ApexCharts(document.querySelector("#chart2"), optionsLine2);
          chartLine2.render();
        
          let optionsArea = {
            series: [{
            data: meninggal,
            name:"orang"
          }],
            chart: {
            id: 'meninggal',
            group: 'covid',
            type: 'line',
            height: 270
          },
          colors: ['#383437'],
          yaxis: {
            labels: {
              minWidth: 40
            }
          },
          xaxis: {
              categories: namaProvinsi
          },
          title: {
              text: 'Meninggal'
          }
          };
  
          let chartArea = new ApexCharts(document.querySelector("#chart3"), optionsArea);
          chartArea.render();
        })
    }
}

export default ChartProvinsi