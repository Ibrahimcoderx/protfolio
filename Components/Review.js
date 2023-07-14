import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

const Review = () => {

  return (

    <div>

        <section className='ReviewSec'>

            <Container>
                <Row>
                    <Col>

                        <div className='ReviewDiv'>

                            <div className='ReviewItem'>

                                <h3>02</h3>
                                <h4>Awards</h4>

                            </div>

                            <div className='ReviewItem'>

                                <h3>15+</h3>
                                <h4>Clients</h4>

                            </div>

                            <div className='ReviewItem'>

                                <h3>03</h3>
                                <h4>Years  Experience</h4>

                            </div>

                            <div className='ReviewItem'>

                                <h3>60+</h3>
                                <h4>Projects</h4>

                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </section>


    </div>

  )

}

export default Review