
import React from "react";
import PropTypes from "prop-types";

export default class DefaultFormater extends React.Component {

    static propTypes = {
        content: PropTypes.any
    }

    render() {
        return (
            <div className="warningModal">
                <div className="warningModal__media"><i className="warningIcon fa fa-warning"></i></div>
                <div className="warningModal__title">warning!!!</div>
                <div className="warningModal__text">{this.props.content}</div>
            </div>
        );
    }
}