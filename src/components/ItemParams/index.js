import React, { Component } from 'react';

class ItemParams extends Component {
    constructor(props) {
        super(props);
        // this.handlerValue = this.handlerValue.bind(this);
        this.handlerSave = this.handlerSave.bind(this);
        // this.handlerValue = this.handlerValue.bind(this);
    }

    handlerSave() {
        this.props.saveValueFn(this.setValue.value)
    }
    // handlerValue(e) {
    //     let x = e.target.value;
    // }


    render() {
    // console.log(this.handlerValue());
        return (
            <div className="wrapSelect">
                <div className="itemHeader">
                    {this.props.item.name}
                </div>
                <div className="itemProp">
                    <select
                        className="params"
                        // value={this.props.submit}
                        // onChange={this.handlerValue}
                        ref={(value) => {this.setValue = value}}
                    >
                        <option value={this.props.item.prop1}>{this.props.item.prop1}</option>
                        <option value={this.props.item.prop2}>{this.props.item.prop2}</option>
                        <option value={this.props.item.prop3}>{this.props.item.prop3}</option>
                        <option value={this.props.item.prop4}>{this.props.item.prop4}</option>
                        <option value={this.props.item.prop5}>{this.props.item.prop5}</option>
                    </select>
                </div>
                <div className="saveBtn">
                    <button
                        className="save"
                        onClick={this.handlerSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

export default ItemParams;