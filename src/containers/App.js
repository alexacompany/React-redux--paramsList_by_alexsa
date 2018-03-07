import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import MenuList from '../components/MenuList/index';
import FormSubmit from '../components/FormSubmit/index';

//action_creator
import setUserAction from '../Actions/ItemCreator';
import deleteUserAction from '../Actions/ItemDelete';

import '../assets/style/App.css';

class App extends Component {

  render() {
        const {
            add,
            menu,
            setUserFunction,
            deleteUserFunction } = this.props;
    return (
        <div className="wrapContainer">
            <MenuList
                menu={menu}
                setUser={setUserFunction}
            />
            <FormSubmit
                add={add}
                deleteFn={deleteUserFunction}
            />
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        menu: state.menu,
        add: state.createItems,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setUserFunction: items => {
            dispatch(setUserAction(items))
        },
        deleteUserFunction: index => {
            dispatch(deleteUserAction(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);