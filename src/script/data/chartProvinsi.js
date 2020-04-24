import ApexCharts from "apexcharts"
class ChartProvinsi {

    static getData() {
        return fetch("https://api.kawalcorona.com/indonesia/provinsi/")
        .then(respon => {
            return respon.json()
        })
        .then(responJSON => {
            const data = responJSON
            let namaProvinsi = []
            let positif = []
            data.forEach(nama => {
                namaProvinsi.push(nama.attributes.Provinsi)
            });
            data.forEach(total => {
                positif.push(total.attributes.Kasus_Posi)
            })
            console.log(namaProvinsi)
            console.log(positif)
            var options = {
                chart: {
                    height: 350,
                    type: 'line',
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    data: positif,
                    name: "orang"
                }],
                colors: ['#fb0404'],
                title: {
                    text: '',
                },
                xaxis: {
                    categories: namaProvinsi
                },
                noData: {
                  text: 'Loading...'
                }
              }
              
              var chart = new ApexCharts(
                document.querySelector("#chart"),
                options
              );
              
              chart.render();
        })
    }
}

export default ChartProvinsi