import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion/dist/framer-motion";
import { FiSend } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";

const ContactForm = () => {
  const initValue = { name: "", email: "", message: "" };
  const form = useRef();
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(initValue);

  // const [isValid, setIsValid] = useState();
  // const [hasError, setHasError] = useState();
  // setFromErrors(validate(formValues));
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_htgmbuw",
        "template_8q7i7xg",
        form.current,
        "hTzHqrfXxBfu1b0M1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmited(true);
      setFormValues(initValue);
    }, 2000);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };
  // const validate = (values) => {
  //   const errors = {};
  //   const regex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (!values.name) {
  //     errors.name = "name is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "this is email invalid!";
  //   }
  //   if (!values.message) {
  //     errors.message = "message is required!";
  //   }
  //   return errors;
  // };

  // if (Object.keys(formErrors).length === 0 && isSubmit) {
  // }

  return (
    <>
      <h3 className="form-title">Let's create something amazing together</h3>
      <motion.form 
        ref={form} 
        className="form" 
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="form-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            name="name"
            value={formValues.name}
            onChange={changeHandler}
            required
          />
        </motion.div>

        <motion.div 
          className="form-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="email"
            className="form-input"
            placeholder="Your Email"
            name="email"
            value={formValues.email}
            onChange={changeHandler}
            required
          />
        </motion.div>

        <motion.div 
          className="form-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <textarea
            className="form-textarea"
            rows="5"
            placeholder="Your Message"
            name="message"
            value={formValues.message}
            onChange={changeHandler}
            required
          ></textarea>
        </motion.div>
        
        <motion.div 
          className="form-submit"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {isSubmited ? (
            <motion.div 
              className="success-message-contact"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <BiCheckCircle className="success-icon" />
              <span>Your message has been successfully sent!</span>
            </motion.div>
          ) : (
            <motion.button 
              className="btn btn-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {isLoading ? "Sending..." : (
                <>
                  <span>Send Message</span>
                  <FiSend className="send-icon" />
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </motion.form>
    </>
  );
};

export default ContactForm;
