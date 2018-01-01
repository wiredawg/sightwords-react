import React from 'react';

export default class Controls extends React.Component {
    render() {
        return (
            <div id='controls-wrapper'>
                <div id='prev-button'  className='control-button' onClick={this.props.prevWord}>&#x21E4;</div>
                <div id='next-button'  className='control-button' onClick={this.props.nextWord}>&#x21E5;</div>
                <div id='rand-button'  className='control-button' onClick={this.props.randWord}>&#x2744;</div>
                <div id='reset-button' className='control-button' onClick={this.props.reset}>&#x21ba;</div>
            </div>
        );
    }
}

