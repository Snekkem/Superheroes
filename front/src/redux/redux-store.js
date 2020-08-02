import {applyMiddleware, combineReducers, createStore} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import superheroesReducer from "./superhero-reducer";

let reducers = combineReducers({
    superheroesReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware))

export default store