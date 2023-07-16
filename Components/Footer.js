
import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";



const Footer = () => {
  return (

    <div>

        <section className='FooterSec' id='ContactUs'>

            <Container>

                <Row>

                    <Col lg={4}>
                        
                        <br/>
                        <img src='1.png'></img>
                            
                    </Col>

                    <Col lg={4}>

                        <div className='BannerTxtBox2'>
                             <h4>Social media</h4>

                             <Link href="https://www.facebook.com/ibrahimhossain52666" target='_blank'>
                                
                                <FaFacebookSquare/>
  
                              </Link>
                              <Link href="https://www.linkedin.com/in/ibrahim-hossain-001b62224/" target='_blank'>
  
                                <AiFillLinkedin/>
  
                              </Link>
                              <Link href="https://github.com/Ibrahimcoderx" target='_blank'>
  
                                <BsGithub/>
  
                              </Link>

                        </div>
    


                            
                    </Col>

                    <Col lg={4}>

                        <h4>Contact Now</h4>
                        <p>Whatapps: +8801307878605</p>
                        <p>Email: ibrahimhossain526@gmail.com</p>
                            
                    </Col>

                </Row>

            </Container>

        </section>


    </div>

  )
}

export default Footer