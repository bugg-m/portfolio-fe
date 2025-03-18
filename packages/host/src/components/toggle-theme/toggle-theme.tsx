import React, { useEffect,useState } from 'react';
import { Icon } from '@bugg-m/bugg-ui';

import { sunDark, sunLight } from '@host/constants/icons';

const ToggleTheme: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <Icon
      src={darkTheme ? sunDark : sunLight}
      size="md"
      className={`hover-scale-110 hover:bg-primary-100 ${
        darkTheme ? 'text-secondary-50' : 'text-primary-600'
      }`}
      rounded="full"
      onClick={() => setDarkTheme(!darkTheme)}
    />
  );
};

export default ToggleTheme;
