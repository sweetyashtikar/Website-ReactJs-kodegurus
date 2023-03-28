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
// carasole
import Mark from "./components/marks/Mark";
import Logo from "./components/marks/Logo";
// portfolio
import EComm from "./pages/Portfolio/ecomm/EComm";
import Education from "./pages/Portfolio/education/Education";
import MobileApp from "./pages/Portfolio/mobile/MobileApp";
import ProductDevelopment from "./pages/Portfolio/product/ProductDevelopment";
import WebApp from "./pages/Portfolio/web/WebApp";
// Hire Developer
import FullStackBackend from "./pages/hiredeveloper/backend/FullStackBackend";
import FullStackAngular from "./pages/hiredeveloper/angular/FullStackAngular";
import FullStack from "./pages/hiredeveloper/php/FullStack";
import FullStackMern from "./pages/hiredeveloper/mern/FullStackMern";
import FullStackDotNet from "./pages/hiredeveloper/dotnet/FullStackDotNet";
import FullStackWordpress from "./pages/hiredeveloper/wordpress/FullStackWordpress";
import FullStackUiUx from "./pages/hiredeveloper/ui-ux/FullStackUi-Ux";
import FullStackLaravel from "./pages/hiredeveloper/laravel/FullStackLaravel";
import FullStackMagento from "./pages/hiredeveloper/mangento/FullStackMagento";
import FullStackMobile from "./pages/hiredeveloper/mobile/FullStackMobile";
// services page FRONTEND
import ReactJs from "./pages/services/Frontend/react/ReactJs";
import AngularJs from "./pages/services/Frontend/angular/AngularJs";
import Bootstrap from "./pages/services/Frontend/bootstrap/Bootstrap";
import Html from "./pages/services/Frontend/html/Html";
import VueJs from "./pages/services/Frontend/vue/VueJs";
// product page

import CyberSchoolManger from "./pages/product/cyberschoolmanger/CyberSchoolManger";
import CyberClubManger from "./pages/product/cyberclubmanger/CyberClubManger";
import CyberInstituteManger from "./pages/product/cyberinstitutemanger/CyberInstituteManger";
import SmartBoard from "./pages/product/smartboard/SmartBoard";

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
          {/* services page frontend*/}
          <Route exact path="/reactlang" component={ReactJs} />
          <Route exact path="/angular" component={AngularJs} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/html" component={Html} />
          <Route exact path="/vue" component={VueJs} />
          {/* portfolio */}
          <Route exact path="/e-comm" component={EComm} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/mobile-app" component={MobileApp} />
          <Route exact path="/product-dev" component={ProductDevelopment} />
          <Route exact path="/web-app" component={WebApp} />
          {/* Products */}
          <Route exact path="/csm" component={CyberSchoolManger} />
          <Route exact path="/ccm" component={CyberClubManger} />
          <Route exact path="/cim" component={CyberInstituteManger} />
          <Route exact path="/sm" component={SmartBoard} />

          {/* Hire DEveloper */}
          <Route exact path="/full_stack_developer.php" component={FullStack} />
          <Route
            exact
            path="/angular_developer.php"
            component={FullStackAngular}
          />
          <Route
            exact
            path="/backend_developer.php"
            component={FullStackBackend}
          />
          <Route exact path="/mern_developer.php" component={FullStackMern} />
          <Route
            exact
            path="/dot_net_developer.php"
            component={FullStackDotNet}
          />
          <Route
            exact
            path="/wordpress_developer.php"
            component={FullStackWordpress}
          />
          <Route exact path="/ui_ux.php" component={FullStackUiUx} />
          <Route exact path="/laravel.php" component={FullStackLaravel} />
          <Route
            exact
            path="/magento_developer.php"
            component={FullStackMagento}
          />
          <Route exact path="/mobile_app.php" component={FullStackMobile} />
        </Switch>
        <Mark />
        <Logo />
        <Footer />
      </Router>
    </>
  );
}

export default App;
