import React, { Component } from 'react';

class MenuList extends Component {

    onBtnClick = (e) => {
        e.preventDefault();
        this.props.setUser(this.props.menu.filter((item) => {
            return +e.currentTarget.id === item.id;
        })[0]);
    }

    render() {
        // console.log(this.state.isOpenDropdown)
        const { menu } = this.props;
        return (
            <div className="propertyList">
                <div className="propertyListHeader">
                    <h2 className="titleHead">
                        Property
                    </h2>
                </div>
                <ul className="listContainer">
                    {
                        menu.map((item, index) => {
                            return (
                                <li onClick={this.onBtnClick}
                                    className="itemProperty"
                                    key={index}
                                    id={index}
                                >
                                    <div className="about">
                                        <p className="name">{item.name}</p>
                                        <div className="status">

                                            {/*{*/}
                                            {/*isShow.includes(id) &&*/}
                                            {/*<i className="fa fa-circle online"></i>*/}
                                            {/*}*/}

                                            for tests
                                        </div>
                                    </div>
                                    <img src={item.img} alt="click"/>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MenuList;
