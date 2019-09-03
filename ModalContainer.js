import React, { Component, Fragment as Wrapper } from "react";
import PropTypes from "prop-types";

//Modal Components
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

class ModalContainer extends Component {

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

    getHeader = () => {

        const headerProps = {
            title: this.props.title,
            closeModal: this.props.closeModal
        };

        return this.props.header ? <ModalHeader {...headerProps} /> : null;
    }

    getBody = () => {

        const bodyProps = {
            content: this.props.content,
            modalType: this.props.modalType,
            modalBodyClass: this.props.modalBodyClass
        };

        return <ModalBody {...bodyProps} />;
    }

    getFooter = () => {
        const footerProps = {
            buttons: this.props.buttons,
            closeModal: this.props.closeModal
        };

        return this.props.footer ? <ModalFooter {...footerProps} /> : null;
    }


    renderModal = () => {
        const { modalClass, overlay, maxWidth } = this.props;
        const modalClassName = `modal ${modalClass}`;
        return (
            <Wrapper>
                {overlay && <div className="modal-overlay"></div>}
                <div className="modalWrapper">
                    <div className="modalContainer">
                        <div className={modalClassName} style={{ maxWidth: maxWidth }}>
                            {this.getHeader()}
                            {this.getBody()}
                            {this.getFooter()}
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }

    render() {
        return this.renderModal();
    }
}

export default ModalContainer;


