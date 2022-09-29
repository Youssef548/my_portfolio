import React from "react";

const ContactForm = () => {
  return (
    <>
      <h3 className="form-title">Contact me, let’s make magic together</h3>
      <form className="form" onSubmit={() => console.log("clicked")}>
        <input type="text" className="name" placeholder="Name:" />
        <input type="email" className="email" placeholder="Email:" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-form">Send</button>
      </form>
    </>
  );
};

export default ContactForm;
