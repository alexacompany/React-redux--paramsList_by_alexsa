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
    constructor(props) {
        super(props);
        // this.state = {
        //     isShowModal: false,
        // }
    }

    handleClick = () => {
        this.setState({
            isShowModal: !this.props.isShowModal
        })
    };

    closeModal2 = () => {
        this.setState({
            isShowModal: false,
        })
    }

  render() {
        const {
            add,
            menu,
            setUserFunction,
            deleteUserFunction } = this.props;
    return (
        <div className="wrapContainer">
            {/*{*/}
                {/*this.state.isShowModal &&*/}
                {/*<ModalInfo*/}
                    {/*closeModal2={this.closeModal2}*/}
                    {/*data={this.props.menu}*/}
                {/*/>*/}
            {/*}*/}
            <MenuList
                menu={menu}
                setUser={setUserFunction}
            />
            <FormSubmit
                add={add}
                deleteFn={deleteUserFunction}
            />
            {/*<div className="page">*/}
                {/*<button onClick={this.handleClick}>*/}
                    {/*Open Modal*/}
                {/*</button>*/}
            {/*</div>*/}
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