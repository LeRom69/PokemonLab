import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/PokemonContent/About";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/about" element = {<About />}/>
        </Routes>
    )
}