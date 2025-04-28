import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  const [show, setShow] = useState("false");
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 3) {
      setErrorName("Name must be 3 charachters long");
    } else {
      setErrorName("");
    }

    if (!email.includes("@")) {
      setErrorEmail("Email not valid");
    } else {
      setErrorEmail("");
    }

    if (message.length < 10) {
      setErrorMessage("Message must be longer than 10 charachters");
    } else {
      setErrorMessage("");
    }
    setShow(!show)
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleName} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label>
          Message:
          <input type="textarea" value={message} onChange={handleMessage} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorName == "" && show == true ?   <p>{name}</p> : <p style={{ background: "red" }}>{errorName}</p>}
      {errorEmail == ""  && show == true ?  <p>{email}</p> : <p style={{ background: "red" }}>{errorEmail}</p>}
      {errorMessage == ""  && show == true ?  <p>{message}</p> : <p style={{ background: "red" }}>{errorMessage}</p> }
    </div>
  );
}

export default ContactForm;