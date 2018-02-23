import React, { Component } from 'react';
import ItemParams from '../../components/ItemParams';
import BtnDelete from '../../components/BtnDelete';
import SubmitBtn from '../../components/SubmitBtn';

class MesageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.submit)
        return (
                <div className="paramsList">
                    <div className="paramsListHeader">
                        <div className="paramsAbout">
                            <div className="titleHeader">Params</div>
                            <div className="subTitle">Select your params</div>
                        </div>
                        <div className="paramsQuantity">
                            <p className="titleProperty">
                                now selected: <span className="quantity">
                                {this.props.add.length}
                            </span>options
                            </p>
                        </div>
                    </div>
                    <div className="itemsList">
                        <ul className="selectItem">
                            {
                                this.props.add.map((item, index) => {
                                    return (
                                        <li className="itemForm animated flipInX"
                                            key={index}
                                            index={index}>

                                            <ItemParams
                                                item={item}
                                                saveValueFn={this.props.saveValueFn}
                                                submit={this.props.submit}
                                            />
                                            <div className="wrapBtn">
                                                <BtnDelete
                                                    deleteFn={this.props.deleteFn}
                                                    index={index}
                                                />

                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <div className="itemsSubmit">
                            <SubmitBtn
                                add={this.props.add}
                            />
                        </div>

                    </div>
                    <div className="paramsListFooter"></div>
                </div>
        );
    }
}

export default MesageList;