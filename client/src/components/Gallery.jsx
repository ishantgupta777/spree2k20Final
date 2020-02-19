import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

export default function Gallery() {
	return (
		<div>
			<section id="gallery">
				<h1>Gallery</h1>
				<div className="carasoul">
					<Carousel
						useKeyboardArrows={true}
						showArrows={true}
						infiniteLoop
						autoPlay
						showThumbs={false}
						emulateTouch
						showStatus={false}
						transitionTime={700}
					>
						<div className="full">
							<img src={require('../assets/img/5.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/3.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/13.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/1.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/2.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/6.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/7.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/8.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/9.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/10.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/11.jpg')} alt="" />
						</div>
						<div className="full">
							<img src={require('../assets/img/12.jpg')} alt="" />
						</div>

						{/* <div className="full">
                                <div className="left">
                                    <img src={require("../assets/img/4.jpg")} alt=""/>
                                </div>
                                <div className="right">
                                    <div className="up">
                                        <img src={require("../assets/img/5.jpg")} alt=""/>
                                    </div>
                                    <div className="down">
                                        <img src={require("../assets/img/6.jpg")} alt=""/>
                                    </div>
                                </div>
                            </div>   
                            <div>
                                <img src={require("../assets/img/8.jpg")} alt=""/>
                            </div>
                            <div className="full">
                                <div className="right">
                                    <div className="up">
                                        <img src={require("../assets/img/9.jpg")} alt=""/>
                                    </div>
                                    <div className="down">
                                        <img src={require("../assets/img/10.jpg")} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="full">
                                <div className="left">
                                    <img src={require("../assets/img/1.jpg")} alt=""/>
                                </div>
                                <div className="right">
                                    <div className="up">
                                        <img src={require("../assets/img/2.jpg")} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="full">
                                <div className="left">
                                    <img src={require("../assets/img/7.jpg")} alt=""/>
                                </div>
                                <div className="right">
                                    <div className="up">
                                        <img src={require("../assets/img/11.jpg")} alt=""/>
                                    </div>
                                </div>
                            </div>                          */}
					</Carousel>
				</div>
			</section>
		</div>
	);
}
