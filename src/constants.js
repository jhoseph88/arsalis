export const contactFormDefaults = {
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
