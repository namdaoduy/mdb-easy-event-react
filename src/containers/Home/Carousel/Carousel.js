import React, { Component } from "react"
import {
  Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask
} from 'mdbreact'

export default class Event extends Component {
  render() {
    return (
      <div id="home-carousel" className="home-carousel">
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/google.jpg")} alt="" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive capt">GOOGLE DIGITAL 4.0</h3>
                <p>Hà Nội</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/google.jpg")} alt="" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive capt">GOOGLE DIGITAL 4.0</h3>
                <p>Hà Nội</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/google.jpg")} alt="" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive capt">GOOGLE DIGITAL 4.0</h3>
                <p>Hà Nội</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/google.jpg")} alt="" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive capt">GOOGLE DIGITAL 4.0</h3>
                <p>Hà Nội</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </div>
    )
  }
}