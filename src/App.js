import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/LayoutComponent';
import AboutUs from './components/AboutUsComponent';
import Home from './components/HomeComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

export default function App() {
  return (      
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='aboutus' element={<AboutUs />}/>
          </Route>
      </Routes>
      <Footer/>
    </div>
  );
}
