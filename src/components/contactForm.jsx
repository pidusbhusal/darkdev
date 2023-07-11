import { motion } from "framer-motion";
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';



// interface FormData {
//   name: string;
//   link: string;
//   subject: string;
//   message: string;
// }

function ContactForm() {
    const captchaRef = useRef();
    const [submitReady, setSubmitReady] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [captcha, setCaptcha] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formData, setFromData] = useState({
    user_name: "",
    user_link: "",
    user_subject: "",
    user_message: ""
  })

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
    (formData.user_name == "" || formData.user_link =="" || formData.user_message == "" )? setSubmitReady(false) : setSubmitReady(true)
  };
function onChange(value) {
  console.log("Captcha value:", value);
  setVerfied(true)
}


 
    const onCaptchaChange = (e) => {
    if (e) {
      setCaptcha(true);
    } else {
      setCaptcha(false);
    }
  };


  //send mail
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setSubmitReady(false)

    emailjs.sendForm(
      "service_8vwl9zk",
      "template_iowl6j5",
      form.current,
      "HPmRrhMbOx2a9xfIY"
    )
      .then(
        (result) => {
        setTimeout(() => {
          setSubmitStatus("idle");
            setFromData({
                  user_name: "",
                  user_link: "",
                  user_subject: "",
                  user_message: ""
                })
            }, 1000);
            toast('Message Submitted Sucessfully')
          
          
        },
        (error) => {
          setSubmitStatus("idle");
          
        }
      );
  };




  //enable button aagain 



  return (
    <div className="flex-grow relative ">
      <form  netlify-honeypot="bot-field"     name="contact"  method="POST" data-netlify="true"  action="" className="flex flex-grow flex-col -z-10" ref={form} onSubmit={sendEmail}>
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
        <motion.div className="grid items-stretch gap-y-1 flex-grow  mt-6">
          <ReCAPTCHA
            sitekey="6LdgXRUnAAAAAPZUDsXG5oo4gJvSV_WBiwRpR26v"
            onChange={onCaptchaChange}
            ref={captchaRef}
  />
        </motion.div>
        <p className="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>

 

        <motion.div className="grid w-full place-items-end flex-grow">
          <button className={(submitStatus === "loading" || !captcha || !submitReady)?`desbtn w-fit mt-8` : `pbtn w-fit mt-8`} type="submit" value="Send"  disabled={!captcha || submitStatus === "loading"}> {submitStatus === "loading"
            ? "Sending..."
            : submitStatus === "success"
            ? "Thankyou"
            : "Submit"}</button>
        </motion.div>
        <Toaster  position="bottom-center"/>
      </form>
     
            

    </div>
    
  );
}

export default ContactForm;
