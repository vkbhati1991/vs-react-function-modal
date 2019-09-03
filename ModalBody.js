import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// Formaters
import DefaultFormater from "./Formaters/DefaultFormater";
import SuccessFormater from "./Formaters/SuccessFormater";
import WarningFormater from "./Formaters/WarningFormater";
import ConfirmFormater from "./Formaters/ConfirmFormater";
import ErrorFormater from "./Formaters/ErrorFormater";


const MODAL = {
    DEFAULT: "default",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    CONFIRM: "confirm"
}

export default class ModalBody extends PureComponent {

    static propTypes = {
        content: PropTypes.any,
        modalBodyClass: PropTypes.string,
        modalType: PropTypes.string
    };


    getModalData = (modalType) => {
        switch (modalType) {
            case MODAL.SUCCESS:
                return <SuccessFormater content={this.props.content} />;

            case MODAL.WARNING:
                return <WarningFormater content={this.props.content} />;

            case MODAL.CONFIRM:
                return <ConfirmFormater content={this.props.content} />;

            case MODAL.ERROR:
                return <ErrorFormater content={this.props.content} />;

            default:
                return <DefaultFormater content={this.props.content} />
        }
    }

    render() {
        const modalBodyClassName = `modal__body ${this.props.modalBodyClass}`
        return (
            <div className={modalBodyClassName}>{this.getModalData(this.props.modalType)}</div>
        );
    }
}