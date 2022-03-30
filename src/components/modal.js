import React, { Component } from "react";
import './modal.css'


class Modal extends Component {
    state = {
      checked: false,
    }

  render() {
    return (
     <div className="modalContainer">
      <div className="formContainer">
          <h2>Fill Address Details</h2>
          <img onClick={this.props.cancelAction} src="https://upload.wikimedia.org/wikipedia/commons/c/c1/High-contrast-dialog-close.svg" alt="close"/>
          <form onChange={this.props.handleChecked} >
            <input type="radio" id="personal" name="type" value="personal"/>
            <label htmlFor="personal">Personal</label>
            <input type="radio" id="business" name="type" value="business"/>
            <label htmlFor="business">Business</label><br/>
          </form>
          {
            this.props.checked == true &&
          
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

            <input type="radio" id="present" name="presenceType" value="present"/>
            <label htmlFor="present">Present</label>
            <input type="radio" id="permanent" name="presenceType" value="permanent"/>
            <label htmlFor="permanent">Permanent</label>
            <input type="radio" id="both" name="presenceType" value="permanent/present"/>
            <label htmlFor="both">Both</label><br/>


            <button id= 'save' onClick={this.props.saveAction}>Submit</button>
            <button id = 'clear' onClick={this.props.clearAction}>Clear</button>

          </form>
          }
          </div>
    </div>
    )}
}
export default Modal;
