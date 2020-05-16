class Nation {

    static getData() {
        return fetch('https://api.kawalcorona.com/indonesia/')
        .then(respon => respon.json())
        .then(responJSON => {
            if(responJSON) {
                return Promise.resolve(responJSON[0])
            } else {
                return Promise.reject('Not Found')
            }
        })
    }
}

export default Nation
