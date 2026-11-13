import "./App.css";
import Header from "./components/Header";
import LaunchHero from "./components/LaunchHero";
import PromoHero from "./components/PromoHero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <LaunchHero />
      <PromoHero />
      <ProductCard />
      <Footer />
    </div>
  );
}
export default App;
