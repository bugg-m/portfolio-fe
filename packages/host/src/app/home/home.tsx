import { Image } from '@bugg-m/bugg-ui';
import Hero from './hero';
import logos from '@host/constants/logos';
import About from './about';
import Experience from './experience';

const Home: React.FC = () => {
  const skillsData = [
    { icon: logos.react, title: 'React Js' },
    { icon: logos.vue, title: 'Vue Js' },
    { icon: logos.nodeJs, title: 'Node Js' },
    { icon: logos.express, title: 'Express Js' },
    { icon: logos.mongodb, title: 'MongoDb' },
  ];

  return (
    <div className="bg-secondary-200 md:px-20 min-h-screen">
      <div className="border-x-4 bg-secondary-100 border-white">
        <Hero />
        <div className="w-full space-y-3 py-10 text-center shadow-md bg-primary-50 border-y border-primary-100 md:rounded-lr-full rounded-lr-default">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-700 tracking-tight leading-snug">
            Tech Stacks
          </h2>
          <div className="flex flex-wrap items-center justify-around gap-1 md:gap-4">
            {skillsData.map(({ icon, title }) => (
              <div className="flex-center flex-col">
                <Image
                  key={title}
                  src={icon}
                  alt={title}
                  className="size-8 hover:scale-105 md:size-16 transition-transform"
                />
                <span className="text-xs text-secondary-400">{title}</span>
              </div>
            ))}
          </div>
        </div>
        <About />
        {/* <Experience /> */}
      </div>
    </div>
  );
};

export default Home;
