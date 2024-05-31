// import { useState } from "react";
// import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
// import Input from "./Input";

// export default function Login() {
//   const [enteredValues, setEnteredValue] = useState({
//     email: "",
//     password: "",
//   });
//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false,
//   });
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(enteredValues);
//     setEnteredValue({
//       email: "",
//       password: "",
//     });
//   }
//   const emailIsInvalid =
//     (didEdit.email && !isEmail(enteredValues.email)) ||
//     !isNotEmpty(enteredValues.email);

//   console.log(emailIsInvalid);
//   const passwordIsInValid =
//     didEdit.password && !hasMinLength(enteredValues.password, 6);

//   function handleInputChange(identifier, value) {
//     // handle the change in input
//     console.log(value);
//     setEnteredValue((prevValue) => ({
//       ...prevValue,
//       [identifier]: value,
//     }));
//     // disapperar error message once the user types again
//     setDidEdit((prevValue) => ({
//       ...prevValue,
//       [identifier]: false,
//     }));
//   }
//   function handleInputBlur(identifier) {
//     //set the didEdit state true once the user leve the partivular input field
//     setDidEdit((prevValue) => {
//       return {
//         ...prevValue,
//         [identifier]: true,
//       };
//     });
//     console.log("Blured");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className='control-row'>
//         <Input
//           label='Email'
//           id='email'
//           type='email'
//           name='email'
//           onBlur={(e) => handleInputBlur("email")}
//           onChange={(e) => handleInputChange("email", e.target.value)}
//           value={enteredValues.email}
//           error={emailIsInvalid && "Please Enter a Valid email"}
//         ></Input>

//         <Input
//           label='Password'
//           id='password'
//           type='password'
//           name='password'
//           onBlur={(e) => handleInputBlur("password")}
//           onChange={(e) => handleInputChange("password", e.target.value)}
//           value={enteredValues.password}
//           error={passwordIsInValid && "Please Enter a Valid password"}
//         ></Input>
//       </div>

//       <p className='form-actions'>
//         <button type='reset' className='button button-flat'>
//           Reset
//         </button>
//         {/* dont add event listner for submit on btn insted use onSubmit event on the form to prvent the default submitting and reloading behaviour of the button. */}
//         <button className='button'>Login</button>
//       </p>
//     </form>
//   );
// }
