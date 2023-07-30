import React, { useRef, useState, useEffect } from "react";
import { motion, warning } from "framer-motion";
import emailjs from "emailjs-com";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { support, warnimg } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(form));
    setIsSubmitting(true);
  };

  const sendEmail = () => {
    emailjs
      .send(
        'service_lamq8af',
        'template_5o9d5wm',
        {
          from_name: form.name,
          to_name: "Kalash Jain",
          from_email: form.email,
          to_email: "kalashjain54@gmail.com",
          message: form.message,
        },
        'rww7YYWd1MUNjSXqv' // Replace with your user ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  // Submit the form if there are no errors
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setLoading(true);
      sendEmail();
      setIsSubmitting(false);
    }
  }, [errors]);

  let customMess = "Refresh Again";


  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] max-sm:mt-28 bg-[#83dcc6] form p-8 rounded-2xl z-30'
      style={{ backgroundColor: "rgba(131, 220, 198, 0.6)" }}
    >
         <p className={`${styles.sectionSubText} text-white `} >Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 '
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name &&
             <div className="flex gap-2 ml-2">
              <img className="w-5 h-5 mt-2" src={warnimg} alt="warning" />
              <p className={styles.errorText}>{errors.name}</p>
             </div>
            }
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email &&
             <div className="flex gap-2 ml-2">
             <img className="w-5 h-5 mt-2" src={warnimg} alt="warning" />
             <p className={styles.errorText}>{errors.email}</p>
            </div>
            }
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message
             && 
             <div className="flex gap-2 ml-2">
              <img className="w-5 h-5 mt-2" src={warnimg} alt="warning" />
              <p className={styles.errorText}>{errors.message}</p>
             </div>
            }
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-secondary'
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            {loading ? "Sending..." : "Send"}
            {errors.message
             && 
             <div className="flex gap-2 ml-2">
              <p className={styles.errorText}>{"Refresh Again Please"}</p>
             </div>
            }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px]'
      >
        <img className=" max-sm:h-[500px]"  src={support} alt="" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");