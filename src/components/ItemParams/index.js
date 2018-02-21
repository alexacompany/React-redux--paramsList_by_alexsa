import React, { Component } from 'react';

class ItemParams extends Component {
    constructor(props) {
        super(props)
    }
    deleteBlock(id) {
        this.props.delete(id)
    }
    render() {

        return (
            <ul className="selectItem">
                {
                    this.props.add.map((item, index) => {
                        return (
                            <li className="itemForm"
                                key={index}
                                index={index}>
                                <div className="wrapSelect">
                                    <div className="itemHeader">
                                        {item.name}
                                        <div className='btnItem'
                                             onClick={this.deleteBlock.bind(this)}>
                                            <i className="far fa-times-circle"></i>
                                        </div>
                                    </div>
                                    <div className="itemProp">
                                        <select className="params">
                                            <option value={item.prop1}>{item.prop1}</option>
                                            <option value={item.prop2}>{item.prop2}</option>
                                            <option value={item.prop3}>{item.prop3}</option>
                                            <option value={item.prop4}>{item.prop4}</option>
                                            <option value={item.prop5}>{item.prop5}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="wrapView">
                                    <div className="testInfo">
                                        <p className="text">

                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}

export default ItemParams;