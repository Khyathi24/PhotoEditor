import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { Routes,Route} from "react-router-dom";
import Home from "./Home.js"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PassportPhotoCreation from "./Components/PassportPhotoCreation";
import PhotoResizeAndCrop from "./Components/PhotoResizeAndCrop";
import NoiseRemoval from "./Components/NoiseRemoval";
import PhotoCollage from "./Components/PhotoCollage";
import ImageFormatter from "./Components/ImageFormatter";
import BrightnessAndContrast from "./Components/BrightnessAndContrast";
import Passport from "./MainComponents/passport";
import history from './history';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }
  handleNavigate = () => {
    history.push('/passport');
  }

  render() {
    return (
      <div className="App">
         <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
            <button className="smoothscroll" onClick={()=>history.push('/')}>
                Home
              </button>
            </li>

            <li>
              <button className="smoothscroll" onClick={()=>history.push('/passport')}>
               Passport Photo Creation
              </button>
            </li>

            <li>
            <button className="smoothscroll" onClick={this.handleNavigate}>
                Photo Resize & Crop
              </button>
            </li>

            <li>
            <button className="smoothscroll" onClick={this.handleNavigate}>
                Photo Collage
              </button>
            </li>

            <li>
            <button className="smoothscroll" onClick={this.handleNavigate}>
                Noise Removal
              </button>
            </li>

            <li>
            <button className="smoothscroll" onClick={this.handleNavigate}>
                Image Format Conversion
              </button>
            </li>

            <li>
            <button className="smoothscroll" onClick={this.handleNavigate}>
                Brightness & Contrast
              </button>
            </li>
          </ul>
        </nav>
        <Routes>
      <Route path="/" Component={Home } />
      <Route path="/passport" Component={Passport } />
      </Routes>
      </div>
    );
  }
}

export default App;
