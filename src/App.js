import './App.css';
import Header from './Header';
import HeroBannerComponent from './HeroBannerComponent';
import HomepageComponent from './components/homepageContent';
import homeBanner from './images/HomeBanner.png';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBannerComponent image={homeBanner} />
      <HomepageComponent />
      <Footer />


    </div>
  );
}

export default App;
