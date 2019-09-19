import React, { Component } from 'react';
import WordCard from './WordCard'
import './App.css'
import _ from 'lodash';

class App extends Component {
    render() {
        return (
        <div>
        <WordCard value="hello"/>
        </div>
        );
       }
       
}

export default App;