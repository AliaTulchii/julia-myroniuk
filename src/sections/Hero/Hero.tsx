import Reconnect from '../../components/Reconnect/Reconnect';
import { HERO_SCROLL, HERO_TEXT } from './Hero.Constants';
import './hero.scss'
const Hero = () => {
  return (
    <section className="hero" id="hero">
        <div className="hero__container">
            <Reconnect />
            <div className="hero__wrapper container">
                <p className="hero__text">{HERO_TEXT}</p>
                <a href="#" className="hero__link">{HERO_SCROLL}</a>
            </div>
        </div>
      
    </section>
  );
};

export default Hero;
