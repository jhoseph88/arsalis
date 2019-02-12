import React, {Component} from 'react';
import TextInput from './TextInput';
import Email from './Email';
import Message from './Message';
import Validate from './ValidateInput';

class ContractForm extends Component {
  constructor () {
    super();

      this.state = {
        formIsValid: false,
        formControls: {
          name: {
            value: '',
            placeholder: 'Name',
            valid: false,
            validationRules: {
              minLength: 3,
              isRequired: true
            },
            touched: false
          },
          email: {
            value: '',
            placeholder: 'Email',
            valid: false,
            validationRules: {
              isRequired: true,
              isEmail: true
            },
            touched: false
          },
          message: {
            value: '',
            placeholder: 'Message',
            valid: false,
            validationRules: {
              minLength: 3,
              isRequired: true
            },
            touched: false
          }
        }
      }
    }

    changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      const updatedControls = {
  	     ...this.state.formControls
      };
      const updatedFormElement = {
  	     ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = Validate(value, updatedFormElement.validationRules);

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
      	formControls: updatedControls,
        formIsValid: formIsValid
      });
    }

    formSubmitHandler = () => {
      const formData = {};
      for (let formElementId in this.state.formControls) {
        formData[formElementId] = this.state.formControls[formElementId].value;
      }
      console.log(formData);
    }

    render () {
      return (
        <form>
            <TextInput name="name"
                       placeholder={this.state.formControls.name.placeholder}
                       value={this.state.formControls.name.value}
                       onChange={this.changeHandler}
                       touched={this.state.formControls.name.touched}
                       valid={this.state.formControls.name.valid}
            />
            <Email name="email"
                       placeholder={this.state.formControls.email.placeholder}
                       value={this.state.formControls.email.value}
                       onChange={this.changeHandler}
                       touched={this.state.formControls.email.touched}
                       valid={this.state.formControls.email.valid}
            />
            <TextInput name="message"
                       placeholder={this.state.formControls.message.placeholder}
                       value={this.state.formControls.message.value}
                       onChange={this.changeHandler}
                       touched={this.state.formControls.message.touched}
                       valid={this.state.formControls.message.valid}
            />
            <button onClick={this.formSubmitHandler}
                    disabled={! this.state.formIsValid}
            > Submit </button>
        </form>
      );
    }
  }

  export default ContractForm;
