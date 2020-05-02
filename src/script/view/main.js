import '../component/data-nation.js'
import '../component/table-provinsi.js'
import Provinsi from '../data/provinsi.js'
import Nation from '../data/nation.js'
import ChartProvinsi from '../data/chartProvinsi.js'

const main = () => {
    const dataNationElement = document.querySelector('data-nation')
    const dataTableProvinsi = document.querySelector('table-provinsi')


    const renderProvinsi = results => {
        dataTableProvinsi.data = results
    }
    const renderNation = results => {
        dataNationElement.data = results
    }

    const fallbackResult = () => {
        alert("error")
    }
    //data Nation
    Nation.getData()
    .then(renderNation)
    .catch(fallbackResult)

    //tabel provinsi
    Provinsi.getData()
    .then(renderProvinsi)
    .catch(fallbackResult)

    //chart
    ChartProvinsi.getData() 
}

export default main 