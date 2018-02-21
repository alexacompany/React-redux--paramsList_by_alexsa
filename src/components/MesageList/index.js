import React, { Component } from 'react';
import ItemParams from '../../components/ItemParams';
import SubmitBtn from '../../components/SubmitBtn';

class MesageList extends Component {
    constructor(props) {
        super(props);
        // this.deleteBlock = this.deleteBlock.bind(this)
    }

    render() {
        return (
                <div className="paramsList">
                    <div className="paramsListHeader">
                        <div className="paramsAbout">
                            <div className="titleHeader">Params</div>
                            <div className="subTitle">Select your params</div>
                        </div>
                    </div>
                    <div className="itemsList">
                            <ItemParams
                                add={this.props.add}
                            />
                        <div className="itemsSubmit">
                            <SubmitBtn
                                add={this.props.add}
                            />
                        </div>

                    </div>
                    <div className="paramsListFooter">

                    </div>
                </div>
        );
    }
}

export default MesageList;