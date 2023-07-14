import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Experence = () => {

  return (

    <div>
        
        <section className='ExperienceSec'>

            <Container>

                <Row>

                    <div className='Experiencehtdiv'>

                        <h2>Work Experience</h2>

                    </div>

                    <Col lg={4}>

                        <Link href="https://funnelliner.com/" target='_blank'>

                            <div className='ExperenceDiv'>
                                    <h2>Soft IT Care</h2>
                                    <p> The First Ever Automated E-Commerce Sales Funnel and development service-providing company in Bangladesh.</p>
                            </div>

                        </Link>

                    </Col>
                    <Col lg={4}>

                        <Link href="https://www.facebook.com/Extensionmainul/">

                            <div className='ExperenceDiv'>
                                    <h2>Mainul's Extension</h2>
                                    <p>This is Mainul's Extension. We are Professional SEO experts for you to increase sales and growth of your business. </p>
                            </div>

                        </Link>

                    </Col>
                    <Col lg={4}>

                        <Link href="http://www.tehtarikplace.my/">

                            <div className='ExperenceDiv'>
                                    <h2>Teh Tarik Place</h2>
                                    <p> (Other side job) Teh Tarik Place is a popular Malaysian restaurant chain that specializes in traditional Malaysian cuisine </p>
                            </div>

                        </Link>

                    </Col>




                </Row>

            </Container>

        </section>

        

    </div>

  )
}

export default Experence