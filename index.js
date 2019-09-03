import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import ModalContainer from "./ModalContainer";

class Modal extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.any,
        modalClass: PropTypes.string,
        modalBodyClass: PropTypes.string,
        maxWidth: PropTypes.number,
        overlay: PropTypes.bool,
        header: PropTypes.bool,
        footer: PropTypes.bool,
        buttons: PropTypes.array,
        modalType: PropTypes.string,
        closeModal: PropTypes.func
    };

    static defaultProps = {
        title: "Modal",
        modalClass: "modalClass",
        modalBodyClass: "modal-body",
        maxWidth: 600,
        overlay: true,
        header: true,
        footer: true,
        buttons: [],
        modalType: "default",
        closeModal: null

    };

    render() {

        const modalProps = {
            title: this.props.title,
            content: this.props.content,
            modalClass: this.props.modalClass,
            modalBodyClass: this.props.modalBodyClass,
            maxWidth: this.props.maxWidth,
            overlay: this.props.overlay,
            header: this.props.header,
            footer: this.props.footer,
            buttons: this.props.buttons,
            modalType: this.props.modalType,
            closeModal: this.props.closeModal
        }

        return <ModalContainer {...modalProps} />;
    }
}

export default Modal;