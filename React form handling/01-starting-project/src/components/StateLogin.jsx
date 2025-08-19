import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [isEdited, setIsEdited]  = useState({
    email: false,
    password: false,
  })

  function handleInputBlur(identifier){
      setIsEdited((prevState)=>({
        ...prevState,
        [identifier] : true
      }))
  }
  const isEmailValid = isEdited.email && !enteredValues.email.includes("@");
  const isPasswordValid = isEdited.password && enteredValues.password.length < 6
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setIsEdited((prevState)=>({
      ...prevState,
      [identifier]: false
    }))
  }
  
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }
      
    function handleSubmit(event) {
      event.preventDefault();
      console.log("submitteed");
    }
      return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onBlur={(event) => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error">
            {isEmailValid && <p>Please enter vaid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onBlur={(event) => handleInputBlur("password")}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
          <div className="control-error">{isPasswordValid && <p>Please enter a valid password</p>}</div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
