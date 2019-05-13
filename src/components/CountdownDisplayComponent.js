import React, { Component } from 'react';
//import Countdown from 'react-countdown-now';
import ReactCountdownClock from 'react-countdown-clock';
import UserFeedback from './UserFeedbackComponent';

const sounds = {
    complete: '../mp3/whoosh.mp3',
    begin: '../mp3/bell.mp3',
}

const states = [
    { seconds: 5, sound: false, message: 'Switch Sides', paused: false },
    { seconds: 2, sound: false, message: 'Begin other side', paused: false },
    { seconds: 5, sound: false, message: 'Interval Break', paused: false },
    { seconds: 2, sound: false, message: 'Switch Sides', paused: false },
    { seconds: 0, sound: false, message: 'Done', paused: false },
]

class CountdownDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curStateIndex: 0,
            seconds: 7,
            sound: false,
            message: 'Begin Exercise',
            paused: false
        };
        this.handleOnComplete = this.handleOnComplete.bind(this);
    }

    handleOnComplete() {
        console.log('handle on complete called!');
        console.log('state is: ' + this.state.curStateIndex);

        if (this.state.curStateIndex < states.length) {
            this.setState(state => ({
                paused: false,
                seconds: states[this.state.curStateIndex].seconds,
                message: states[this.state.curStateIndex].message
            }));
            var nextStateIx = this.state.curStateIndex + 1;
            this.setState(state => ({ curStateIndex: nextStateIx }));
        }
        /*
                if (this.state.curStateIndex < states.length) {
                    var nextState = states[this.state.curStateIndex];
        
                    console.log(nextState);
                    this.setState(state => ({
                        nextState
                    }));
                    var nextStateIx = this.state.curStateIndex + 1;
                    this.setState(state => ({ curStateIndex: nextStateIx }));
        
        
                } else {
                    console.log('ending..');
                }
        */
        console.log('state=');
        console.log(this.state);

    }

    render() {
        console.log('props:' + this.props.state_ix)
        if (this.props.state_ix == 'initial') {
            return (
                <div></div>
            );
        } else {
            return (
                <div>
                    <ReactCountdownClock seconds={this.state.seconds}
                        onComplete={this.handleOnComplete}
                        paused={this.state.paused}
                        color="#0062cc"
                        alpha={0.9}
                    />
                    <UserFeedback message={this.state.message} sound={this.state.sound} />
                </div>
            );
        }
    }

}

export default CountdownDisplay;   