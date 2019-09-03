import React from "react";
import ReactDOM from "react-dom";
import Modal from "./index";

class ModalUtil {
    createElem() {
        const modalId = Date.now();
        const el = document.createElement("div");
        el.setAttribute("id", modalId);
        document.body.appendChild(el);
        return modalId;
    }

    removeElem(modalId) {
        const modal = document.getElementById(modalId);
        ReactDOM.unmountComponentAtNode(modal);
        modal.parentNode.removeChild(modal);
    }

    open(content, options) {
        const modalId = this.createElem();
        const closeModal = () => this.removeElem(modalId);
        const defaultProps = {
            content,
            modalType: "default",
            closeModal
        };
        const defaultModalProps = Object.assign({}, options, defaultProps);
        ReactDOM.render(<Modal {...defaultModalProps} />, document.getElementById(modalId));
    }

    success(content, onSuccess = null, options) {
        const modalId = this.createElem();
        const closeModal = () => this.removeElem(modalId);
        const buttons = [
            {
                text: "Ok",
                onClick() {
                    closeModal.call(this);
                    if(onSuccess){
                        onSuccess();
                    }
                }
            }
        ]
        const defaultProps = {
            content,
            modalType: "success",
            closeModal,
            buttons
        };
        const defaultModalProps = Object.assign({}, options, defaultProps);
        ReactDOM.render(<Modal {...defaultModalProps} />, document.getElementById(modalId));
    }

    confirm(content, onConfirm = null, onCancel = null, options) {
        const modalId = this.createElem();
        const closeModal = () => this.removeElem(modalId);
        const buttons = [
            {
                text: "Ok",
                onClick() {
                    closeModal.call(this);
                    if(onConfirm){
                        onConfirm();
                    }
                }
            },
            {
                text: "Cencel",
                onClick() {
                    closeModal.call(this);
                    if(onCancel){
                        onCancel();
                    }
                }
            }
        ]
        const defaultProps = {
            content,
            modalType: "confirm",
            closeModal,
            buttons
        };
        const defaultModalProps = Object.assign({}, options, defaultProps);
        ReactDOM.render(<Modal {...defaultModalProps} />, document.getElementById(modalId));
    }

    error(content, onCancel = null, options) {
        const modalId = this.createElem();
        const closeModal = () => this.removeElem(modalId);
        const buttons = [
            {
                text: "Cencel",
                onClick() {
                    closeModal.call(this);
                    if(onCancel){
                        onCancel();
                    }
                }
            }
        ]
        const defaultProps = {
            content,
            modalType: "error",
            closeModal,
            buttons
        };
        const defaultModalProps = Object.assign({}, options, defaultProps);
        ReactDOM.render(<Modal {...defaultModalProps} />, document.getElementById(modalId));
    }
}

export default new ModalUtil();