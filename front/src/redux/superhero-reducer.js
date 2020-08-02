import {superheroesAPI} from "../api/api";

const IS_ADDED = 'IS_ADDED'
const IS_LOADED = 'IS_LOADED'
const DELETE_IMAGE = 'DELETE_IMAGE'
const UPDATE_DETAILS = 'UPDATE_DETAILS'
const SET_SUPERHEROES = 'SET_SUPERHEROES'
const DELETE_SUPERHERO = 'DELETE_SUPERHERO'
const CREATE_SUPERHERO = 'CREATE_SUPERHERO'
const GET_SUPERHERO_COUNT = 'GET_SUPERHERO_COUNT'
const SET_SUPERHERO_IMAGES = 'SET_SUPERHERO_IMAGES'
const SET_SUPERHERO_DETAILS = 'SET_SUPERHERO_DETAILS'
const SET_SUPERHERO_SUPERPOWERS = 'SET_SUPERHERO_SUPERPOWERS'

const initialState = {
    superheroes: [],
    superheroDetails: [],
    images: [],
    superPowers: [],
    isLoaded: false,
    superheroesCount: 0,
    superheroFullInfo: {},
    isAdded: false
}

const superheroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUPERHEROES: {
            return {
                ...state,
                superheroes: action.payload
            }
        }
        case SET_SUPERHERO_DETAILS: {
            return {
                ...state,
                superheroDetails: action.payload
            }
        }
        case SET_SUPERHERO_IMAGES: {
            debugger
            const newArr = {...state.images, ...action.payload}
            return {
                ...state,
                images: Object.values(newArr)
            }
        }
        case SET_SUPERHERO_SUPERPOWERS: {
            return {
                ...state,
                superPowers: action.payload
            }
        }
        case GET_SUPERHERO_COUNT: {
            return {
                ...state,
                superheroesCount: action.payload
            }
        }
        case DELETE_IMAGE: {
            return {
                ...state,
                images: [...state.images.filter(img => img.ID !== action.payload)]
            }
        }
        case CREATE_SUPERHERO: {
            return {
                ...state,
                superheroFullInfo: action.payload
            }
        }
        case UPDATE_DETAILS: {
            return {
                ...state,
                superheroDetails: action.payload
            }
        }
        case DELETE_SUPERHERO: {
            return {
                ...state,
                superheroes: [...state.superheroes.filter(hero => hero.ID !== action.payload)]
            }
        }
        case IS_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        case IS_ADDED: {
            return {
                ...state,
                isAdded: action.payload
            }
        }
        default:
            return state
    }
}

export const getSuperheroes = (page) => (dispatch) => {
    dispatch(isLoadedAC(true))
    superheroesAPI.getAll(page).then(heroes => {
        dispatch(setSuperheroesAC(heroes))
        dispatch(isLoadedAC(false))
    })
}

export const setSuperheroesAC = (superheroes) => ({type: SET_SUPERHEROES, payload: superheroes})

export const getSuperheroDetails = (id) => (dispatch) => {
    dispatch(isLoadedAC(true))

    superheroesAPI.getDetailsById(id).then(details => {
        dispatch(setSuperheroDetailsAC(details))
        dispatch(isLoadedAC(false))
    })
}

export const setSuperheroDetailsAC = (details) => ({type: SET_SUPERHERO_DETAILS, payload: details})

export const getSuperheroImages = (id) => (dispatch) => {
    dispatch(isLoadedAC(true))

    superheroesAPI.getImagesById(id).then(images => {
        dispatch(setSuperheroImagesAC(images))
        dispatch(isLoadedAC(false))
    })
}

export const setSuperheroImagesAC = (images) => ({type: SET_SUPERHERO_IMAGES, payload: images})

export const getSuperPowers = (id) => (dispatch) => {
    dispatch(isLoadedAC(true))
    superheroesAPI.getSuperPowersById(id).then(powers => {
        dispatch(setSuperheroSuperPowersAC(powers))
        dispatch(isLoadedAC(false))
    })
}

export const setSuperheroSuperPowersAC = (superPowers) => ({type: SET_SUPERHERO_SUPERPOWERS, payload: superPowers})

export const getCount = () => (dispatch) => {
    superheroesAPI.getCountSuperheroes().then(count => {
        dispatch(setSuperheroCountAC(count.count))
    })
}

export const setSuperheroCountAC = (count) => ({type: GET_SUPERHERO_COUNT, payload: count})

export const deleteImage = (imgId) => (dispatch) => {
    superheroesAPI.deleteImage(imgId).then(response => {
        if (response.data.message) {
            window.M.toast({html: response.data.message})
        }
        dispatch(deleteImageAC(imgId))
    })
}

export const deleteImageAC = (id) => ({type: DELETE_IMAGE, payload: id})

export const createSuperhero = (nikName, realName, originDescription, catchPhrase, image, superPowers) => (dispatch) => {
    superheroesAPI.createSuperhero(nikName, realName, originDescription, catchPhrase, image, superPowers).then(response => {
        if (response.data.message) {
            window.M.toast({html: response.data.message})
        }
        dispatch(createSuperheroAC(nikName, realName, originDescription, catchPhrase, image, superPowers))

    }).then(dispatch(isAddedAC(true)))
}

export const createSuperheroAC = (nikName, realName, originDescription, catchPhrase, image, superPowers) =>
    ({type: CREATE_SUPERHERO, payload: nikName, realName, originDescription, catchPhrase, image, superPowers})

export const updateDetails = (details, superPowers, imgURL, ID) => (dispatch) => {
    superheroesAPI.updateDetails(details, superPowers, imgURL, ID).then(response => {
        if (response.data.message) {
            window.M.toast({html: response.data.message})
        }
        dispatch(updateDetailsAC({details, ID}, ID))
        dispatch(setSuperheroSuperPowersAC(superPowers))
        if (imgURL.imgURL.length > 0) {
            debugger
            dispatch(setSuperheroImagesAC([{ID: Date.now(), Path: imgURL.imgURL}]))
        }
        dispatch(setSuperheroDetailsAC(details))
    })
}

export const updateDetailsAC = (details, ID) => ({type: UPDATE_DETAILS, payload: details, ID})

export const deleteSuperhero = (ID) => (dispatch) => {
    superheroesAPI.deleteSuperhero(ID).then(response => {
        if (response.data.message) {
            window.M.toast({html: response.data.message})
        }
        dispatch(deleteSuperheroAC(ID))
    })
}

export const deleteSuperheroAC = (ID) => ({type: DELETE_SUPERHERO, payload: ID})

export const isLoadedAC = (isLoaded) => ({type: IS_LOADED, payload: isLoaded})

export const isAddedAC = (isAdded) => ({type: IS_ADDED, payload: isAdded})

export default superheroesReducer
