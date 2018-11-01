import React, {Component} from 'react';
import './App.css';
import { Route} from 'react-router-dom'
import Landing from './component/landing-page'

class App extends Component {
    constructor() {
        super();
        this.state = {learnMore: false};
    }

    render() {
        return (
            <div className="App">
                <main>
                    <Route exact path="/" component={Landing} />
                </main>
            </div>
        );
    }
}

export default App;
