import { Button, Card, Image, Input, TextArea } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';
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
    setStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section bg-secondary-50 border-x border-secondary-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="header">Get In Touch</h2>
        <p className="l-paragraph animate-paragraph mb-10">
          Whether you have a project in mind or just want to say hello, feel
          free to reach out.
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <Card hoverable className="flex-1" size="xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <TextArea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" fullWidth>
                Send Message
              </Button>
              {status && <p className="text-center text-green-600">{status}</p>}
              <p className="text-neutral-700 text-sm">
                Or email me at
                <Button
                  variant="link"
                  href="mailto:your@email.com"
                  className="px-1.5 text-neutral-700 hover:text-primary-500"
                >
                  echobuggm@email.com
                </Button>
              </p>
            </form>
          </Card>
          <div className="flex-1 flex flex-col justify-center items-center space-y-4">
            <Image
              size="full"
              src={illustrations.contact}
              alt="contact"
              className="hover-scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
