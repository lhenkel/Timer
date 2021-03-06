//import { NoSleep } from '../node_modules/nosleep';

import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import CountdownDisplay from './components/CountdownDisplayComponent';
import './App.css';
import ReactNoSleep from 'react-no-sleep';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { sendTime: 0, paused: true, state_ix: 'initial' };
    this.handleClick = this.handleClick.bind(this);
    this.notifyComplete = this.notifyComplete.bind(this);
  }

  handleClick() {
    console.log('click clicked');
    this.setState(state => ({
      state_ix: 'go'
    }));
    if (typeof noSleep == 'undefined') {
      console.log('enabled nosleep');
    }
  }

  notifyComplete() {
    this.setState(state => ({
      state_ix: 'initial',
      paused: true
    }));

  }

  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";

    return (
      <Container>
        <Row>
          <Col xs="1"></Col>
          <Col xs="10" className='clock_col'><CountdownDisplay notifyComplete={this.notifyComplete} state_ix={this.state.state_ix} /></Col>
          <Col xs="1"></Col>
        </Row>
        <Row>
          <Col xs="1"></Col>
          <Col xs="10" className='clock_col'>
            <Button color="primary" onClick={this.handleClick}>Start</Button>
            <ReactNoSleep>
              {({ isOn, enable, disable }) => (
                <Button className='ml-2' color={isOn ? 'success' : 'secondary'} onClick={isOn ? disable : enable}>
                  {isOn ? 'No Sleep' : 'Sleep'}
                </Button>
              )}
            </ReactNoSleep>
          </Col>

          <Col xs="1"></Col>
        </Row>
      </Container>
    );
  }
}
export default App;
