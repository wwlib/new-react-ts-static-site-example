import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

const Home = () => <div><h1>Home</h1><Links /></div>
const About = () => <div><h1>About</h1><Links /></div>
const Contact = () => <div><h1>Contact</h1><Links /></div>
const Hello = (props: any) => <div><h1>Hello {props.match.params.message}</h1><Links /></div>

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/hello/ReactRouter">Hello</Link>
  </nav>



export default class App extends React.Component {

  onHeaderClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  onTopNavClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  onBottomNavClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  render() {
    return (
      <Container>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <Header clickHandler={this.onHeaderClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <TopNav clickHandler={this.onTopNavClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/hello/:message" component={Hello} />
            </Switch>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <BottomNav clickHandler={this.onBottomNavClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </Container >
    );
  }
}
