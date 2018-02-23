import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import ChatList from '../components/ChatList/index'
import MesageList from '../components/MesageList/index';
import ModalInfo from '../components/ModalInfo/index';
//action_creator
import setUserAction from '../Actions/UserCreator';
import deleteUserAction from '../Actions/ItemDelete';
import saveValueAction from '../Actions/SaveValue';
import openModalAction from '../Actions/OpenModal';
import closeModalAction from '../Actions/CloseModal';

import '../assets/style/App.css';

class App extends Component {

    handleClick(e){
        e.preventDefault();
        if (this.props.modalItem)
            this.props.closeModal();
        else
            this.props.openModal();
    }

  render() {
        console.log(this.props.modalItem)
    return (
        <div className="wrapContainer">
            <ChatList
                user={this.props.user}
                setUser={this.props.setUserFunction}
                add={this.props.add}
            />
            <MesageList
                deleteFn={this.props.deleteUserFunction}
                saveValueFn={this.props.saveValueFunction}
                submit={this.props.submit}
                add={this.props.add}
            />
            <div className="page">
                <button onClick={(e)=>this.handleClick(e)}>
                    Open Modal
                </button>
            </div>
            {this.props.modalItem && <ModalInfo closeModal={this.props.closeModal}/>}
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        add: state.addUser,
        submit: state.submitInfo,
        modalItem: state.modalItem
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setUserFunction: users => {
            dispatch(setUserAction(users))
        },
        deleteUserFunction: index => {
            dispatch(deleteUserAction(index))
        },
        saveValueFunction: (value) => {
            dispatch(saveValueAction(value))
        },
        openModal: () => {
            return dispatch(openModalAction())
        },
        closeModal: () => {
            return dispatch(closeModalAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
