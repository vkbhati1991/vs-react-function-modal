
import React from "react";
import PropTypes from "prop-types";

export default class ErrorFormater extends React.Component {

    static propTypes = {
        content: PropTypes.any
    }

    render() {
        return (
            <div className="errorModal">
                <div className="errorModal__media"><i className="errorIcon fa fa-warning"></i></div>
                <div className="errorModal__title">Error!!!</div>
                <div className="errorModal__text">{this.props.content}</div>
            </div>
        );
    }
}