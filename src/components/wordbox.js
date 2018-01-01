import React, { Component } from 'react';

class Arrow extends Component {
    render() {
        let state = (this.props.state === 1) ? 'active' : 'inactive';
        return (
            <div id="arrow" className={state}>&rarr;</div>
        );
    }
}

class WordBox extends Component {
    render() {
        return (
            <div id='wordbox-wrapper'>
                <div id="wordbox">{this.props.word}</div>
                <Arrow state={1} />
            </div>
        );
    }
}

export default WordBox;
