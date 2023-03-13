import React, { Component } from "react";
import Slide from "react-reveal";
import { Card } from 'antd';


class ImageFormatter extends Component {
  
  render() {
    
    return (
      <section className="class1">
        <Slide left duration={1300}>
          <div className="container">
            <div className="row">
              <div className="col">
                <img src="http://store-images.s-microsoft.com/image/apps.31555.13902594127995670.af475b73-705c-4812-9661-ad4c09148957.7a7fc6b3-017f-42e1-b3d2-d41d7313c9e2" className="image" />
              </div>
              <div className="col" onClick={() => alert('check')}>
                <Card title="Image Format Conversion" style={{ width: 500 }} hoverable>
                  <p>Users can convert their images into the desired format, such as JPEG, PNG, and more.</p>
                </Card>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default ImageFormatter;
