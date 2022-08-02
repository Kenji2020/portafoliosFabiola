import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { Mainpage } from './Pages/Mainpage';
import { Proyectos } from './Pages/Proyectos';
function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainpage/>}/>
            <Route path="/Proyectos" element={<Proyectos/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
