import React, { Component } from 'react';

class SubmitBtn extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="submitBtn">
                <button className="btn">
                    Submit
                </button>
            </div>
        );
    }
}

export default SubmitBtn;