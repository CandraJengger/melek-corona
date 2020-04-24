import '../component/data-nation.js'
import Nation from '../data/nation.js'
import ChartProvinsi from '../data/chartProvinsi.js'

const main = () => {
    const dataNationElement = document.querySelector('data-nation')

    const renderResult = results => {
        dataNationElement.data = results
    }

    const fallbackResult = () => {
        alert("error")
    }

    Nation.getData()
    .then(renderResult)
    .catch(fallbackResult)

    ChartProvinsi.getData() 
}

export default main 