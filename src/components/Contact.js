// import React from 'react';
//
// class FormComponent extends Component {
//   constructor () {
//     super();
//
//       this.state = {
//         formControls: {
//           name: {
//             value: '',
//             placeholder: 'Name',
//             valid: false,
//             validationRules: {
//               minLength: 3,
//               isRequired: true
//             },
//             touched: false
//           },
//           email: {
//             value: ''
//           }
//         }
//       }
//     }
//   }
//
//   changeHandler = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//
//     const updatedControls = {
// 	     ...this.state.formControls
//     };
//     const updatedFormElement = {
// 	     ...updatedControls[name]
//     };
//     updatedFormElement.value = value;
//     updatedFormElement.touched = true;
//     updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
//
//     updatedControls[name] = updatedFormElement;
//
//     this.setState({
//     	formControls: updatedControls
//     });
//   }
//
//   const validate = (value, rules) => {
//     let isValid = true;
//
//     for (let rule in rules) {
//
//       switch (rule) {
//         	case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]);
//           break;
//           case 'isRequired': isValid = isValid && requiredValidator(value);
//           break;
//           case 'isEmail': isValid = isValid && emailValidator(value);
//
//         	default: isValid = true;
//       }
//
//     }
//
//     return isValid;
//   }
//
//   const minLengthValidator = (value, minLength) => {
//     return value.length >= minLength;
//   }
//
//   const requiredValidator = value => {
//     return value.trim() !== '';
//   }
//
//   const emailValidator = value => {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(value).toLowerCase());
//   }
//
//   formSubmitHandler = () => {
//     console.dir(this.state.formControls);
//   }
//
//   // render () {
//     return (
//       <form>
//           <input type="name"
//                  name="name"
//                  value={this.state.formControls.name.value}
//                  onChange={this.changeHandler}
//           />
//           <input type="email"
//                  name="email"
//                  value={this.state.formControls.email.value}
//                  onChange={this.changeHandler}
//           />
//       </form>
//     )
//   // }
