import React, { Component } from "react";
import "./App.css";
import Modal from "./components/modal";
import {
  validateAddress,
  validateCity,
  validateMobile,
  validateName,
  validateStates,
  validateZip,
  validateChecked,
} from "./components/validation";

class App extends Component {
  state = {
    checked: false,
    show: false,
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states: "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: "",
    personal: [
      {
        id:'1',
        name: "Sample",
        mobile: "12421412412",
        addrs: "a d f",
        city: "Chennai",
        states: "Tamil Nadu",
        zip: "2141242",
        type: "present",
      },
    ],
    business: [
      {
        id:'b1',
        name: "Cool",
        mobile: "421412412",
        addrs: "a d f",
        city: "ennai",
        states: "Tamil Nadu",
        zip: "2141242",
        type: "present",
      },
    ],
  };

  componentDidMount = () => {
    this.handleBorder();
  };
 
  handleClick = () => {
      this.setState({show: true}) 
  }

  onClose = (e) => {
    //write code for modal close
    e.preventDefault();
    this.setState({
      show: false,
      checked: false,
    })    
  };

  handleCheck = ()=> {
    this.setState({
      checked: true
    })
    setTimeout(()=> {
      document.getElementById('save').disabled = true
    }, 10)
  }

  validateForm = () => {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const states = document.getElementById('states').value;
    const zip = document.getElementById('zip').value;

    const radio1 = document.getElementById('personal')
    const radio2 = document.getElementById('business')
   
    const radio3 = document.getElementById('present')
    const radio4 = document.getElementById('absent')

    if (validateName(name) && validateMobile(mobile) && validateAddress(address) && validateCity(city) && validateStates(states) && validateZip(zip) && validateChecked(radio1, radio2) && validateChecked(radio3, radio4)) {
      return true
    } else {
      return false
    }

  }

  handleChange = (e) => {
    //write code to handle  inchange event for input fields
    if(this.validateForm() == true) {
      document.getElementById('save').disabled = false;
    } else {
      document.getElementById('save').disabled = true;  
    }
  };
  handleSave = (e) => {
      //write code for saving data into personal or bussiness
      e.preventDefault();
      if(this.validateForm() === false) {
          document.getElementById('save').disabled = true;
      } else {
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const city = document.getElementById('city').value;
      const states = document.getElementById('states').value;
      const zip = document.getElementById('zip').value;
      const mobile = document.getElementById('mobile').value;

      const types = document.getElementsByName('type');

      for(let i = 0; i < types.length; i++) {
          if(types[i].checked) {
            if (types[i].value == 'personal') {
              this.setState({
                personal: this.state.personal.concat([{
                  id: this.state.personal.length + 1,
                  name: name,
                  mobile: mobile,
                  addrs: address,
                  city: city,
                  states: states,
                  zip: zip,
                  type: document.querySelector('input[name="presenceType"]:checked').value,
                }])
              })
            } else if (types[i].value == 'business') {
                this.setState({
                business: this.state.business.concat([{
                  id: 'b' + (this.state.business.length + 1),
                  name: name,
                  mobile: mobile,
                  addrs: address,
                  city: city,
                  states: states,
                  zip: zip,
                  type: document.querySelector('input[name="presenceType"]:checked').value,
                }])
              })}
          }
      }
      this.onClose(e)
   } };

  
  handleClear = (e) => {
    //write code for clearning  input fields
      e.preventDefault();
      document.getElementById('present').checked = false;
      document.getElementById('absent').checked = false;

      document.getElementById('name').value = '';
      document.getElementById('address').value = '';
      document.getElementById('city').value = '';
      document.getElementById('states').value = '';
      document.getElementById('zip').value = '';
      document.getElementById('mobile').value = '';

      document.getElementById('save').disabled = true;

      document.getElementById('business').checked = false;
      document.getElementById('personal').checked = false;


      this.setState({
        checked: false
      })

  };


  handleBorder = () => {
    this.setState({
      borderBottom1: "hiddden",
      borderBottom: "3px solid rgb(71,68,206)",
      show_personal: true,
    });
  };
  handleBorder1 = () => {
    this.setState({
      borderBottom1: "hiddden",
      borderBottom: "3px solid rgb(71,68,206)",
      show_personal: false,
    });
  };
  render() {
    return (<div className="mainContainer">
      <header className="header">Address Book</header>
      <button className="addButton" onClick={this.handleClick}>Add</button>
      <div className="bodyContainer">
        <button onClick={()=> this.setState({show_personal: true})}>Personal</button>
        <button onClick={()=> this.setState({show_personal: false})}>Business</button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>States</th>
              <th>Mobile</th>
              <th>ZipCode</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {  
             this.state.show_personal === true &&
              this.state.personal.map((item,index)=> {
                return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.addrs}</td>
                  <td>{item.city}</td>
                  <td>{item.states}</td>
                  <td>{item.mobile}</td>
                  <td>{item.zip}</td>
                  <td>{item.type}</td>
                </tr>
                )
              })
            }

            {  
             this.state.show_personal === false &&
              this.state.business.map((item,index)=> {
                return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.addrs}</td>
                  <td>{item.city}</td>
                  <td>{item.states}</td>
                  <td>{item.mobile}</td>
                  <td>{item.zip}</td>
                  <td>{item.type}</td>
                </tr>
                )
              })
            }

          </tbody>
        </table>
      
      {
        this.state.show === true &&
        <div className="overlay" >
        <Modal handleChecked={this.handleCheck} checked= {this.state.checked} cancelAction = {(e)=> this.onClose(e)} saveAction = {(e)=>this.handleSave(e)} handleChange = {this.handleChange} clearAction = {(e)=>this.handleClear(e)}/>
        </div>
      }
      </div>
    </div>
    )}
  }



export default App;
