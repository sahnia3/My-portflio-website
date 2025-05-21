"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
  useEffect(() => {
    emailjs.init('qZSzaRNwwK1KvAXli');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      setSending(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Aditya Sahni',
    };

    try {
      await emailjs.send(
        'service_2r2e2pn',
        'template_88cb4mt',
        templateParams,
        'qZSzaRNwwK1KvAXli'
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl hover:text-purple-500" />,
      label: 'GitHub',
      link: 'github.com/sahnia3',
      href: 'https://github.com/sahnia3'
    },
    {
      icon: <FaLinkedin className="text-2xl hover:text-purple-500" />,
      label: 'LinkedIn',
      link: 'linkedin.com/in/sahniaditya',
      href: 'https://www.linkedin.com/in/sahniaditya/'
    },
    {
      icon: <FaInstagram className="text-2xl hover:text-purple-500" />,
      label: 'Instagram',
      link: 'instagram.com/aditya_sahniii',
      href: 'https://www.instagram.com/aditya_sahniii/'
    }
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden z-[30]">
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
        className="z-50"
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-30 max-w-7xl mx-auto px-4 md:px-20 pt-48 pb-20 pointer-events-auto"
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-gray-400 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear from you!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative pointer-events-auto">
          {/* Contact Form */}
          <div className="bg-[#1B1B1B] p-8 rounded-lg border-2 border-[#5656578b] relative z-40 shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]">
            <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>
            <p className="text-gray-400 mb-6">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#141414] border-2 border-[#5656578b] rounded-lg p-3 text-white shadow-[inset_0_0_5px_rgba(70,70,70,0.5)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#141414] border-2 border-[#5656578b] rounded-lg p-3 text-white shadow-[inset_0_0_5px_rgba(70,70,70,0.5)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[#141414] border-2 border-[#5656578b] rounded-lg p-3 text-white shadow-[inset_0_0_5px_rgba(70,70,70,0.5)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full bg-[#141414] border-2 border-[#5656578b] rounded-lg p-3 text-white shadow-[inset_0_0_5px_rgba(70,70,70,0.5)]"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Connect Links */}
          <div className="space-y-8 relative z-40">
            <div className="bg-[#1B1B1B] p-8 rounded-lg border-2 border-[#5656578b] shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]">
              <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
              <p className="text-gray-400 mb-6">You can also reach out to me directly through these channels</p>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#141414] border-2 border-[#5656578b] rounded-lg hover:border-purple-500 transition-colors cursor-pointer shadow-[inset_0_0_5px_rgba(70,70,70,0.5)]"
                  >
                    <span className="text-2xl mr-4">
                      {link.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold">{link.label}</h3>
                      <p className="text-gray-400">{link.link}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#1B1B1B] p-8 rounded-lg border-2 border-[#5656578b] shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]">
              <h2 className="text-2xl font-semibold mb-4">Current Location</h2>
              <p className="text-gray-400">Hamilton, Ontario, Canada</p>
            </div>
          </div>

        </div>

        {/* Social Icons Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="m-8 flex items-center justify-center gap-4 text-3xl z-40 pointer-events-auto"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors cursor-pointer"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
