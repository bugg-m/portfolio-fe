import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@bugg-m/bugg-ui';

import { bug } from '@host/constants/icons';

const LogoIcon: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex-center gap-2"
    >
      <div className="hover:animate-ping">
        <Icon
          src={bug}
          className="md:size-10 size-8"
        />
      </div>
      <span className="md:text-xl text-lg hover:animate-pulse font-semibold text-neutral-700">
        BUGG
      </span>
    </Link>
  );
};

export default LogoIcon;
