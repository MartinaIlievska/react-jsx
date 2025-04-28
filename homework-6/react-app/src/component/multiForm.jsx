import { useState } from "react";
import "./multiForm.css"

export function MultiFunctionform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorInterests, setErrorInterests] = useState("");

  const [show, setShow] = useState("false");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleInterests = (e) => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
    } else {
      setInterests(interests.filter((interest) => interest !== e.target.value));
    }
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 3) {
      setErrorName("Name must be at leat 3 characters long");
    } else {
      setErrorName("");
    }

    if (!email.includes("@")) {
      setErrorEmail("Email not valid");
    } else {
      setErrorEmail("");
    }

    if (interests.length === 0) {
      setErrorInterests("Please selecct one or more fields");
    } else {
      setErrorInterests("");
    }

    setShow(!show);
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => handleInputName(e)}
          />
        </label>
        {errorName && <p style={{color:"red"}}>{errorName}</p>}

        <label>
          Email:
          <input
            type="email"
            value={email}
            required
            onChange={(e) => handleEmail(e)}
          />
        </label>
        {errorEmail && <p style={{color:"red"}}>{errorEmail}</p>}

        <p>Select gender</p>
        <label>
          Male
          <input
            type="radio"
            required
            value={"male"}
            checked={gender === "male"}
            onChange={handleGender}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            required
            value={"female"}
            checked={gender === "female"}
            onChange={handleGender}
          />
        </label>

        <label>
          <p>Select your interest:</p>
          Music
          <input
            type="checkbox"
            value="music"
            checked={interests.includes("music")}
            onChange={handleInterests}
          />
          Sport
          <input
            type="checkbox"
            value="sport"
            checked={interests.includes("sport")}
            onChange={handleInterests}
          />
          Art
          <input
            type="checkbox"
            value="art"
            checked={interests.includes("art")}
            onChange={handleInterests}
          />
          Reading
          <input
            type="checkbox"
            value="reading"
            checked={interests.includes("reading")}
            onChange={handleInterests}
          />
          Hiking
          <input
            type="checkbox"
            value="hiking"
            checked={interests.includes("hiking")}
            onChange={handleInterests}
          />
        </label>
        {errorInterests && <p style={{color:"red"}}>{errorInterests}</p>}

        <label>
          <p>Select your country</p>
          <select value={country} onChange={handleCountry}>
            <option value="">Select</option>
            <option value="macedonia">Macedonia</option>
            <option value="serbia">Serbia</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="greece">Greece</option>
            <option value="albania">Albania</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit form</button>
      </form>
      { show == true && (
        <div className="submit-div">
          <p>Submitted data:</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
          <p>Interests: {interests.join(",")}</p>
          <p>Country: {country}</p>
        </div>
      )}
    </div>
  );
}
