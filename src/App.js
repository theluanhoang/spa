import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
import MySpa from './pages/MySpa';
import MenuPage from './pages/MenuPage';
import PhotoLibrary from './pages/PhotoLibrary';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/mySpa' element={<MySpa />}/>
        <Route path='/menu' element={<MenuPage />}/>
        <Route path='/photo-library' element={<PhotoLibrary />}/>
      </Routes>
    </div>
  );
}

export default App;
