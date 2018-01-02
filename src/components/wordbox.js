import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Arrow extends Component {
    render() {
        let state = (this.props.state === 1) ? 'active' : 'inactive';
        return (
            <p id="arrow" className={state}>&rarr;</p>
        );
    }
}

class WordBox extends Component {
    render() {
        return (
            <Grid>
                <Row className='showGrid'>
                    <Col>
                        <p id="wordbox">{this.props.word}</p>
                    </Col>
                </Row>

                <Row className='showGrid'>
                    <Col>
                        <Arrow state={1} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default WordBox;
