import { motion } from "framer-motion";
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';

import emailjs from "@emailjs/browser";


// interface FormData {
//   name: string;
//   link: string;
//   subject: string;
//   message: string;
// }

function ContactForm() {

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [formData, setFromData] = useState({
    user_name: "",
    user_link: "",
    user_subject: "",
    user_message: ""
  })

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };



  const handgleDisable = () => {

  }


  //send mail
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8vwl9zk",
      "template_iowl6j5",
      form.current,
      "HPmRrhMbOx2a9xfIY"
    )
      .then(
        (result) => {

          setIsButtonDisabled(false);
          setFromData({
            user_name: "",
            user_link: "",
            user_subject: "",
            user_message: ""
          })


          alert(result.text);

        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const handleButton = () => {
    setIsButtonDisabled(true)
  }


  //enable button aagain 



  return (
    <div className="flex-grow relative ">
      <form  netlify-honeypot="bot-field"   data-netlify-recaptcha="true"  name="contact"  method="POST" data-netlify="true"  action="" className="flex flex-grow flex-col -z-10" ref={form} onSubmit={sendEmail}>
        <motion.div className="flex flex-col gap-y-1 flex-grow">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.user_name}
            required
            name="user_name"
            placeholder="Enter your name"
            className=" mt-2 bg-gray-900 flex-grow py-4 px-4 border border-gray-600 rounded-md"
          />
        </motion.div>
        <motion.div className="grid gap-y-1 flex-grow  mt-6">
          <label htmlFor="email">Ways for contact you *</label>
          <input
            type="text"
            id="email"
            onChange={handleChange}
            value={formData.user_link}

            name="user_link"
            required
            placeholder="Email or social media link"
            className="bg-gray-900  mt-2 py-4 px-4 border border-gray-600 rounded-md"
          />
        </motion.div>
        <motion.div className="grid gap-y-1 flex-grow  mt-6">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"

            name="user_subject"
            id="subject"
            onChange={handleChange}
            value={formData.user_subject}
            placeholder="Subject"
            className="bg-gray-900 mt-2  py-4 px-4 border border-gray-600 rounded-md"
          />
        </motion.div>
        <motion.div className="grid items-stretch gap-y-1 flex-grow  mt-6">
          <label htmlFor="mesasge">Message *</label>
          <textarea
            required

            placeholder="Message"
            id="message"
            onChange={handleChange}
            value={formData.user_message}
            name="user_message"
            className="bg-gray-900 py-4 mt-2  px-4 border border-gray-600 rounded-md w-full h-[120px]  "
          />
        </motion.div>
        <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>

    <div data-netlify-recaptcha="true"></div>

        <motion.div className="grid w-full place-items-end flex-grow">
          <button className="pbtn w-fit mt-8" type="submit" value="Send" onClick={handleButton} disabled={isButtonDisabled}>{isButtonDisabled ? 'Submitting...' : 'Submit '}</button>
        </motion.div>
      </form>
    </div>
  );
}

export default ContactForm;
