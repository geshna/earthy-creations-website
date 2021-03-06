import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Artworks from './pages/Artworks/Artworks';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Artists from './pages/Artists/Artists';
import Blog from './pages/Blog';
import Cart from './pages/Cart/Cart';
import Exhibits from './pages/Exhibits/Exhibits';
import Exhibit from './pages/Exhibit/Exhibit';
import ArtworkDetails from './pages/ArtworkDetails/ArtworkDetails';
import Footer from './components/Footer/Footer';
import Team from './pages/Team/Team';
import ArtistDetails from './pages/ArtistDetails/ArtistDetails';

/**
 * Responsible for rendering the NavBar, the logic for 
 * switching/rendering different pages, and the footer.
 */
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/artists" component={Artists}></Route>
        <Route path="/artistdetails" component={ArtistDetails}></Route>
        <Route path="/shop" component={Artworks}></Route>
        <Route path="/details" component={ArtworkDetails}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route exact path="/exhibits" component={Exhibits}></Route>
        <Route path="/exhibits" component={Exhibit}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
