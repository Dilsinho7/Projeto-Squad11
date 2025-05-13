import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import VisuOKR from './pages/VisuOKR';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='VisuOKR' element={<VisuOKR/>}/>
                    <Route path='Home' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
);
}

export default App