import React from 'react';

const Form= (props) => {
  return (
    <div>
      <form id="application-input" onSubmit={props.handleSubmit}>
        <label>Apply Here: </label>
        <textarea onChange= {props.handleChange} id="application-text" rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
      <p id="message">{props.message ? "Your application was submitted!": ""}</p>
      <button id="preview-toggle" onClick={props.handleClick}>Show Preview</button>
      <section id="application-preview" className="hidden">{props.application}</section>
    </div>
  );
}

export default Form;
