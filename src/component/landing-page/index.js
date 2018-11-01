import React, {Component} from 'react';
import classnames         from 'classnames';
import './landing-page.css';

import Form  from '../project-creation-form';
import Infos from '../informations';


class Landing extends Component {
    constructor() {
        super();
        this.state = {learnMore: false};
    }

    render() {
        return (
            <div className="landing-page">
                <div className={'landing-page-header-container'}>
                    <div className={'landing-page-header--title-container'}>
                        <h1 className={'landing-page-header--title'}>Willstorm</h1>
                    </div>
                    {!this.state.learnMore && <div className={'landing-page-header--see-more'}>
                        <button className={'landing-page-header--see-more--button'}
                                onClick={() => this.setState({learnMore: !this.state.learnMore})}> Learn more
                        </button>
                    </div>
                    }
                </div>
                <div className={'landing-page-website-content-container'}>
                    <div className={classnames({'landing-page-website-seemore': true, deployed: this.state.learnMore})}>
                        <Infos/>
                        <button className={'landing-page-header--see-more--button'}
                                onClick={() => this.setState({learnMore: !this.state.learnMore})}> Hide
                        </button>
                    </div>
                    <Form prop="test"/>
                </div>
            </div>
        );
    }
}

export default Landing;