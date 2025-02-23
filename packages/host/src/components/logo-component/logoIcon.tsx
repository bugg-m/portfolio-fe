import { Link } from 'react-router-dom';
import icons from '@host/constants/icons';
import { Icon } from '@bugg-m/bugg-ui';

const LogoIcon = () => {
  return (
    <Link to="/" className="flex-center gap-2">
      <div className="hover:animate-ping">
        <Icon src={icons.bug} className="md:size-10 size-8" />
      </div>
      <span className="md:text-xl text-lg hover:animate-pulse font-semibold text-secondary-700">
        BUGG
      </span>
    </Link>
  );
};

export default LogoIcon;
