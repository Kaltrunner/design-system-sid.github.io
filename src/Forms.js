import { useState } from "react";
import Componentnav from "./Component-nav";
import Footer from "./Footer";
import { ScrollToTop } from "react-router-scroll-to-top";

function Forms() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(` Thank you ${name}, for you submission!`);
  };

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <Componentnav />
      <div className="colors-body-div">
        <div className="comp-header-div">
          <h1 className="comp-header-text">Forms.</h1>
        </div>

        <div className="form-comp-content">
          <div className="form-container-div">
            <p id="form-text" >
              <span className="h1-span" >
                Form with
              </span>{" "}
              - input fields, option select, text area and submit button.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="input-text"
                type="text"
                value={name}
                placeholder="Enter your name..."
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
            </form>

            <form onSubmit={handleSubmit}>
              <input
                className="input-text"
                type="password"
                autoComplete="off"
                value={password}
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </form>

            <form onSubmit={handleSubmit}>
              <input
                className="input-text"
                type="text"
                value={email}
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </form>

            <form onSubmit={handleSubmit}>
              <input
                className="input-text"
                type="text"
                value={phone}
                placeholder="Enter your phone #"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <br />
            </form>

            <form>
              <select
                className="input-text"
                value={select}
                onChange={handleSelect}
              >
                <option value="Selection">Select one...</option>
                <option value="Selection1">Selection 1</option>
                <option value="Selection2">Selection 2</option>
                <option value="Selection3">Selection 3</option>
                <option value="Selection4">Selection 4</option>
              </select>
            </form>

            <form>
              <textarea
                className="form-text-area"
                value={textarea}
                onChange={handleChange}
                placeholder="Write a message..."
              />
            </form>

            <form onSubmit={handleSubmit}>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
          {/* <form onSubmit={handleSubmit}>
            <input className="submit-btn" type="submit"></input>
          </form> */}
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Forms;
