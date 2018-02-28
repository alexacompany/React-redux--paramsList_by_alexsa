import React, { Component } from 'react';
import { Field } from 'redux-form';

class ItemParams extends Component {

    render() {
        const { item } = this.props;
        return (
            <div className="wrapSelect">
                <div className="itemHeader">
                    {item.name}
                </div>
                <div className="itemProp">
                    <Field name={item.name} component="select" className="params">
                        <option/>
                        <option value={item.prop1}>{item.prop1}</option>
                        <option value={item.prop2}>{item.prop2}</option>
                        <option value={item.prop3}>{item.prop3}</option>
                        <option value={item.prop4}>{item.prop4}</option>
                        <option value={item.prop5}>{item.prop5}</option>
                    </Field>
                </div>
            </div>
        )
    }
}

export default ItemParams;