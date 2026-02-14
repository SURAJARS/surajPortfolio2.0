"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/suraj-ars-b2a518190/",
      color: "hover:text-blue-600",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      url: "https://github.com/surajars",
      color: "hover:text-gray-900",
    },
    {
      icon: FiTwitter,
      label: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: FiMail,
      label: "Email",
      url: "mailto:contact@surajars.com",
      color: "hover:text-amber-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="section-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Let's Connect
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              {submitted ? "Message Sent! 🎉" : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:contact@surajars.com"
                className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition border border-amber-200"
              >
                <FiMail className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-amber-900">
                    contact@surajars.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <FiPhone className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-amber-900">+91 9876543210</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-amber-900 mb-4">Follow Me</h4>
              <div className="flex gap-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-amber-600 transition ${link.color}`}
                      aria-label={link.label}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
