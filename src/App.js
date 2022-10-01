import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
import MySpa from './pages/MySpa';
import MenuPage from './pages/MenuPage';
import PhotoLibrary from './pages/PhotoLibrary';
import Contact from './pages/contact';
import { slug, data } from './slug';
import BlogItemPage from './pages/BlogPage/BlogItemPage';
import BlogPage from './pages/BlogPage';
import ReviewPage from './pages/reviewPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/mySpa' element={<MySpa />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/reviews' element={<ReviewPage />}/>
        <Route path='/service' element={<MenuPage />}/>
        <Route path='/albums' element={<PhotoLibrary />}/>
        <Route path={`/blog/${slug.cayHongSam}`} element={<BlogItemPage data={data[0].cayHongSam}/>}/>
        <Route path={`/blog/${slug.goiDau}`} element={<BlogItemPage data={data[0].goiDau} />}/>
        <Route path={`/blog/${slug.loChanLong}`} element={<BlogItemPage data={data[0].loChanLong} />}/>
        <Route path={`/blog/${slug.moBung}`} element={<BlogItemPage data={data[0].moBung} />}/>
        <Route path={`/blog/${slug.seoRo}`} element={<BlogItemPage data={data[0].seoRo} />}/>
        <Route path={`/blog/${slug.seoRoV2}`} element={<BlogItemPage data={data[0].seoRoV2} />}/>
        <Route path={`/blog/${slug.tanNhang}`} element={<BlogItemPage data={data[0].tanNhang} />}/>
        <Route path={`/blog/${slug.thaiChi}`} element={<BlogItemPage data={data[0].thaiChi} />}/>
        <Route path={`/blog/${slug.triNam}`} element={<BlogItemPage data={data[0].triNam} />}/>
        <Route path={`/blog`} element={<BlogPage />}/>
      </Routes>
    </div>
  );
}

export default App;
