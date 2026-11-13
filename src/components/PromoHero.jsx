import iphone11 from "../assets/images/home/iphone11-bg.jpg";
import iphone11Pro from "../assets/images/home/iphone11-pro-bg.jpg";

function PromoHero() {
  return (
    <>
      <section className="second-container">
        <img src={iphone11Pro} alt="iPhone 11 Pro" className="hero-image" />
        <div className="hero-text">
          <h1>iPhone 11 Pro</h1>
          <p>Pro cameras. Pro display. Pro performance.</p>
          <a href="https://www.apple.com/iphone/">Learn more </a>
          <a href="https://www.apple.com/shop/buy-iphone">Buy </a>
        </div>
      </section>
      <section className="second-container">
        <img src={iphone11} alt="iPhone 11" className="hero-image" />
        <div className="hero-text">
          <h1 id="black">iPhone 11</h1>
          <p id="black">Just the right amount of everything.</p>
          <a href="#">Learn more </a>
          <a href="#">Buy </a>
        </div>
      </section>
    </>
  );
}

export default PromoHero;
