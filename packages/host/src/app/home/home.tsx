import { Image } from '@bugg-m/bugg-ui';
import Hero from './hero';
import logos from '@host/constants/logos';
import About from './about';
import Experience from './experience';
import Projects from './projects';

const Home: React.FC = () => {
  const skillsData = [
    { icon: logos.react, title: 'React Js' },
    { icon: logos.vue, title: 'Vue Js' },
    { icon: logos.nodeJs, title: 'Node Js' },
    { icon: logos.express, title: 'Express Js' },
  ];

  return (
    <div className="bg-secondary-200 md:px-20 min-h-screen">
      <div className="border-x-4 bg-secondary-100 border-white">
        <Hero />
        <div className="section animate-appearTopLeft bg-primary-100 border-x border-primary-500 md:rounded-lr-full rounded-lr-default">
          <h2 className="header">Tech Stacks</h2>
          <div className="flex flex-wrap items-center justify-around gap-1 md:gap-4">
            {skillsData.map(({ icon, title }) => (
              <div className="flex-center flex-col hover-scale-110">
                <Image
                  key={title}
                  src={icon}
                  alt={title}
                  className="size-8 md:size-16"
                />
                <span className="text-xs text-neutral-400">{title}</span>
              </div>
            ))}
          </div>
        </div>
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
