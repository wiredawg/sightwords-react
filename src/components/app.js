// ---------------------------------------------------------------------------

import React, { Component } from 'react';

import Config from '../config';
import WordBox from './wordbox';
import Controls from './controls';

import '../css/app.css';

// ---------------------------------------------------------------------------

/**
 * Main Component
 */

class App extends Component {

    constructor() {
        super();
        this.state = {
            cntr     : 0,
            wordlist : [],
            page     : 0,
            max      : 0,
            maxpage  : 0
        };
    }

    componentDidMount() {
        this.init_state();
    }

    // -----------------------------------------------------------------------

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">My Sight Words</h1>
                </header>
                <WordBox word={this.state.wordlist[this.state.cntr]}/>
                <Controls 
                    prevWord={this.prevWordButton}
                    nextWord={this.nextWordButton}
                    randWord={this.randWordButton}
                    reset={this.resetButton}
                />
            </div>
        );
    }

    // -----------------------------------------------------------------------

    init_state = () => {
        let wordlist = Object.keys(Config.words);

        let initial_state = {
            cntr: 0,
            wordlist: wordlist,
            page: Config.words[wordlist[0]],
            max: wordlist.length,
            maxpage: Config.maxpage
        };

        this.setState(initial_state, ()=>{
            console.log("state: ", this.state);
        });
    }

    prevWordButton = () => {
        let v = (this.state.cntr - 1) % this.state.max;
        if ( v < 0 ) {
            v = this.state.max - 1;
        }
        this.setState( {cntr: v}, () => {
            console.log("state: ", this.state);
        });
    }

    nextWordButton = () => {
        this.setState( {cntr: (this.state.cntr + 1) % this.state.max}, () => {
            console.log("state: ", this.state);
        });
    }

    randWordButton = () => {
        let v = ( Math.floor(Math.random() * 100) ) % this.state.max;
        this.setState( {cntr: v}, () => {
            console.log("state: ", this.state);
        });
    }

    resetButton = () => {
        this.init_state();
    }

}

export default App;
