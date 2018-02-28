import React, { Component } from 'react';

class BtnDelete extends Component {
    constructor(props) {
        super(props);
        this.deleteBlock = this.deleteBlock.bind(this);
    }
    deleteBlock() {
        let index = this.props.index;
        this.props.deleteFn(index)
    }
    render() {
        return (
        <div className="btnClose" onClick={this.deleteBlock}>
            <div className="inner"></div>
        </div>
        )
    }
}

export default BtnDelete;