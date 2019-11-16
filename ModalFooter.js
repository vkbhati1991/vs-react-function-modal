import React, { Component } from "react";
//import PropTypes from "prop-types";

export default class ModalFooter extends Component {

    getFooterAction = (onCustomEvent) => {
        this.props.closeModal();
        onCustomEvent && onCustomEvent();
    }

    renderButtons = () => {
        const { buttons } = this.props;

        let footerButtons = null;

        if (buttons && buttons.length >= 0) {

            footerButtons = buttons.map((btn, idx) => {
                return (
                    <div onClick={btn && btn.onClick} key={idx} className="btn btn-primary">{btn.text}</div>
                )
            });
        }

        return (
            <div className="modal-footer-actions">
                {footerButtons}
            </div>
        )
    }
    render() {
        return (
            <div className="modal__footer">{this.renderButtons()}</div>
        );
    }
}