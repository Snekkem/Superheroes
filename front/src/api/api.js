import * as axios from 'axios'

export const superheroesAPI = {
    getAll(page) {
        return axios.get(`http://localhost:5000/api/info/all/${page}`).then(response => response.data)
    },
    getDetailsById(id) {
        return axios.get(`http://localhost:5000/api/info/details/${id}`).then(response => response.data)
    },
    getImagesById(id) {
        return axios.get(`http://localhost:5000/api/info/getImages/${id}`).then(response => response.data)
    },
    getSuperPowersById(id) {
        return axios.get(`http://localhost:5000/api/info/getSuperPowers/${id}`).then(response => response.data)
    },
    getCountSuperheroes() {
        return axios.get(`http://localhost:5000/api/info/getCountSuperheroes`).then(response => response.data)
    },
    deleteImage(imgId) {
        return axios.post(`http://localhost:5000/api/info/deleteImage`, {imgId}).then(response => response)
    },
    createSuperhero(nikName, realName, originDescription, catchPhrase, image, superPowers) {
        return axios.post(`http://localhost:5000/api/info/createSuperhero`, {
            nikName,
            realName,
            originDescription,
            catchPhrase,
            image,
            superPowers
        }).then(response => response)
    },
    updateDetails(details, superPowers, imgURL, ID) {
        return axios.post(`http://localhost:5000/api/info/updateDetails`, {details, superPowers, imgURL, ID}).then(response => response)
    },
    deleteSuperhero(ID) {
        debugger
        return axios.post(`http://localhost:5000/api/info/deleteSuperhero`, {ID}).then(response => response)
    }
}