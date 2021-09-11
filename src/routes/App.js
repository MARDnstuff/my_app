import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexContainer from "../container/IndexContainer";
import HomeContainer from "../container/HomeContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer />
                </Route>
                <Route exact path="/home">
                    <HomeContainer></HomeContainer>
                </Route>
                <Route exact path="/first">
                    <div>
                        <h1>HOLA SEGUNDA PAGINA</h1>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}
export default App;

//  Orden jerarquico para las rutas o poner exact antes del path 
//  para que no haya error