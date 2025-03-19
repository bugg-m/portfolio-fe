import { AppRoutesEnum } from '@host/enums/app-routes-enum';
import { brain, browser, combine, settings, sharing } from './icons';
import { nextJs, react, vue } from './logos';

const microservicesData = [
  {
    image: react,
    title: 'React Micro-Frontend',
    description:
      'Our React-based micro-frontend delivers high-performance UI components with efficient state management. Perfect for dynamic, data-intensive applications with its virtual DOM and reusable component architecture.',
    features: [
      'Component-Based Architecture',
      'Virtual DOM',
      'Unidirectional Data Flow',
      'JSX Support',
    ],
    techStack: 'React 18, Redux, React Router, Vite',
    link: AppRoutesEnum.REACT_MFE,
  },
  {
    image: nextJs,
    title: 'Next.js Micro-Frontend',
    description:
      'Our Next.js solution combines server-side rendering with static site generation for optimal performance and SEO. Ideal for content-heavy applications requiring fast page loads and excellent user experience.',
    features: [
      'Server-Side Rendering',
      'Static Site Generation',
      'API Routes',
      'Image Optimization',
    ],
    techStack: 'Next.js 14, TypeScript, TailwindCSS, SWR',
    link: AppRoutesEnum.NEXT_MFE,
  },
  {
    image: vue,
    title: 'Vue Micro-Frontend',
    description:
      'Our Vue.js micro-frontend offers an approachable yet powerful solution with reactive data binding and seamless integration capabilities. Perfect for teams seeking progressive adoption and maintainable codebases.',
    features: [
      'Two-way Data Binding',
      'Computed Properties',
      'Single-File Components',
      'Composition API',
    ],
    techStack: 'Vue 3, Pinia, Vue Router, Vite',
    link: AppRoutesEnum.VUE_MFE,
  },
];

const myExperiencesData = {
  company: 'Fibonacci Innovations',
  role: 'Associate Software Engineer',
  duration: 'July 2023 - Dec 2024',
  location: 'On-Site',
  description:
    'Developed responsive web interfaces using React and Vue.js frameworks, implemented passkey authentication and role-based access controls, created reusable UI components including interactive charts, built scalable design systems with dark-light theme support, engineered front-end solutions for microservice-based architectures, and integrated secure payment workflows to enhance user experience.',
  skills: [
    'React',
    'Vue.js',
    'UI Components',
    'Design Systems',
    'Microservices',
    'Authentication',
    'Payment Integration',
  ],
};

const monorepoBenefitsData = [
  {
    icon: brain,
    title: 'Intelligent Caching',
    description: "Only rebuilds what's changed, cutting build times by up to 90%",
  },
  {
    icon: browser,
    title: 'Affected Commands',
    description: 'Automatically finds and tests impacted apps and libraries',
  },
  {
    icon: sharing,
    title: 'Code Sharing',
    description: 'Reuses components and utilities across all micro-frontends',
  },
];

const nxCardItemsData = [
  {
    icon: combine,
    title: 'Unified Architecture',
    description:
      'The NX monorepo creates a centralized development ecosystem with shared libraries, consistent tooling, and standardized workflows across all micro-frontends.',
  },
  {
    icon: settings,
    title: 'Framework Flexibility',
    description:
      ' Each micro-frontend makes the most of its framework—React for UI components, Next.js for SSR/SSG, and Vue for progressive enhancement—all within a single application.',
  },
];

export { microservicesData, myExperiencesData, monorepoBenefitsData, nxCardItemsData };
