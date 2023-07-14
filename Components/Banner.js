import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin,AiOutlineTwitter } from "react-icons/ai";

const Banner = () => {

  return (

    <div className='BannerBg'>

        <section>

            <Container>

                <Row className='BannerRow'>

                    <Col lg={6}>

                        <div className='BannerTxtBox'>

                            <h1 >I am <span>Ibrahim Hossain </span></h1>

                            <h1 className="line-1 anim-typewriter">I am a Web Designer</h1>

                            <p>
                                Welcome to my officail Portfolio Website Where | put all
                                my work related to my designs and many more.
                            </p>


                            <Link href="/cv.pdf" download="cv">
                                 <button  href="" className="glow-on-hover" type="button">Download Cv</button>
                            </Link>

                            <div>

                            <Link href="https://www.facebook.com/ibrahimhossain52666" target='_blank'>
                                
                              <FaFacebookSquare/>

                            </Link>
                            <Link href="https://www.linkedin.com/in/ibrahim-hossain-001b62224/" target='_blank'>

                              <AiFillLinkedin/>

                            </Link>
                            <Link href="#">

                              <AiOutlineTwitter/>

                            </Link>


                            </div>


                        </div>
                        
                    </Col>

                    <Col lg={6}>

                    <div className='BannerImgDiv'>

                       <img src='/2.png'></img>

                    </div>
                     

                    </Col>

                </Row>

            </Container>

        </section>


    </div>

  )

}



export default Banner