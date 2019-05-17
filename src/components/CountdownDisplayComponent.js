import React, { Component } from 'react';
//import Countdown from 'react-countdown-now';
import ReactCountdownClock from 'react-countdown-clock';
import UserFeedback from './UserFeedbackComponent';

const sounds = {
    begin: '../mp3/whoosh.mp3',
    complete: '../mp3/bell.mp3',
}

const states = [
    { seconds: 15, sound: sounds.complete, message: 'Switch Sides', paused: false },
    { seconds: 60, sound: sounds.begin, message: 'Begin other side', paused: false },
    { seconds: 61, sound: sounds.complete, message: 'Interal Break', paused: false },
    { seconds: 60, sound: sounds.begin, message: 'Begin', paused: false },
    { seconds: 15, sound: sounds.complete, message: 'Switch Sides', paused: false },
    { seconds: 60, sound: sounds.begin, message: 'Begin other side', paused: false },
    { seconds: 2, sound: sounds.complete, message: 'Done!', paused: false },
    { seconds: 0, sound: sounds.complete, message: 'Done', paused: false },
]

class CountdownDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curStateIndex: 0,
            seconds: 60,
            sound: false,
            message: 'Begin Exercise',
            paused: false
        };
        this.handleOnComplete = this.handleOnComplete.bind(this);
    }

    handleOnComplete() {
        console.log('handle on complete called!');
        console.log('state is: ' + this.state.curStateIndex);


        console.log('states leng' + states.length);
        if (this.state.curStateIndex <= states.length) {
            this.setState(state => ({
                paused: false,
                seconds: states[this.state.curStateIndex].seconds,
                message: states[this.state.curStateIndex].message,
                sound: states[this.state.curStateIndex].sound
            }));
            var nextStateIx = this.state.curStateIndex + 1;
            this.setState(state => ({ curStateIndex: nextStateIx }));
        }
        if (this.state.curStateIndex === states.length) {
            console.log('done with states stetting main notfy complete');
            this.props.notifyComplete();
            this.setState(state => ({ curStateIndex: 0 }));
        }

        console.log('state=');
        console.log(this.state);

    }

    render() {
        console.log('props:' + this.props.state_ix)
        if (this.props.state_ix === 'initial') {
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
                    <div className='pt-1 mt-1'><UserFeedback message={this.state.message} sound={this.state.sound} /></div>
                </div>
            );
        }
    }

}

export default CountdownDisplay;   