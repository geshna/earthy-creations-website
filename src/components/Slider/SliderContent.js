import React, { Component } from 'react';
import './SliderContent.css';
import Slide from './Slide.js'

export default class SliderContent extends Component {
    constructor(props) {
        super(props)
    }

    getWidth() {
        return this.props.width / this.props.slides.length;
    }

    render() {
        const styling = {
            transform: "translateX(-" + this.props.translate + "vw)",
            transition: "transform ease-out " + this.props.transition + "s",
            width: this.props.width + "vw"
        };
        return (
            <div style={styling} className="sliderContent">
                {this.props.slides.map((slide, i) => (
                    <Slide key={slide + i} content={slide} width={this.getWidth()} />
                ))}
            </div>
        )
    }
}
