import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Services = () => {

  return (

    <div>

        <section className='ServicesSec' id='Services'>
            <Container>

                <Row>

                    <div style={{marginBottom:"100px"}}>

                     <h2 className='Servicesh2'> My Services</h2>

                    </div>
            

                    <Col lg={4}>

                        <div className='ServicesDiv'>

                            <h2>UX Research</h2>

                            <p>It’s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.</p>
                            
                        </div>    

                    </Col>
                    <Col lg={4}>

                        <div className='ServicesDiv'>

                            <h2>UX Auditing</h2>

                            <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
                            
                        </div>    

                    </Col>
                    <Col lg={4}>

                        <div className='ServicesDiv'>

                            <h2>UX Consultation</h2>

                            <p>If you don’t know what kind of service to request from us, don’t worry. I can help and see what fits your business and your budget.  actual design or redesign of digital products</p>
                            
                        </div>    

                    </Col>

                    <Col lg={4}>

                        <div className='ServicesDiv'>

                            <h2>Front End Develop</h2>

                            <p> Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it</p>
                            
                        </div>    

                    </Col>


                    <Col lg={4}>

                        <div className='ServicesDiv'>

                            <h2>Mobile Apps Design</h2>

                            <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                            
                        </div>    

                    </Col>
                    <Col lg={4}>

                        <div className='ServicesDiv'>

                            <h2>Responsive Design</h2>

                            <p>I leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes. user friendly mobile designs, themes,</p>
                            
                        </div>    

                    </Col>


                </Row>
            </Container>
        </section>




    </div>

  )

}

export default Services