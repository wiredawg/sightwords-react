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
                <Controls />
            </div>
        );
    }

    // -----------------------------------------------------------------------

    init_state = () => {
        let wordlist = Object.keys(Config.words);

        let initial_state = {
            wordlist: wordlist,
            page: Config.words[wordlist[0]],
            max: wordlist.length,
            maxpage: Config.maxpage
        };

        this.setState(initial_state, ()=>{
            console.log("state: ", this.state);
        });
    }

}

export default App;
