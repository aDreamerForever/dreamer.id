import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <style>
                @import
                url('https://fonts.googleapis.com/css?family=Montserrat');
            </style>

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
