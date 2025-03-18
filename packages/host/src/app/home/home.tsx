import { Image } from '@bugg-m/bugg-ui';

import { WelcomeModal } from '@host/components/modals/welcom-modal';
import { express, nodeJs, react, vue } from '@host/constants/logos';

import About from './about';
import Contact from './contact';
import Experience from './experience';
import Hero from './hero';
import Projects from './projects';

const Home: React.FC = () => {
  const skillsData = [
    { icon: react, title: 'React Js' },
    { icon: vue, title: 'Vue Js' },
    { icon: nodeJs, title: 'Node Js' },
    { icon: express, title: 'Express Js' },
  ];

  return (
    <div className="bg-secondary-100 responsive-container min-h-screen">
      <Hero />
      <div className="section animate-appear-tl bg-primary-100 border-x border-primary-500 rounded-lr-4xl sm:rounded-lr-full">
        <h2 className="header">Tech Stacks</h2>
        <div className="flex flex-wrap items-center justify-around gap-responsive">
          {skillsData.map(({ icon, title }) => (
            <div
              key={title}
              className="flex-center flex-col hover-scale-110">
              <Image
                src={icon}
                alt={title}
                className="icon-responsive"
              />
              <span className="text-xs sm:text-sm text-neutral-400">{title}</span>
            </div>
          ))}
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <WelcomeModal />
    </div>
  );
};

export default Home;
