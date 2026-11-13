import macLaptop from "../assets/images/home/mac-laptop.jpg";
function LaunchHero() {
  return (
    <section className="first-container">
      <div className="model">Launch Model</div>
      <div className="product-name">MacBook Pro</div>
      <div className="discritpion">The best for the brightest</div>
      <nav className="nav">
        <a href="#">Learn more {">"}</a>
        <a href="#"> Buy {">"}</a>
      </nav>
      <div>
        <img src={macLaptop} alt="Mac" />
      </div>
    </section>
  );
}

export default LaunchHero;
