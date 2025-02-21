import { Image } from '@bugg-m/bugg-ui';
import Hero from './hero';
import logos from '@host/constants/logos';

const Home = () => {
  const skillsData = [
    {
      icon: logos.react,
      title: 'React Js',
    },
    {
      icon: logos.vue,
      title: 'Vue Js',
    },

    {
      icon: logos.nodeJs,
      title: 'Node Js',
    },
    {
      icon: logos.express,
      title: 'Express Js',
    },
    {
      icon: logos.mongodb,
      title: 'MongoDb',
    },
    {
      icon: logos.storybook,
      title: 'Storybook',
    },
  ];
  return (
    <div className="bg-secondary-200 md:px-20 min-h-screen">
      <div className="border-x-4 bg-secondary-50 border-white">
        <Hero />
        <div className="w-full space-y-3 py-10 text-center shadow-md border-b border-secondary-100 rounded-b-default">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 tracking-tight leading-snug">
            Tech Stacks
          </h2>
          <div className="flex items-center justify-around">
            {skillsData.map(({ icon, title }) => (
              <Image key={title} src={icon} alt={title} className="size-16" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
