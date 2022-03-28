import React, { Component } from "react";
import './modal.css'


class Modal extends Component {
    state = {
      checked: false,
    }

    handleChange = ()=> {
      this.setState({
        checked: true
      })
      setTimeout(()=> {
        document.getElementById('save').disabled = true
      }, 10)
    }

  render() {
    return (
     <div className="modalContainer">
      <div className="formContainer">
          <h2>Fill Address Details</h2>
          <button onClick={this.props.cancelAction}>Close</button>
          <form onChange={this.handleChange} >
            <input type="radio" id="personal" name="type" value="personal"/>
            <label htmlFor="personal">personal</label>
            <input type="radio" id="business" name="type" value="business"/>
            <label htmlFor="business">business</label><br/>
          </form>
          {
            this.state.checked == true &&
          
          <form onChange={this.props.handleChange}>

            <label htmlFor="name">Name:</label><br/>
            <input type="text" id="name" name="name" required/><br/>

            <label htmlFor="mobile">Mobile:</label><br/>
            <input type="number" id="mobile" name="mobile" required/><br/>

            <label htmlFor="address">Address:</label><br/>
            <input type="text" id="address" name="address" required/><br/>

            <label htmlFor="city">City:</label><br/>
            <input type="text" id="city" name="city" required/><br/>

            <label htmlFor="states">States:</label><br/>
            <input type="text" id="states" name="states" required/><br/>

            <label htmlFor="zip">ZipCode:</label><br/>
            <input type="number" id="zip" name="zip" required/><br/>

            <button id= 'save' onClick={this.props.saveAction}>Submit</button>
            <button id = 'clear' onClick={this.props.clearAction}>Clear</button>
          </form>
  }
          </div>
    </div>
    )}
}
export default Modal;