import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/passport">Passport Photo Creation</Link>
            </li>

            <li>
              <Link to="/photoresizeandcrop">Photo Resize & Crop</Link>
            </li>

            <li>
              <Link to="/photocollage">Photo Collage</Link>
            </li>

            <li>
              <Link to="/noiseremoval">Noise Removal</Link>
            </li>

            <li>
              <Link to="/imageformatconversion">Image Format Conversion</Link>
            </li>

            <li>
              <Link to="/brightnessandcontrast">Brightness & Contrast</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/photoresizeandcrop" element={<PhotoResizeAndCrop />} />
          <Route path="/photocollage" element={<PhotoCollage />} />
          <Route path="/noiseremoval" element={<NoiseRemoval />} />
          <Route path="/imageformatconversion" element={<ImageFormatter />} />
          <Route path="/brightnessandcontrast" element={<BrightnessAndContrast />} />
        </Routes>
      </div>
    );
  }
}

export default App;