import { Link } from 'react-router-dom';
import Icon from '@host/components/icon/icon';
import icons from '@host/constants/icons';

const LogoIcon = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="hover:animate-ping">
        <Icon src={icons.bug} alt="bug icon" />
      </div>
      <span className="md:text-xl text-lg hover:animate-pulse font-semibold text-secondary-700">
        BUGG
      </span>
    </Link>
  );
};

export default LogoIcon;
