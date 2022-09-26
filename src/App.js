import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
import MySpa from './pages/MySpa';
import MenuPage from './pages/MenuPage';
import PhotoLibrary from './pages/PhotoLibrary';
import Contact from './pages/contact';
import { slug } from './slug';
import BlogItemPage from './pages/BlogPage/BlogItemPage'
import BlogPage from './pages/BlogPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/mySpa' element={<MySpa />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<MenuPage />}/>
        <Route path='/albums' element={<PhotoLibrary />}/>
        <Route path={`/blog/${slug.cayHongSam}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.goiDau}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.loChanLong}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.moBung}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.seoRo}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.seoRoV2}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.tanNhang}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.thaiChi}`} element={<BlogItemPage />}/>
        <Route path={`/blog/${slug.triNam}`} element={<BlogItemPage />}/>
        <Route path={`/blog`} element={<BlogPage />}/>
      </Routes>
    </div>
  );
}

export default App;
