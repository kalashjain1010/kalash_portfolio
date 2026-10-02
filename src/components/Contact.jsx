import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const fieldClass =
  "w-full px-4 py-3 rounded-xl bg-bg-elevated/80 border border-white/10 text-text-primary placeholder:text-text-muted font-body text-sm outline-none transition-all";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setStatus(null);
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
          setStatus("ok");
        },
        (err) => {
          setLoading(false);
          console.error(err);
          setStatus("err");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start min-w-0 w-full">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.6)}
        className="flex-1 w-full max-w-xl rounded-2xl bg-bg-card/60 border border-white/[0.06] p-6 sm:p-8"
      >
        <p className={styles.sectionLabel}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Let’s work together</h3>
        <p className="font-body text-text-secondary text-sm mt-3 leading-relaxed">
          Have a project in mind, or just want to say hi? Drop a message.
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
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
              placeholder="What’s your name?"
              className={fieldClass}
            />
            {errors.name ? (
              <p className={styles.errorText}>{errors.name}</p>
            ) : null}
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
              className={fieldClass}
            />
            {errors.email ? (
              <p className={styles.errorText}>{errors.email}</p>
            ) : null}
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
              className={`${fieldClass} resize-none`}
            />
            {errors.message ? (
              <p className={styles.errorText}>{errors.message}</p>
            ) : null}
          </label>
          {status === "ok" ? (
            <p className="text-sm text-accent">Thanks — I’ll get back to you soon.</p>
          ) : null}
          {status === "err" ? (
            <p className="text-sm text-amber-400/90">Something went wrong. Please try again.</p>
          ) : null}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 min-h-[48px] px-6 py-3 rounded-full bg-accent text-bg font-semibold text-sm hover:bg-accent/90 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg self-start"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </motion.div>
      <motion.aside
        variants={slideIn("right", "tween", 0.2, 0.6)}
        className="w-full lg:max-w-sm space-y-4"
      >
        <div className="rounded-2xl border border-white/[0.06] bg-bg-card/40 p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
            Currently
          </p>
          <p className="font-display text-text-primary text-lg mt-2">
            Full stack at Pazy
          </p>
          <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed">
            Full stack developer at Pazy. Open to interesting work.
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-bg-card/40 p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted font-medium">
            Email
          </p>
          <a
            href="mailto:kalashjain54@gmail.com"
            className="font-body text-text-primary text-sm mt-2 inline-block hover:text-accent transition-colors break-all"
          >
            kalashjain54@gmail.com
          </a>
        </div>
      </motion.aside>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
