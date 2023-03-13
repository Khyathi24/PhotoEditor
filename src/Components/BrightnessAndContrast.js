import React, { Component } from "react";
import Slide from "react-reveal";
import { Card } from 'antd';


class BrightnessAndContrast extends Component {
  
  render() {
    
    return (
      <section className="class2">
        <Slide left duration={1300}>
          <div className="container">
            <div className="row">
              
              <div className="col" onClick={() => alert('check')}>
                <Card title="Brightness and Contrast" style={{ width: 500 }} hoverable>
                  <p>Users will be able to adjust the brightness and contrast of their photos to improve the overall look.</p>
                </Card>
              </div>
              <div className="col">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci2ouAMeuzt13WH12zo__-QD2nihq8D-PjA&usqp=CAU" className="image" />
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default BrightnessAndContrast;
