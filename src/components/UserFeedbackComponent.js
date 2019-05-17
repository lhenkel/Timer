import React, { Component } from 'react';
import { Alert } from 'reactstrap';
//<UserFeedback message='{this.state.message}' sound='{this.state.sound}' />
class UserFeedback extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (typeof this.props.sound == 'string') {
            return (
                <div >
                    <audio ref={React.createRef()} src={this.props.sound} autoPlay />
                    <Alert className="text-center" color="info"> {this.props.message}</Alert>
                </div>

            );
        } else {
            return (
                <div >
                    <Alert className="text-center" color="success"> {this.props.message}</Alert>
                </div>
            );
        }

    }

}

export default UserFeedback;   