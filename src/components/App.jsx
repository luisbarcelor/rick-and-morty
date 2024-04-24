import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import '../styles/App.css'
import Menu from "./views/Menu.jsx";
import Home from "./pages/Home.jsx";
import Notfound from "./pages/Notfound.jsx";
import Characters from "./pages/Characters.jsx";
import Footer from "./views/Footer.jsx";

function App() {
    return (
        <Router>
            <Menu/>
            <Routes>
                <Route index element={<Navigate to={"/home"}/>} />
                <Route path={"/home"} element={<Home/>} />
                <Route path={"/characters"} element={<Outlet />}>
                    <Route index element={<Characters />} />
                    <Route path={":page"} element={<Characters/>} />
                </Route>
                <Route path={"*"} element={<Notfound/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
