import { Link } from 'react-router-dom';
import bug from '@host/assets/svg-logo/bug.svg';
const LogoIcon = () => {
  return (
    <div>
      <Link to={'/'} className="flex justify-start items-center gap-2">
        <div className="md:size-8 size-6 hover:animate-ping">
          <img src={bug} alt="bug icon" />
        </div>
        <span className="md:text-xl text-lg hover:animate-pulse md:pt-1 pt-0.5 font-semibold">
          BUGG
        </span>
      </Link>
    </div>
  );
};

export default LogoIcon;
