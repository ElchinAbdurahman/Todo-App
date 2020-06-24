import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <Row className=" py-3 footer" style={{ marginTop: "31%"}}>
                <Col xs="12">
                    <p className="text-white text-center">All rights are reserved</p>
                </Col>
            </Row>



        )
    }
}
export default Footer;
