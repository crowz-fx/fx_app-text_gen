import React, { Component } from 'react';

class TextGen extends Component {
    
    // create the initial state filled with elements
    constructor(props) {
        super(props);
        this.state = {
            paragraphs: '4'
        }
    }

    // method to contain and return the div content to display on button submit
    returnAdditionalDisplay(response) {
        return <div>
                <div className="pulledText">
                    <h3>Result:</h3>
                    <p>{response}</p>
                </div>
            </div>;
    }

    // fetches the json from the API and parses it back
    getTextFromAPI() {
        fetch('https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paragraphs + '&start-with-lorem=1')
        .then((response) => response.json())
            .then((responseJson) => {
            this.setState({
                additionalDisplay: this.returnAdditionalDisplay(responseJson)
            }, function() {
                console.log(this.state);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    chanageParagraphs(number) {
        this.setState({
            paragraphs: number.target.value,
            additionalDisplay: ''
        });
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Text Generator</h2>
                <p>This is a small react application to fetch and parse the JSON from the <a id="referenceLink" href="https://baconipsum.com/" target="_blank" rel="noopener noreferrer">Bacon Ipsum API</a>. </p>
                <a id="returnLink" href="https://luicrowie.me/portfolio/apps">&lt;-- return to app central</a>

                <div className="inputParams">
                    <label>Number of paragraphs:</label>
                    <input className="text-gen-input" onChange={this.chanageParagraphs.bind(this)}/>
                    <div id="submitAPI" onClick={this.getTextFromAPI.bind(this)}>Fetch!</div>
                </div>

                {this.state.additionalDisplay}             

                <div id="footer">Everything is Created, Updated and Written by Lui Crowie - all rights reserved (Less the Bacon Ipsum API)</div>
            </div>
        );
    }
}

export default TextGen;