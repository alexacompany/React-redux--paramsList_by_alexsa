import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import ChatList from '../components/ChatList/index'
import MesageList from '../components/MesageList/index';
//action_creator
import setUserAction from '../Actions/UserCreator';
import deleteUserAction from '../Actions/ItemDelete';
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
                delete={this.props.deleteUserFunction}
                add={this.props.add}
            />
        </div>
    );
  }
}















function mapStateToProps(state) {
    return {
        user: state.user,
        add: state.addUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setUserFunction: users => {
            dispatch(setUserAction(users))
        },
        deleteUserFunction: id => {
            dispatch(deleteUserAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
