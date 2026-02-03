import { Marquee, MarqueeContent, MarqueeItem } from "../Marquee/Marquee";
import { RECONNECT, REMEMBER, RETURN } from "./Reconnect.Constants";
import "./reconnect.scss"

const Reconnect = () => {
  return (
      <div className="reconnect">
      <Marquee>
        <MarqueeContent speed={50} className="marquee__content">
          <MarqueeItem>
            <p className="reconnect__text">{RETURN}</p>
          </MarqueeItem>
          <MarqueeItem>
            <div className="reconnect__circle"/>
          </MarqueeItem>
          <MarqueeItem>
            <p className="reconnect__text reconnect__text-italic">{REMEMBER}</p>
          </MarqueeItem>
          <MarqueeItem>
            <div className="reconnect__circle"/>
          </MarqueeItem>
          <MarqueeItem>
            <p className="reconnect__text">{RECONNECT}</p>
          </MarqueeItem>
          <MarqueeItem>
            <div className="reconnect__circle"/>
          </MarqueeItem>
          <MarqueeItem>
            <p className="reconnect__text">{RETURN}</p>
          </MarqueeItem>
          <MarqueeItem>
            <div className="reconnect__circle"/>
          </MarqueeItem>
          <MarqueeItem>
            <p className="reconnect__text reconnect__text-italic">{REMEMBER}</p>
          </MarqueeItem>
          <MarqueeItem>
            <div className="reconnect__circle"/>
          </MarqueeItem>
          <MarqueeItem>
            <p className="reconnect__text">{RECONNECT}</p>
          </MarqueeItem>
          <MarqueeItem>
            <div className="reconnect__circle"/>
          </MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default Reconnect;
