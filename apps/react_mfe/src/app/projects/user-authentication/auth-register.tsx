import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Input } from '@bugg-m/bugg-ui';
import { NotifyError } from '@components/notify/notify';
import { ReactRoutesEnum } from '@enums/app-routes-enum';

import { RegisterSuccessModal } from '@react_mfe/components/modals/register-success-modal';

import { usePostDataHook } from '@api/hooks/use-post-data-hook';
import { ReactMFEApiRoutes } from '@api/routes/react-mfe-api-routes';

const AuthRegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isLoading, postData } = usePostDataHook();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      [formData.username, formData.email, formData.password].some(value => value?.trim() === '')
    ) {
      NotifyError('All fields are required');
      return;
    }

    const response = await postData({
      url: ReactMFEApiRoutes.REGISTER,
      data: formData,
      notify: true,
    });

    if (!response.status) {
      return;
    }
    setShowSuccessModal(true);
    setFormData({ username: '', email: '', password: '' });
  };

  const onLogIn = () => {
    setShowSuccessModal(false);
    navigate(ReactRoutesEnum.LOG_IN);
  };

  return (
    <div className="min-h-screen w-full flex-center">
      <RegisterSuccessModal
        showModal={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onLogIn={onLogIn}
      />
      <Card className="md:w-2/5 sm:w-4/5 w-full px-3 py-10 space-y-5">
        <h2 className="title text-2xl font-bold text-center">Register</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-10 md:p-10 px-2 py-3"
        >
          <section className="space-y-5">
            <Input
              id="username"
              name="username"
              colorScheme="secondary"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <Input
              id="email"
              name="email"
              colorScheme="secondary"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <Input
              id="password"
              name="password"
              type="password"
              colorScheme="secondary"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </section>

          <Button
            type="submit"
            className="w-full"
            disabled={!formData.username || !formData.email || !formData.password}
            isLoading={isLoading}
          >
            Register
          </Button>
        </form>
        <p className="mt-4 text-center text-neutral-600 text-sm">
          Already have an account?
          <Link
            to={ReactRoutesEnum.LOG_IN}
            className="text-primary-600 p-1 hover:underline"
          >
            Log in
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default AuthRegisterPage;
