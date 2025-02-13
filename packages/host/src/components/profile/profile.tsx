import React from 'react';

interface IProfileProps {
  image: string;
  title: string;
}

const Profile: React.FC<IProfileProps> = ({ image, title }) => {
  return (
    <div className="flex-center p-5 relative">
      <img
        src={image}
        alt="yoga"
        className="rounded-full object-cover size-52 border-4 border-white"
      />
      <span
        role="img"
        aria-label="emoji"
        className="block text-xs px-3 py-2 rounded-full bg-secondary-50 border border-secondary-300 text-neutral-700 font-medium font-serif absolute -right-14 top-20 -rotate-12"
      >
        {title}
      </span>
    </div>
  );
};

export default Profile;
