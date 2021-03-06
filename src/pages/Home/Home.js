import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './Home.css';
import Slider from '../../components/Slider/Slider';
import slide1 from '../../images/slide_1.jpg';
import slide2 from '../../images/slide_2.jpg';
import slide3 from '../../images/slide_3.jpg';
import slide4 from '../../images/slide_4.jpg';
import CenterParagraph from '../../components/CenterParagraph/CenterParagraph';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import sculptures from '../../images/sculptures.png';
import roomdecor from '../../images/roomdecor.png';
import paintings from '../../images/paintings.png';
import jewelry from '../../images/jewelry.png';
import clothes from '../../images/clothes.png';
import Materials from '../../components/Materials/Materials';
import Spotlight from '../../components/Spotlight/Spotlight';
import Exhibition from '../../components/Exhibition/Exhibition';

/**
 * Home page.
 * Responsible for rendering a Slider, linking to the shop in various places,
 * and highlighting certain arists and exhibits.
 *
 * State:
 * - none
 */
export default class Home extends Component {
    render() {
        const images = [
            slide1,
            slide2,
            slide3,
            slide4
        ]
        return (
            <div className="home">
                <Slider slides={images} text="Shop Now" path="/shop" buttonid="shopButton" type="shop" link={true} />
                <div className="title">
                    <Title text="JOIN THE MOVEMENT" color="yellow" />
                </div>
                <div className="centerParagraph">
                    <CenterParagraph fontSize="24" color="gray" text="Our mission is to get people across the nation thinking and talking about creative ways to repurpose recyclable goods while also helping young, aspiring artists reach their creative dreams."/>
                </div>
                <div className="homeCategories">
                    <HomeCategory image={sculptures} text="SCULPTURE" />
                    <HomeCategory image={roomdecor} text="ROOM DECOR" />
                    <HomeCategory image={paintings} text="PAINTINGS" />
                    <HomeCategory image={jewelry} text="JEWELRY" />
                    <HomeCategory image={clothes} text="CLOTHES" />
                </div>
                <div className="materials">
                    <Materials />
                </div>
                <Spotlight />
                <Exhibition />
            </div>
        )
    }
}
