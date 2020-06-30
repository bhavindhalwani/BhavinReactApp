import React , {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import MiddleContentComponent from './components/middle-content/middle-content-component';
import TitleContentComponent from './components/title-content/title-content-component';
import SignupComponent from './components/sign-up-component/SignupComponent';

//import signInWithGoogle from './components/firebase/firebase-utils';

import {Button} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
//import { auth } from 'firebase';
import firebase from './components/firebase/firebase-utils';


const Footer = ()=>(
  <div>   
    <h1>Footer</h1>
  </div>
);

const HomePage = ()=>(
  <div>
    
  <TitleContentComponent/>
  <MiddleContentComponent name = "Bhavin"/>    
  
  <form>
  <Container>
    <Row>
      <Col>SERVER 1</Col>    
      <Col>SERVER 2</Col>
    </Row>
    <Row>  
      <Col>
      <div>
          Input 1 : <input type='text'/>
      </div>    
      </Col>
      <Col>
      <div>
          Input 2 : <input type='text'/>
      </div>    
      </Col>
    </Row>
    <Row>
      <Col><Button color='danger' onClick = {SignupComponent}>Check</Button></Col>
    </Row>
  </Container>
  </form>

  </div>
)

class App extends Component {
  constructor(){
    super();
    this.state = { 
      name :'',
      address :'',
      email :''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSubmit = async event =>{
    event.preventDefault();
    const userRef = firebase.database().ref('users');
    const users = {
    name: this.state.name,
    address: this.state.address,
    email:this.state.email
  }
  userRef.push(users);
    this.state = { 
      name :'',
      address :'',
      email :''
    };
    alert('Saved !');
  }
  render(){
  return (
   <div>  
      <Switch>
        <Route exact path='/' component = {HomePage}/>        
        <Route path='/f' component = {Footer}/>
      </Switch>
      
      <hr/><h1>User Registration Form</h1><hr/>
      <form onSubmit ={this.handleSubmit}>
  <div>
  <div className = "form-group"><span class="badge badge-secondary"> Name :</span> <input type="text" name="name" placeholder = "Enter Name" onChange={this.handleChange} className = "form-control"/></div>
  <div className = "form-group"><span class="badge badge-secondary"> Address :</span> <input type="text" name="address" placeholder="Enter Address"  onChange={this.handleChange} className = "form-control"/></div>
  <div className = "form-group"><span class="badge badge-secondary"> Email :</span> <input type="text" name="email" placeholder="Enter Email"  onChange={this.handleChange} className = "form-control"/></div>
  <div className = "mx-auto text-center"><input type="submit" className ="btn btn-success"/></div>
  </div>
  </form>
  
  
   </div>
   
  )
  }
}

export default App;

