import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import ChatList from '../components/ChatList/index'
import MesageList from '../components/MesageList/index';
//action_creator
import setUserAction from '../Actions/UserCreator';
import deleteUserAction from '../Actions/ItemDelete';
import getValueAction from '../Actions/GetValue';
import saveValueAction from '../Actions/SaveValue';
import '../assets/style/App.css';

class App extends Component {

  render() {
    return (
        <div className="wrapContainer">
            <ChatList
                user={this.props.user}
                setUser={this.props.setUserFunction}
                add={this.props.add}
            />
            <MesageList
                deleteFn={this.props.deleteUserFunction}
                // getValueFn={this.props.getValueFunction}
                saveValueFn={this.props.saveValueFunction}
                submit={this.props.submit}
                add={this.props.add}
            />
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        add: state.addUser,
        submit: state.submitInfo
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
        getValueFunction: value => {
            dispatch(getValueAction(value))
        },
        saveValueFunction: value => {
            dispatch(saveValueAction(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
