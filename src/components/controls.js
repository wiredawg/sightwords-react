import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Controls extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={6} md={6}>
                        <div id='prev-button'  className='control-button' onClick={this.props.prevWord}>&#x21E4;</div>
                    </Col>
                    <Col sm={6} md={6}>
                        <div id='next-button'  className='control-button' onClick={this.props.nextWord}>&#x21E5;</div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={6} md={6}>
                        <div id='rand-button'  className='control-button' onClick={this.props.randWord}>&#x2744;</div>
                    </Col>
                    <Col sm={6} md={6}>
                        <div id='reset-button' className='control-button' onClick={this.props.reset}>&#x21ba;</div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

