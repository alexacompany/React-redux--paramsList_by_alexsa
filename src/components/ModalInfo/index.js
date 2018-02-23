import React, {Component} from 'react';
class ModalInfo extends Component {
    constructor(){
        super();
    }

    onOverlayClose(e){
        if(e.target.id === 'modal')
            this.props.closeModal();
    }

    render(){
        return (
            <div className="modal" id="modal" onClick={(e)=>this.onOverlayClose(e)}>
                <div className="modal-content" name="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.props.closeModal}>&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <p>This is a modal</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.props.closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalInfo;