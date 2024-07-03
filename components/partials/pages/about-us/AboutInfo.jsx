import React from "react";

const AboutInfo = () => {
    return (
        <section className="ps-about--info">
            {/* <h2 className="ps-about__title">
                Effective and reliable <br />
                protection for your teeth
            </h2> */}
            <h2> About Us </h2>
            
            <h3 className="ps-block__title">
                Our Story
            </h3>
            <hr />

            <div className="ps-block__subtitle">
                {/* The brush handle fits perfectly in the hand, is slim and
                beautifully made. */}
                Healthfirst Medicorp is one of India’s largest healthcare and medical equipments wholesale supplier. We operate across 23 states and offer a quality range of first aid kits, hospital furniture, and medical equipment known for their low maintenance, high efficiency, and superior performance. These attributes have helped us surpass our competitors in quality, innovative technology, and ethical business practices.
                <br />
                <br />
                Our director Mr. Ravi Singh, a seasoned professional with over 15 years of experience in the medical industry. With a distinguished background in the Indian Navy, Ravi brings a unique blend of discipline, dedication, and expertise to our company. His leadership and passion for improving healthcare have been the driving force behind our success.
            </div>
            <br /><br />
            <h3 className="ps-block__title">
                Director's Message
            </h3>
            {/* <h3 className="ps-block__title">
                Director's Message
            </h3> */}
            <hr />
            <div className="ps-block__subtitle">
            At Healthfirst Medicorp, Our mission is to enhance the quality of healthcare by providing state-of-the-art medical equipments that healthcare professionals can rely on. We push the boundaries of excellence in everything we do, so we can deliver the highest standards products that not only meet but exceed industry standards, ensuring the best care for patients.
            <br/>
            <br />
            <span>
                <h4>Ravi Singh</h4>
                
                <p> Director & Chief Executive Officer </p>
            </span>
            </div>
            
            
    
            <div className="ps-about__extent">
                <div className="row m-0">
                    <div className="col-12 col-md-4 p-0">
                        <div className="ps-block--about">
                            <div className="ps-block__icon">
                                <img
                                    src="/static/img/icon/award-icon-2.png"
                                    alt=""
                                />
                            </div>
                            <h4 className="ps-block__title">
                                Health Certificate 2000 - <br />
                                professional care
                            </h4>
                            <div className="ps-block__subtitle">
                                The highest quality and protection for your
                                teeth
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0">
                        <div className="ps-block--about">
                            <div className="ps-block__icon">
                                <img
                                    src="/static/img/icon/dentistry-icon-2.png"
                                    alt=""
                                />
                            </div>
                            <h4 className="ps-block__title">
                                Sonic cleaning <br />
                                and whitening power
                            </h4>
                            <div className="ps-block__subtitle">
                                At the same time, it protects and whitens
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0">
                        <div className="ps-block--about">
                            <div className="ps-block__icon">
                                <img
                                    src="/static/img/icon/toothbrush-icon-2.png"
                                    alt=""
                                />
                            </div>
                            <h4 className="ps-block__title">
                                3 types <br />
                                of cleaning tips
                            </h4>
                            <div className="ps-block__subtitle">
                                Round, rectangular and super-wide
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;
