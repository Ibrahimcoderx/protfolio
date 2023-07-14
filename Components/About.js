import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {



  return (

    <div>

        <section className='AboutSec' id='AboutUs'>

            <Container>
                <Row>
                    <Col>

                        <div>

                                <h2 className='Abouth2'>Skill Development</h2>



                            <div className='progressBox'>

                                <h4>Web design</h4>

                                <div>Html</div>
                                <div>Css</div>
                                <div>JavaScript</div>
                                <div>Bootstrap</div>
                                <div>React js</div>
                                <div>React bootstrap</div>
                                <div>Next Js</div>
                                <div>Swiper Js</div>


                                <h4>Web Development</h4>

                                <div>Node js</div>
                                <div>Express js</div>
                                <div>Mongo DB</div>
                                <div>Mongoose</div>
                           
                              
                                <h4>Productivity</h4>

                                <div>Git + Github, Bitbucket & Sourcetree</div>
                                <div>Microsoft Office</div>
                                <div>Microsoft excel</div>

                                <h4>Design</h4>

                                <div>Photoshop</div>
                                <div>Figma</div>
                                <div>User Experience</div>


                               



                            </div>

                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>





    </div>

  )
}

export default About