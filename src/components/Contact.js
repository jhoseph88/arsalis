import React, {Component} from 'react'

import TextInput from './TextInput'
import Email from './Email'
import Validate from './ValidateInput'
import sendEmail from '../services/email'
import TextArea from './TextArea'
import { contactFormDefaults } from '../constants'

class ContractForm extends Component {
  constructor (props) {
    super(props)

    this.state = contactFormDefaults
    this.clearFormState = this.clearFormState.bind(this)
  }

  clearFormState() {
    this.setState(contactFormDefaults)
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    const updatedControls = { ...this.state.formControls}
    const updatedFormElement = { ...updatedControls[name] }
    updatedFormElement.value = value
    updatedFormElement.touched = true
    updatedFormElement.valid = Validate(value, updatedFormElement.validationRules)

    updatedControls[name] = updatedFormElement

    let formIsValid = true;
    for (let inputIdentifier in updatedControls)
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid

    this.setState({ formControls: updatedControls, formIsValid: formIsValid })
  }

  formSubmitHandler = async () => {
    // facilitates change of button text to "Submitting..." for user feedback
    this.setState({ formIsSubmitted: true })
    const formData = {}
    for (let formElementId in this.state.formControls)
      formData[formElementId] = this.state.formControls[formElementId].value
    await sendEmail(
      'admin@arsalis.org',
      'admin@arsalis.org',
      `Website query from ${formData['name']} (${formData['email']})`,
      formData['message']
    )
    this.clearFormState()
  }

  render () {
    return (
      <div style={{ width: '66.3%', margin: '0 16.8% 0 16.8%' }}>
        <div className='centered-rows'>
          <TextInput name='name'
            id='contact-name'
            placeholder={this.state.formControls.name.placeholder}
            value={this.state.formControls.name.value}
            onChange={this.changeHandler}
            touched={this.state.formControls.name.touched ? 1: 0}
            valid={this.state.formControls.name.valid ? 1: 0}/>
          <Email name='email'
            id='contact-email'
            placeholder={this.state.formControls.email.placeholder}
            value={this.state.formControls.email.value}
            onChange={this.changeHandler}
            touched={this.state.formControls.email.touched ? 1: 0}
            valid={this.state.formControls.email.valid ? 1: 0}/>
        </div>
        <div className='centered-rows'>
          <TextArea name='message'
            id='contact-message'
            className='input-message-control'
            placeholder={this.state.formControls.message.placeholder}
            value={this.state.formControls.message.value}
            onChange={this.changeHandler}
            touched={this.state.formControls.message.touched ? 1: 0}
            valid={this.state.formControls.message.valid ? 1: 0}/>
        </div>
        <div className='centered-rows'>
          <button className='submit-button' onClick={this.formSubmitHandler}
            disabled={!this.state.formIsValid}
            id='contact-submit'
            style={{ cursor:  this.state.formIsValid ? 'pointer' : 'auto' }}>
            { this.state.formIsSubmitted ? 'Submitting...' : 'Submit' }
          </button>
        </div>
      </div>
    )
  }
}

export default ContractForm;
