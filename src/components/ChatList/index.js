import React, { Component } from 'react';


class ChatList extends Component {
    constructor(props) {
        super(props)
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick(e) {
        this.props.setUser(this.props.user.filter((item) => {
            return +e.currentTarget.id+1 === item.id;
        })[0])
    }

    render() {
        return (
                <div className="propertyList">
                    <div className="propertyListHeader">
                        <h2 className="titleHead">
                            Property
                        </h2>
                    </div>
                    <ul className="listContainer">
                        {
                            this.props.user.map((item, id) => {
                                return (
                                    <li onClick={this.onBtnClick}
                                        className="itemProperty"
                                        id={id}
                                        value='heloo'
                                        key={item.id}>
                                        <div className="about">
                                            <p className="name">{item.name}</p>
                                            <div className="status">
                                                <i className="fa fa-circle online"></i> for tests
                                            </div>
                                        </div>
                                        <img src={item.img} alt="click" />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
        );
    }
}

export default ChatList;
