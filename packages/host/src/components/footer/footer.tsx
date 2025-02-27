import { Link } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import icons from '@host/constants/icons';
import { Icon } from '@bugg-m/bugg-ui';

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
      <div className="flex-content-between px-4 md:px-10 py-1 md:py-3 border-t border-secondary-300">
        <LogoIcon />
        <div className="flex items-center justify-center gap-3">
          {links.map(({ to, icon, alt }) => (
            <Link
              key={alt}
              to={to}
              className="size-6 md:size-8 flex items-center justify-center rounded-full border border-primary-50 hover:bg-primary-50"
              target="_blank"
            >
              <Icon src={icon} iconColor="primary" />
            </Link>
          ))}
        </div>
      </div>
      <hr className="w-11/12 border-secondary-100 sm:mx-auto" />
      <span className="block py-2 text-center text-sm text-neutral-700 sm:text-center">
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
