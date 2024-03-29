import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import React, { useState } from 'react';




const Menubar = () => {


  return (

    <div>
        

        <section className="MenubarMainSec">

            <Container>

                <Row>

                    <Col>

                        <div className="MenubarMain">

                            <div className="ManubarItem1">

                            <Link href="/"> 
                                <img src='1.png'></img>
                            </Link>
                              

                            </div>

                            <div className="ManubarItem2">

                                    <Link href="/"> Home</Link>
                                    <Link href="#Portfolio"> Portfolio</Link>
                                    <Link href="#Services"> Services</Link>
                                    <Link href="#AboutUs"> About Us </Link>
                                    <Link href="#ContactUs"> Contact Us</Link>

                            </div>

                            <div className="ManubarItem3">

                                <Link href="#ContactUs">

                                    <button className="glow-on-hover" >Hire Me</button>

                                </Link>
                              

                            </div>

                        </div>
                    
                    </Col>

                </Row>

            </Container>

            
        </section>


        
        
    </div>

  )

}

export default Menubar
