import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Upper from './components/Upper';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import Choosehosting from './components/Choosehosting';
import Appnav from './components/Appnav';
import Freesoftware from './components/Freesoftware';
import details from './components/Details';



import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Appnav />
          <Header />
          <Upper />

          <Footer />
        </Route>
        <Route path="/hosting">
          <Appnav />

          <Choosehosting />
          <Footer />
        </Route>
        <Route path="/privacy">
          <Appnav />

          <Privacy />
          <Footer />
        </Route>
        <Route path="/terms">
          <Appnav />

          <Terms />
          <Footer />
        </Route>
        <Route path="/freesoftwares">
          <Appnav />
          <Freesoftware />
          <Footer />
        </Route>
        <Route path="/details/:productid">
          <Appnav />
          <details />
          <Footer />
        </Route>
       

      </Router>
    </>
  );
}

export default App;
