import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailisInvalid] = useState(false);
  // using ref
  const email = useRef();
  const password = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail, enteredPassword);
    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailisInvalid(true);
      return;
    }
    setEmailisInvalid(false);
    console.log("Sending Http request");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input ref={email} id='email' type='text' name='email' />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input ref={password} id='password' type='password' name='password' />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        {/* dont add event listner for submit on btn insted use onSubmit event on the form to prvent the default submitting and reloading behaviour of the button. */}
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
