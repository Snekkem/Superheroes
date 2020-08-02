import React from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import SuperHeroesContainer from "./components/SuperHeroes/SuperHeroesContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import SuperHeroDetailsContainer from "./components/SuperHeroDetails/SuperHeroDetailsContainer";
import Navbar from "./components/Navbar/Navbar";
import AddSuperhero from "./components/AddSuperhero/AddSuperhero";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <>
                    <div className={"container"}>
                        <Navbar/>
                        <Route exact path={'/:page?'} render={() => <SuperHeroesContainer/>}/>
                        <Route exact path={'/create/Superhero'} render={() => <AddSuperhero />}/>
                        <Route exact path={'/superhero/:id'} render={() => <SuperHeroDetailsContainer/>}/>
                    </div>
                </>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
