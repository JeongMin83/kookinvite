import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TypeHomecoming from './pages/TypeHomecoming';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="typehomecoming/:collection" element={<TypeHomecoming />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
