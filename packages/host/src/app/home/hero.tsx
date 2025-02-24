import images from '@host/constants/images';
import { Button, Image } from '@bugg-m/bugg-ui';

const Hero: React.FC = () => {
  return (
    <section className="section min-h-[80vh] grid grid-cols-1 md:grid-cols-2 md:px-8 border-x border-t border-primary-500 bg-primary-100 md:rounded-rl-full rounded-rl-default">
      <div className="flex flex-col max-md:items-center justify-center col-span-1 order-2 md:order-1 px-8 space-y-4">
        <div className="hover-scale-110">
          <span
            role="img"
            aria-label="emoji"
            className="text-sm font-medium text-neutral-500 tracking-tight"
          >
            Hello 👋🏻, I'm
          </span>
          <span className="mt-1 ml-2 text-xl md:text-2xl font-medium text-neutral-700">
            Manish Kumar,
          </span>
        </div>
        <div className="space-y-3 w-full hover-scale-110">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-700 tracking-tight leading-snug">
            Full-Stack Developer
          </h1>
          <p className="text-base md:text-lg font-medium text-neutral-700 leading-relaxed">
            with 1 year of experience.
          </p>
          <p className="text-sm font-medium text-neutral-500 tracking-widest">
            Bridging front-end finesse with back-end power to create dynamic and
            scalable web experiences.
          </p>
        </div>
        <div className="flex-content-start pt-10 gap-5">
          <Button className="md:w-1/3 w-1/2 hover-scale-110" rounded="full">
            Explore
          </Button>
          <Button
            variant="outline"
            className="md:w-1/3 w-1/2 hover-scale-110"
            rounded="full"
            colorScheme="secondary"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 col-span-1 flex-center p-5">
        <Image
          src={images.developer}
          alt="Developer working on code"
          className="object-contain hover-scale-90 w-3/5 md:w-3/4 h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
