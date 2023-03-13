import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { Routes,Route} from "react-router";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PassportPhotoCreation from "./Components/PassportPhotoCreation";
import PhotoResizeAndCrop from "./Components/PhotoResizeAndCrop";
import NoiseRemoval from "./Components/NoiseRemoval";
import PhotoCollage from "./Components/PhotoCollage";
import ImageFormatter from "./Components/ImageFormatter";
import BrightnessAndContrast from "./Components/BrightnessAndContrast";
import Passport from "./MainComponents/passport";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }



  render() {
    return (
      <div className="Home">
        <Header/>
        <PassportPhotoCreation />
        <PhotoResizeAndCrop  />
        <PhotoCollage  />
        <NoiseRemoval  />
        <ImageFormatter/>
        <BrightnessAndContrast/>
        <Footer  />
      </div>
    );
  }
}

export default Home;
