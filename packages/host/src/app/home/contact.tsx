import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission (replace with your actual form handling logic)
    setStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-500 text-center mb-4 transition-colors duration-300 hover:text-primary-700">
          Get In Touch
        </h2>
        <p className="text-center text-neutral-700 mb-10">
          Whether you have a project in mind or just want to say hello, feel
          free to reach out.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white p-8 rounded-lg shadow-md space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-neutral-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-neutral-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-neutral-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-700 text-white font-semibold rounded-md transition-colors"
            >
              Send Message
            </button>
            {status && <p className="text-center text-green-600">{status}</p>}
          </form>

          {/* Direct Contact & Social Links */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-500 transition-colors text-3xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-500 transition-colors text-3xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-500 transition-colors text-3xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="text-neutral-700 text-sm">
              Or email me at{' '}
              <a
                href="mailto:your@email.com"
                className="underline hover:text-primary-500 transition-colors"
              >
                your@email.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
