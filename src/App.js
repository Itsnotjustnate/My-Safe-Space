import './App.css';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUsComponent';
import Home from './components/HomeComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Docs from './components/DocsComponent';
import Downloads from './components/DownloadsComponents';
import Articles from './components/ArticlesComponent';

export default function App() {
  return (    
    <>
      <Header/>
      <Routes>      
          <Route path='/' element={<Home />}/>
          <Route path='downloads' element={<Downloads />}></Route>
          <Route path='aboutus' element={<AboutUs />}></Route>
          <Route path='docs' element={<Docs />}></Route>
          <Route path='articles' element={<Articles />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
