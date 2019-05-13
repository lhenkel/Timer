import React, { Component } from 'react';
import './App.css';

import { Button, Container, Row, Col } from 'reactstrap';
import CountdownDisplay from './components/CountdownDisplayComponent';

//function App() {
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { sendTime: 0, paused: true, state_ix: 'initial' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click clicked');
    this.setState(state => ({
      state_ix: 'go'
    }));
  }

  render() {
    return (

      <Container>
        <Row>
          <Col xs="4"></Col>
          <Col xs="4"><CountdownDisplay state_ix={this.state.state_ix} /></Col>
          <Col xs="4"></Col>
        </Row>
        <Row>
          <Col xs="5"></Col>
          <Col xs="2"><Button color="primary" onClick={this.handleClick}>Start</Button></Col>
          <Col xs="5"></Col>
        </Row>
      </Container>

    );
  }
}
export default App;
