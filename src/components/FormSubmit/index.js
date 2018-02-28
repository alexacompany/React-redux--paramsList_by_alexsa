import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import ItemParams from '../../components/ItemParams';
import BtnDelete from '../../components/BtnDelete';
import Buttons from '../Buttons';

class FormSubmit extends Component {

    render() {
        const {
            add,
            deleteFn,
            handleSubmit,
            pristine,
            reset,
            submitting
        } = this.props;
        return (

            <div className="paramsList">
                <div className="paramsListHeader">
                    <div className="paramsAbout">
                        <div className="titleHeader">Params</div>
                        <div className="subTitle">Select your params</div>
                    </div>
                    <div className="paramsQuantity">
                        {
                            add.length > 0 &&
                        <p className="titleProperty">
                            now selected: <span className="quantity">

                            {add.length}

                            </span>property
                        </p>
                }
                    </div>
                </div>
                {/*__________________________________________________form________________________*/}
                <div className="itemsList">
                    <form
                        className="selectItem"
                        onSubmit={handleSubmit}>

                        <div className="formHead">
                            {
                                add.length > 0 &&
                                <div className="itemsClear">
                                    <Buttons
                                        name={'RESET'}
                                        type={'button'}
                                        disabled={pristine || submitting}
                                        onClick={reset}
                                    />
                                </div>
                            }
                        </div>
                        <div className="formBody">
                        {
                            add.map((item, index) => {
                                return (
                                    <div className="itemForm animated flipInX"
                                         key={index}
                                    >
                                        <ItemParams
                                            item={item}
                                        />
                                        <div className="wrapBtn">
                                            <BtnDelete
                                                deleteFn={deleteFn}
                                                index={index}
                                            />
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                        <div className="formFooter">
                            {
                                add.length > 0 &&
                                <div className="itemsSubmit">
                                    <Buttons
                                        name={'submit'}
                                        type={'submit'}
                                        disabled={pristine || submitting}
                                    />
                                </div>
                            }
                        </div>
                    </form>
                </div>
                {/*_________________________________________________End-form________________________*/}
            </div>
        );
    }
}

FormSubmit = reduxForm({
    form: 'form',
    onSubmit: values => console.log('GET_VALUES', values)
})(FormSubmit);

export default FormSubmit;