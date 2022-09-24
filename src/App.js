import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
import MySpa from './pages/MySpa';
import MenuPage from './pages/MenuPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/mySpa' element={<MySpa />}/>
        <Route path='/menu' element={<MenuPage />}/>
      </Routes>
    </div>
  );
}

export default App;
