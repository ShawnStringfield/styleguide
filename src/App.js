import React from 'react';
import Header from './components/common/Header';
import IntroText from './components/text/IntroText';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
