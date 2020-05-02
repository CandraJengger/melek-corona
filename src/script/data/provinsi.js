class Provinsi {

    static getData() {
        return fetch("https://api.kawalcorona.com/indonesia/provinsi/")
        .then(respon => {
            return respon.json()
        })
        .then(responseJSON => {
            if(responseJSON) {
                return Promise.resolve(responseJSON)
            } else {
                return Promise.reject("Not Found !!")
            }

        })
    }
}

export default Provinsi