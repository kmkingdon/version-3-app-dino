import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import JobDetails from './components/JobDetails.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data:[],
      message:false,
      application:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => {
        this.setState({data:response});
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({message:true});
    e.target.reset();
  }

  handleChange(e) {
    this.setState({application:e.target.value});
  }

  handleClick(e) {
    document.getElementById('application-preview').classList.toggle('hidden');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails listing={this.state.data} />
          <Form message={this.state.message} handleSubmit={this.handleSubmit} application= {this.state.application} handleClick={this.handleClick} handleChange={this.handleChange}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
