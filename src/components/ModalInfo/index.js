import React, {Component} from 'react';
class ModalInfo extends Component {
    constructor(){
        super();
        this.onOverlayClose = this.onOverlayClose.bind(this);
    }

    onOverlayClose(e){
        if(e.target.id === 'modal')
            this.props.closeModal();
    }

    render(){
        return (
            <div className="modalItem" id="modal" onClick={this.props.closeModal2}>
                <div className="modal-content" name="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.props.closeModal2}>&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        {/*{*/}
                            {/*this.props.submit.map((item, index) => {*/}
                                {/*return (*/}
                                    {/*<div*/}
                                        {/*key={index}*/}
                                        {/*className="modalList"*/}
                                    {/*>*/}
                                        {/*<p className="title">*/}
                                            {/*Property:*/}
                                        {/*</p>*/}
                                        {/*<p className="text">*/}
                                            {/*{item.propToSubmit}*/}
                                        {/*</p>*/}

                                    {/*</div>*/}
                                {/*);*/}
                            {/*})*/}
                        {/*}*/}
                    </div>

                </div>
            </div>
        );
    }
}
export default ModalInfo;