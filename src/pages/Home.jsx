import Footer from "../layouts/Footer";
import Header from '../layouts/Header/Header';
import Services from "../components/services/Services";
import About from './../components/About/About';
import Why from './../components/Why/Why';
import Team from './../components/Team/Team';
import Client from './../components/Client/Client';
import Info from './../components/Info/Info';

const Home = () => {
  return (
      <div className="Home">
        
        {/* header section */}
        <Header />

        {/* service section */}
        <Services />
      
        {/* about section */}
        <About />

        {/* why section */}
        <Why />

        {/* team section */}
        <Team />

        {/* client section */}
        <Client />

        {/* info section */}
        <Info />

        {/* footer section */}
        <Footer label="CoderS" link="https://www.codersujon.com/"/>
      </div>
  );
};
export default Home;