import toast from 'react-hot-toast';

const NotifySuccess = (message: string) => {
  return toast.success(message ?? 'Success');
};

const NotifyError = (message: string) => {
  return toast.error(message ?? 'Error');
};

export { NotifySuccess, NotifyError };
