import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { support, warnimg } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) next.email = "Invalid email";
    if (!values.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setIsSubmitting(true);
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_lamq8af",
        "template_5o9d5wm",
        {
          from_name: form.name,
          to_name: "Kalash Jain",
          from_email: form.email,
          to_email: "kalashjain54@gmail.com",
          message: form.message,
        },
        "rww7YYWd1MUNjSXqv"
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          setErrors({});
          alert("Thanks! I'll get back to you soon.");
        },
        (err) => {
          setLoading(false);
          console.error(err);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setLoading(true);
      sendEmail();
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting]);

  return (
    <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start min-w-0 w-full">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.6)}
        className="flex-1 w-full max-w-xl rounded-xl bg-bg-card/80 border border-bg-border p-8"
      >
        <p className={styles.sectionLabel}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col gap-1.5">
            <span className="font-body text-text-primary font-medium text-sm">
              Your name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-bg-border text-text-primary placeholder:text-text-muted font-body text-sm outline-none focus:border-accent/50 transition-colors"
            />
            {errors.name && (
              <div className="flex items-center gap-2">
                <img src={warnimg} alt="" className="w-4 h-4" />
                <p className={styles.errorText}>{errors.name}</p>
              </div>
            )}
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-body text-text-primary font-medium text-sm">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-bg-border text-text-primary placeholder:text-text-muted font-body text-sm outline-none focus:border-accent/50 transition-colors"
            />
            {errors.email && (
              <div className="flex items-center gap-2">
                <img src={warnimg} alt="" className="w-4 h-4" />
                <p className={styles.errorText}>{errors.email}</p>
              </div>
            )}
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-body text-text-primary font-medium text-sm">
              Message
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-bg-border text-text-primary placeholder:text-text-muted font-body text-sm outline-none focus:border-accent/50 transition-colors resize-none"
            />
            {errors.message && (
              <div className="flex items-center gap-2">
                <img src={warnimg} alt="" className="w-4 h-4" />
                <p className={styles.errorText}>{errors.message}</p>
              </div>
            )}
          </label>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 min-h-[44px] px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.6)}
        className="xl:flex-1 flex justify-center min-w-0"
      >
        <img
          src={support}
          alt=""
          className="max-h-[420px] max-w-full w-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
