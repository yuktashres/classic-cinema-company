import './App.css';
import Header from './components/header';
import HeroBannerComponent from './HeroBannerComponent';
import HomepageComponent from './components/homepageContent';
import homeBanner from './images/HomeBanner.png';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Header />
   
    <Routes>
      <Route path="/" element={
      <>
      <div className="App">
     
      <HeroBannerComponent image={homeBanner}/>
 <HomepageComponent />
 

    </div>
   
      </>
      }/>

      </Routes>
      </Router>

   
  );
}

export default App;
