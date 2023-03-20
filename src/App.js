import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/product/Product";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import HireDeveloper from "./components/hiredeveloper/HireDeveloper";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Mark from "./components/marks/Mark";
import Logo from "./components/marks/Logo";
import Angular from "./pages/Angular";
import Bootstrap from "./pages/Bootstrap";
import ReactLang from "./pages/ReactLang";
import Html from "./pages/Html";
import CyberClubManger from "./pages/CyberClubManger";
import CyberSchoolManger from "./pages/CyberSchoolManger";
import CyberInstituteManger from "./pages/CyberInstituteManger";
import SmartBoard from "./pages/SmartBoard";
import EComm from "./pages/Portfolio/EComm";
import Education from "./pages/Portfolio/Education";
import MobileApp from "./pages/Portfolio/MobileApp";
import ProductDevelopment from "./pages/Portfolio/ProductDevelopment";
import WebApp from "./pages/Portfolio/WebApp";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/hiredeveloper" component={HireDeveloper} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          {/* services page */}
          <Route exact path="/angular" component={Angular} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/html" component={Html} />
          <Route exact path="/reactlang" component={ReactLang} />
          {/* product page */}
          <Route exact path="/ccm" component={CyberClubManger} />
          <Route exact path="/csm" component={CyberSchoolManger} />
          <Route exact path="/cim" component={CyberInstituteManger} />
          <Route exact path="/sm" component={SmartBoard} />
          {/* portfolio */}
          <Route exact path="/e-comm" component={EComm} />
          <Route exact path="/educatiob" component={Education} />
          <Route exact path="/mobile-app" component={MobileApp} />
          <Route exact path="/product-dev" component={ProductDevelopment} />
          <Route exact path="/webapp" component={WebApp} />
        </Switch>
        <Mark />
        <Logo />
        <Footer />
      </Router>
    </>
  );
}

export default App;
