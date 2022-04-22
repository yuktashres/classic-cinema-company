import './App.css';
import Header from './Header';
import HeroBannerComponent from './HeroBannerComponent';
import HomepageComponent from './components/homepageContent';
import homeBanner from './images/HomeBanner.png';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBannerComponent image={homeBanner}/>
 <HomepageComponent />
 

    </div>
  );
}

export default App;
