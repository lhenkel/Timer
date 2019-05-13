import React, { Component } from 'react';
//<UserFeedback message='{this.state.message}' sound='{this.state.sound}' />
class UserFeedback extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sound != false) {
            return (
                <div>hi {this.props.message}
                    <audio ref={React.createRef()} src='../mp3/ascend.mp3' autoPlay />
                </div>
            );
        } else {
            return (
                <div>hi  no sound {this.props.message}</div>
            );
        }

    }

}

export default UserFeedback;   