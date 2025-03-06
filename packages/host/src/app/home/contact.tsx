import { Button, Card, Image, Input, TextArea } from '@bugg-m/bugg-ui';
import { usePostDataHook } from '@host/api/hooks/use-post-data-hook';
import { PortfolioRoutes } from '@host/api/routes/portfolio-api-routes';
import { NotifyError } from '@host/components/notify/notify';
import illustrations from '@host/constants/illustrations';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { isLoading, postData } = usePostDataHook();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      [formData.name, formData.email, formData.message].some(
        (value) => value?.trim() === ''
      )
    ) {
      NotifyError('All fields are required');
      return;
    }

    const response = await postData({
      url: PortfolioRoutes.SEND_MESSAGE,
      data: formData,
      notify: true,
    });

    if (!response.status) {
      return;
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section bg-secondary-50 border-x border-secondary-300">
      <div className="md:max-w-5xl w-full mx-auto md:px-4">
        <h2 className="header">Get In Touch</h2>
        <p className="l-paragraph animate-paragraph mb-10">
          Whether you have a project in mind or just want to say hello, feel
          free to reach out.
        </p>
        <div className="flex-between-center w-full flex-col-reverse md:flex-row gap-8">
          <Card hoverable className="flex-1 md:w-4/5 sm:w-3/5 w-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-12 md:p-10 px-2 py-3"
              noValidate
            >
              <div className="space-y-6">
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
              </div>
              <Button
                type="submit"
                fullWidth
                isLoading={isLoading}
                loadingText="Sending..."
              >
                Send Message
              </Button>

              {/* <p className="text-neutral-700 text-sm">
                Or email me at
                <Button
                  variant="link"
                  href="echobuggm@email.com"
                  className="px-1.5 text-neutral-700 hover:text-primary-500"
                >
                  echobuggm@email.com
                </Button>
              </p> */}
            </form>
          </Card>
          <div className="flex-1 md:w-2/5 flex flex-col justify-center items-center space-y-4">
            <Image
              size="full"
              src={illustrations.contact}
              alt="contact"
              className="hover-scale-110 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
