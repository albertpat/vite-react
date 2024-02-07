import {NavLink, Routes, Route, BrowserRouter} from 'react-router-dom'
import "./App.css";
import {HomePage,FilmsPage} from "./pages";


function App() {
  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/films'}>Films</NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element = {<HomePage />}/>
            <Route path='/films' element = {<FilmsPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;