import './App.css';
import Header from './Header';
import HeroBannerComponent from './HeroBannerComponent';
import homeBanner from './images/images/HomeBanner/HomeBanner.png';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBannerComponent image={homeBanner}/>
    </div>
  );
}

export default App;
