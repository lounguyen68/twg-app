import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import RouteLink from "./config/RouteLink";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <RouteLink />
            <Footer />
        </BrowserRouter>
    );
}

export default App;