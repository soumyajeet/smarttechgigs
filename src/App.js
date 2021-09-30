import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Upper from './components/Upper';
import Privacy  from './components/Privacy';
import Terms from './components/Terms';
import Choosehosting from './components/Choosehosting';
import Appnav from './components/Appnav';
import Freesoftware from './components/Freesoftware';
import Details from './components/Details';
import Login from './components/Login';



import {
  BrowserRouter as Router,
  Route
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
        <Route exact path="/hosting">
          <Appnav />

          <Choosehosting />
          <Footer />
        </Route>
        <Route exact path="/privacy">
          <Appnav />

          <Privacy />
          <Footer />
        </Route>
        <Route exact path="/terms">
          <Appnav />

          <Terms />
          <Footer />
        </Route>
        <Route exact path="/freesoftwares">
          <Appnav />
          <Freesoftware />
          <Footer />
        </Route>

        <Route exact path='/details/:details' component={Details}>
          <Appnav />
          <Details />
          <Footer />
        </Route>

        <Route exact path='/login' component={Login}>
          <Appnav />
          <Login />
          <Footer />
        </Route>

      </Router>
    </>
  );
}

export default App;
