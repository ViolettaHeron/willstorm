import React from 'react';
import './project-creation-form.css';

class ProjectDashboardCreation extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (
            <div className={'dashbord-create-form'}>
                <form>
                    I want to have
                    <input className={'creation-form--input text-input'} type={'number'} value={10000}/>
                    € in
                    <input className={'creation-form--input text-input'} type={'number'} value={24}/>
                    month.
                    I already have
                    <input className={'creation-form--input text-input'} type={'number'} value={2000}/>
                    €.
                    <button className={'creation-form--input submit-input'}>
                        Create a plan for me.
                    </button>
                </form>
            </div>
        );
    }
}

export default ProjectDashboardCreation;