import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/styles'

import validate from './ValidateInput'
import sendEmail from '../services/email'
import { contactFormDefaults } from '../constants'

const InlineInput = styled(TextField)({ margin: '20px', width: '100%' })

export default class ContractForm extends Component {
  constructor (props) {
    super(props)
    this.state = contactFormDefaults
  }

  clearFormState = () => { this.setState(contactFormDefaults) }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    const updatedControls = { ...this.state.formControls}
    const updatedFormElement = { ...updatedControls[name] }
    updatedFormElement.value = value
    updatedFormElement.touched = true
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules)

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
      <form className='form-control'>
        <div style={{ display: 'flex' }}>
          <InlineInput
            name='name'
            label='Name'
            id='contact-name'
            onChange={this.changeHandler}
            error={!this.state.formControls.name.valid && this.state.formControls.name.touched}
            onBlur={this.clearFormState}/>
          <InlineInput
            name='email'
            label='Email'
            id='contact-email'
            onChange={this.changeHandler}
            error={!this.state.formControls.email.valid && this.state.formControls.email.touched}
            onBlur={this.clearFormState}/>
        </div>
        <TextField className='input-message-control' style={{margin: '0px 20px' }}
          label='Message'
          name='message'
          id='contact-message'
          onChange={this.changeHandler}
          error={ !this.state.formControls.message.valid && this.state.formControls.message.touched}
          onBlur={this.clearFormState}/>
        <Button onClick={this.formSubmitHandler}
          disabled={!this.state.formIsValid}
          style={{ alignSelf: 'center', width: '200px', margin: '40px 0px' }}
          variant="contained"
          color='primary'
          id='contact-submit'>
            { this.state.formIsSubmitted ? 'Submitting...' : 'Submit' }
          </Button>
      </form>
    )
  }
}
