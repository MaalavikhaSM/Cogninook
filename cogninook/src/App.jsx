import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Services, Team , CTA} from './container';
import { Menu } from './components';
//import {Hero} from './container/Hero;




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
