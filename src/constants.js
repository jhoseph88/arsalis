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

export const about = {
  mission: "We are committed to providing elegant, contemporary, affordable software solutions to those who have yet to hop on the tech bandwagon. We believe cloud computing lowers the barrier of entry for smaller organizations who lack the capital or the expertise to hire a full-time engineering team.",
  values: "We believe in getting to know our clients as individuals is a key prerequisite to building for them products they can understand, take pride in, and love. We see the ability to explain our systems to a less technical audience than us as part of the definition of a quality finished product.",
  background: "We are a small team of colleagues and friends who have come together under the common mission of sharing world-class technical systems with regular people like us. We have worked full-time for Fortune 500 companies in fields including financial technology, healthcare, insurance, eCommerce, marketing, and small business. As technologists who have surveyed the state-of-the-art, we are prepared to bring to you years of hard-earned experience as well as a commitment to stay up-to-date on the bleeding edge of scale, affordability, and simplicity.",
}
