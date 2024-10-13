import HeroBanner from '../../components/HeroBanner/HeroBanner';
import { Navigation } from '../../components/Navigation/Navigation';
// import Features from './Features';
// import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navigation />
      <HeroBanner />
      {/* <Features />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
