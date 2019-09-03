import React from "react";
import PropTypes from "prop-types";

export default class ModalHeader extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string,
        closeModal: PropTypes.func
    };

    getTitle = () => {
        return (
            <div className="modal-header__title">{this.props.title}</div>
        );
    }

    getClose = () => {
        return (
            <div onClick={this.closeModalPopup} className="modal-header__close">X Close</div>
        );
    }

    closeModalPopup = () => {
        if (this.props.closeModal) {
            this.props.closeModal.call();
        }
    }

    render() {
        return (
            <div className="modal__header">
                {this.getTitle()}
                {this.getClose()}
            </div>
        );
    }
}