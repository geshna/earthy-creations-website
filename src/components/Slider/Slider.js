import React, { Component } from 'react';
import "./Slider.css";
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Dots from './Dots';
import WhiteButton from '../WhiteButton/WhiteButton';

/**
 * This component is responsible for rendering a Slider,
 * including the images, navigation dots, descriptions, and arrows.
 *
 * This will be used on the Home and Exhibits pages to display sliders
 * that serve different purposes.
 *
 * Props:
 * - slides: the images that will be displayed on the slider
 * - text: text of WhiteButton (currently not being used because of
 *   scaling issues)
 * - path: page that the slider links to (can be the same or different
 *   for each slide)
 * - buttonID: id of WhiteButton (not being used at the moment)
 * - type: type of slider
 * - link: boolean value that indicates whether or not the slider links to anything
 */
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: 0,
            transition: 0.65,
            currIndex: 0
        };
        this.changeSlide = this.changeSlide.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.nextSlide, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getWidth() {
        return 90;
    };

    nextSlide = () => {
        if (this.state.currIndex === this.props.slides.length - 1) {
            return this.setState({
                ...this.state,
                translate: 0,
                currIndex: 0
            });
        }

        this.setState({
            ...this.state,
            currIndex: this.state.currIndex + 1,
            translate: (this.state.currIndex + 1) * this.getWidth()
        });
    };

    prevSlide = () => {
        if (this.state.currIndex === 0) {
            return this.setState({
                ...this.state,
                translate: (this.props.slides.length - 1) * this.getWidth(),
                currIndex: this.props.slides.length - 1
            });
        }

        this.setState({
            ...this.state,
            currIndex: this.state.currIndex - 1,
            translate: (this.state.currIndex - 1) * this.getWidth()
        });
    };

    changeSlide(newIndex) {
        this.setState({
            ...this.state,
            currIndex: newIndex,
            translate: newIndex * this.getWidth()
        });
        this.resetInterval();
    }

    resetInterval() {
        clearInterval(this.interval);
        this.interval = setInterval(this.nextSlide, 5000);
    }

    render() {
        return (
            <div className="slider fade-in">
                <SliderContent translate={this.state.translate} transition={this.state.transition} width={this.getWidth() * this.props.slides.length} slides={this.props.slides} type={this.props.type} text={this.props.text} link={this.props.link} names={this.props.names} dates={this.props.dates} />
                {this.props.slides.length > 1 &&
                    <React.Fragment>
                        <Arrow direction="left"
                            handleClick={() => {
                                this.prevSlide();
                                this.resetInterval();
                            }}
                        />
                        <Arrow direction="right"
                            handleClick={() => {
                                this.nextSlide();
                                this.resetInterval();
                            }}
                        />
                        <Dots slides={this.props.slides} currIndex={this.state.currIndex} handleClick={this.changeSlide} />
                        {this.props.link && false && <WhiteButton text={this.props.text} path={this.props.path} buttonid={this.props.buttonid} />}
                    </React.Fragment>
                }
            </div>
        );
    }
}
