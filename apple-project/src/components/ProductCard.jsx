import watchLogo from "../assets/images/icons/watch-series5-logo.png";
import watchSeries5 from "../assets/images/home/watch-series-5.jpg";
import appleCard from "../assets/images/home/apple-card.jpg";
import appleCardLogo from "../assets/images/icons/apple-card-logo.png";
import appleTvBackground from "../assets/images/home/apple-tv-background.jpg";
import appleTvLogo from "../assets/images/icons/apple-tv-logo.png";
import servantLogo from "../assets/images/icons/servant-logo.png";
import airpods from "../assets/images/home/air-pods.jpg";
import macLaptop from "../assets/images/home/mac-laptop.jpg";
import newIpad from "../assets/images/home/new-ipad.jpg";
import newIpadLogo from "../assets/images/icons/new-ipad-logo.png";
function ProductCard() {
  return (
    <section className="big-container">
      <div className="watch">
        <img src={watchSeries5} alt="Apple Watch Series 5" className="image" />
        <div className="inside-text">
          <h1>
            <img src={watchLogo} alt="Apple Watch Series 5" />
          </h1>
          <p>With the row Always on Retina display.</p>
          <p>You've never seen a watch like this.</p>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Learn more {">"}
          </a>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Buy {">"}
          </a>
        </div>
      </div>
      <div className="watch">
        <img src={appleCard} alt="" className="image" />
        <div className="inside-text">
          <h1>
            <img src={appleCardLogo} alt="apple card" />
          </h1>
          <p>Daily cash on purchase from</p>
          <p>Apple Using Apple card.</p>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Learn more {">"}
          </a>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Buy {">"}
          </a>
        </div>
      </div>
      <div className="watch">
        <img src={appleTvBackground} alt="" className="image" />
        <div className="inside-text">
          <h1>
            <img src={appleTvLogo} alt="" />
          </h1>
          <p>
            <img src={servantLogo} alt="" id="servant" />
          </p>
          <nav id="down">
            <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
              Learn more {">"}
            </a>
            <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
              Buy {">"}
            </a>
          </nav>
        </div>
      </div>
      <div className="airpod">
        <img src={airpods} alt="" className="image airpodIm" />
        <div className="text">
          <h1 id="white">Airpod Pro</h1>
          <p id="white">Daily cash on purchase from</p>
          <p id="white">Apple Using Apple card.</p>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Learn more {">"}{" "}
          </a>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Buy {">"}
          </a>
        </div>
      </div>
      <div className="watch" id="mac-card">
        <div className="inside-text">
          <h1>MacBook</h1>
          <p>Daily cash on purchase from</p>
          <p>Apple Using Apple card.</p>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Learn more {">"}
          </a>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Buy {">"}
          </a>
          <img src={macLaptop} alt="" className="image" id="mac" />
        </div>
      </div>
      <div className="watch">
        <img src={newIpad} alt="" className="image" />
        <div className="inside-text">
          <h1>
            <img src={newIpadLogo} alt="" />
          </h1>
          <p>Daily cash on purchase from</p>
          <p>Apple Using Apple card.</p>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Learn more {">"}{" "}
          </a>
          <a href="#" style={{ color: "rgb(83, 83, 182)" }}>
            Buy {">"}
          </a>
        </div>
      </div>
    </section>
  );
}
export default ProductCard;
