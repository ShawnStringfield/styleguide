import React, { Component } from 'react';
import Intro from '../text/IntroText';
import Experience from '../lists/exp';

class Home extends Component {
    render() {
        return(
            <div>
                <Intro />
                <Experience />
            </div>
        )
    }
}

export default Home;
