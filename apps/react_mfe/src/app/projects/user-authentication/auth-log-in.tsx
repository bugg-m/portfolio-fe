import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Input } from '@bugg-m/bugg-ui';
import { NotifyError } from '@components/notify/notify';
import { ReactRoutesEnum } from '@enums/app-routes-enum';
import { StorageNamesEnum } from '@enums/storage-names-enum';
import { setLocalStorage } from '@utils/core-utilities';

import { usePostDataHook } from '@api/hooks/use-post-data-hook';
import { ReactMFEApiRoutes } from '@api/routes/react-mfe-api-routes';

const AuthLoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
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

    if ([formData.username, formData.password].some(value => value?.trim() === '')) {
      NotifyError('All fields are required');
      return;
    }

    const response = await postData({
      url: ReactMFEApiRoutes.LOG_IN,
      data: formData,
      notify: true,
    });

    if (!response.status) {
      return;
    }
    setFormData({ username: '', password: '' });
    setLocalStorage({
      name: StorageNamesEnum.USER_DETAILS,
      value: response.data,
      expiryTime: '4d',
    });
    navigate(ReactRoutesEnum.USER_PROFILE);
  };

  return (
    <div className="min-h-screen w-full flex-center">
      <Card className="md:w-3/5 sm:w-4/5 w-full px-3 py-10 space-y-5">
        <h2 className="title text-2xl font-bold text-center mb-4">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-12 px-5 py-3"
        >
          <Input
            id="username"
            name="username"
            colorScheme="secondary"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username or Email"
            required
          />
          <Input
            id="password"
            type="password"
            name="password"
            colorScheme="secondary"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <Button
            type="submit"
            className="w-full"
            disabled={!formData.username || !formData.password}
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
        <p className="mt-4 text-center text-neutral-600 text-sm">
          Don't have an account?
          <Link
            to={ReactRoutesEnum.REGISTER}
            className="text-primary-600 p-1 hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default AuthLoginPage;
