export const contactFormDefaults = {
  formIsValid: false,
  formIsSubmitted: false,
  formControls: {
    name: {
      value: '',
      valid: false,
      validationRules: {
        minLength: 2,
        isRequired: true
      },
      touched: false
    },
    email: {
      value: '',
      valid: false,
      validationRules: {
        isRequired: true,
        isEmail: true
      },
      touched: false
    },
    message: {
      value: '',
      valid: false,
      validationRules: {
        minLength: 3,
        isRequired: true
      },
      touched: false
    }
  }
}
