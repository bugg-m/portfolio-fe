import { Link } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import Icon from '../icon/icon';
import icons from '@host/constants/icons';

function Footer() {
  const links = [
    {
      to: 'https://github.com/cyborgM1002',
      icon: icons.github,
      alt: 'github icon',
    },
    {
      to: 'https://www.linkedin.com/in/manish-kumar-2b4924200/',
      icon: icons.linkedin,
      alt: 'linkedin icon',
    },
    {
      to: 'https://echobuggm@gmail.com',
      icon: icons.mail,
      alt: 'mail icon',
    },
    {
      to: 'https://wa.me/9058314973',
      icon: icons.message,
      alt: 'message icon',
    },
  ];

  return (
    <div className="w-full">
      <div className="sm:flex px-10 sm:items-center sm:justify-between py-3 border-t border-secondary-500">
        <LogoIcon />
        <div className="flex items-center justify-center gap-3">
          {links.map(({ to, icon, alt }) => (
            <Link
              to={to}
              target="_blank"
              className="hover:underline size-8 p-1.5 flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-700"
            >
              <Icon src={icon} alt={alt} className="invert" />
            </Link>
          ))}
        </div>
      </div>
      <hr className="w-11/12 border-secondary-100 sm:mx-auto" />
      <span className="block py-2 text-sm text-secondary-500 sm:text-center">
        © 2024{' '}
        <Link to="/" className="hover:underline">
          BUGG™
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
