import { Link } from 'react-router-dom';
import LogoIcon from '../logo-component/logoIcon';
import { github, linkedin, mail, message } from '@host/constants/icons';
import { Icon } from '@bugg-m/bugg-ui';

function Footer() {
  const links = [
    {
      to: process.env.NX_PUBLIC_GITHUB_URL ?? '',
      icon: github,
      alt: 'github icon',
    },
    {
      to: process.env.NX_PUBLIC_LINKEDIN_URL ?? '',
      icon: linkedin,
      alt: 'linkedin icon',
    },
    {
      to: process.env.NX_PUBLIC_GMAIL_URL ?? '',
      icon: mail,
      alt: 'mail icon',
    },
    {
      to: process.env.NX_PUBLIC_WHATSAPP ?? '',
      icon: message,
      alt: 'message icon',
    },
  ];

  return (
    <div className="w-full">
      <div className="flex-between-center px-4 md:px-10 py-1 md:py-3 border-t border-secondary-300">
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
