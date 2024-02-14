import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import '../styles/App.scss'
import Navbar from "./views/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Notfound from "./pages/Notfound.jsx";
import Characters from "./pages/Characters.jsx";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route index element={<Navigate to={"/home"}/>} />
                <Route path={"/home"} element={<Home/>} />
                <Route path={"/characters"} element={<Outlet />}>
                    <Route index element={<Characters defaultPage={1}/>} />
                    <Route path={":pageNum"} element={<Characters/>} />
                </Route>
                <Route path={"*"} element={<Notfound/>} />
            </Routes>
        </Router>
    )
}

export default App
