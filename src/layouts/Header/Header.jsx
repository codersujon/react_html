import Navbar from './Navbar';
import Slider from './Slider';
import HeroBgBox from './HeroBgBox';

const Header = () => {
    return (
        <>
            <div className="hero_area">

                {/* hero bg box */}
                <HeroBgBox imgSrc="images/hero-bg.png" title="hero-logo"/>

                {/* header section strats */}
                <Navbar />

                {/* slider section  */}
                <Slider />

            </div>
        </>
    );
};

export default Header;