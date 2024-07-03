import { Image } from 'antd';
import React from 'react'
import Testing from '~/components/Testing'
import Container from '~/components/layouts/Container';

const aniket = () => {
  return (
    <Container title="About Us">
      <main className="ps-page ps-page--inner">
        
        <hr />
        <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="container">
                      
                        
                      <section className="ps-about--info">
                        <h1> About US</h1>
                        <h3 className="ps-block__title">
                            Our Story
                        </h3>
                        <hr />
                        <div className="ps-section__content">
                          <div className="ps-section__desc">
                          Healthfirst Medicorp is one of India’s largest healthcare and medical equipments wholesale supplier. We operate across 23 states and offer a quality range of first aid kits, hospital furniture, and medical equipment known for their low maintenance, high efficiency, and superior performance. These attributes have helped us surpass our competitors in quality, innovative technology, and ethical business practices.
                              <br />
                                        </div>
                              
                              <br />
                              Our director Mr. Ravi Singh, a seasoned professional with over 15 years of experience in the medical industry. With a distinguished background in the Indian Navy, Ravi brings a unique blend of discipline, dedication, and expertise to our company. His leadership and passion for improving healthcare have been the driving force behind our success.
                          </div>
                          <br />
                          <br />
                          <h3 className="ps-block__title">
                Director's Message
            </h3>
            <hr />
                      </section>
                        </div>
                        <div className="ps-about__content">
                        <section className="ps-about__project">
                              <div className="container"> 
                              <section className="ps-section--block-grid">
                    <div className="ps-section__thumbnail">
                        <a className="ps-section__image" href="#">
                            <Image
                                src="/static/img/Director.png"
                                height={350}
                                width={350}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="ps-section__content">
                        {/* <h3 className="ps-section__title">
                            Top quality products and proven suppliers with
                            quality certificates!
                        </h3> */}
                        {/* <div className="ps-section__subtitle">
                            They have CEE 2020 certificate.
                        </div> */}
                        <div className="ps-section__desc">
                            {/* <hr /> */}
                            
                            <h3 className="ps-section__title">
                                <img src="/static/img/quote-icon.png" alt="" />
                                {/* Latest reviews */}
                            </h3>
                            At Healthfirst Medicorp, Our mission is to enhance the quality of healthcare by providing state-of-the-art medical equipments that healthcare professionals can rely on. We push the boundaries of excellence in everything we do, so we can deliver the highest standards products that not only meet but exceed industry standards, ensuring the best care for patients.
                            <hr />
                        </div>
                        <h4>Ravi Singh</h4>
                        <p>Director & Chief Executive Officer</p>
                        {/* <ul className="ps-section__list">
                            <li>Study history up to 30 days</li>
                            <li>Up to 5 users simultaneously</li>
                            <li>Has HEALTH certificate</li>
                        </ul> */}
                    </div>
                </section>
                              </div>
                        </section>
                        </div>
                        
                    </div>
                  </div>

        
      </main>
    </Container>
  )
}

export default aniket;
