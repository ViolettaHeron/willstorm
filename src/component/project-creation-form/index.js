import React from 'react';
import './project-creation-form.css';

class ProjectDashboardCreation extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (
            <div className={'dashbord-create-form'}>
                <form onSubmit={() => this.createPlan}>
                    I want to have
                    <input className={'creation-form--input text-input'} type={'number'} defaultValue={10000}/>
                    € in
                    <input className={'creation-form--input text-input'} type={'number'} defaultValue={24}/>
                    month.
                    I already have
                    <input className={'creation-form--input text-input'} type={'number'} defaultValue={2000}/>
                    €.
                    <button className={'creation-form--input submit-input'}>
                        Create a plan for me.
                    </button>
                </form>
            </div>
        );
    }

    createPlan(plan) {
        console.log(plan);
    }
}

export default ProjectDashboardCreation;