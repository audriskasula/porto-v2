import React from 'react'
import { DFlex, DFlexJustifyBetween } from '../../../Styled/flex.styled'
import { Badge, Col, Row } from 'react-bootstrap'
import JazzManIllustration from '../../Illustration/JazzManIllustration'

export default function HeroSection() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <DFlex className='gap-3'>
                        <h1 className='m-0'>Hii!! Am a</h1>
                        <Badge className='rounded p-2'>Front End Developer</Badge>
                    </DFlex>
                    <h2 className='m-0 text-primary'>Audris Kasula</h2>
                    <p className='m-0 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit.Ex dolorum ipsam quod</p>
                </Col>
                <Col md={6}>
                    <DFlexJustifyBetween>
                        <JazzManIllustration />
                    </DFlexJustifyBetween>
                </Col>
            </Row>
        </div>
    )
}
