import React, { useState } from 'react';

import './App.css';
import Header from './components/header';
import HeroBannerComponent from './HeroBannerComponent';
import HomepageComponent from './components/homepageContent';
import homeBanner from './images/HomeBanner.png';
import FilmLimited from './components/FilmLimited';
import Footer from './Footer';

import sampleFilms from './data/films.json';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [Films] = useState(sampleFilms.films);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <div className="App">

              <HeroBannerComponent image={homeBanner} />
              <HomepageComponent />
              <FilmLimited info={{ Films }} /> 

            </div>

          </>
        } />

      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
