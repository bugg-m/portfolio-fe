import images from '@host/constants/images';
import { Button, Image } from '@bugg-m/bugg-ui';

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] grid md:grid-cols-2 px-8 py-10 shadow-md border-b border-secondary-100 bg-secondary-100 rounded-br-full">
      <div className="flex flex-col justify-center col-span-1 px-8 space-y-4">
        <div>
          <span className="text-sm font-medium text-neutral-500 tracking-tight">
            Hello, I'm
          </span>
          <span className="mt-1 ml-3 text-xl md:text-2xl font-medium text-neutral-700">
            Manish Kumar,
          </span>
        </div>
        <div className="space-y-3 w-full">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-700 tracking-tight leading-snug">
              Full-Stack Developer
            </h1>
            <p className="text-base md:text-lg font-medium text-neutral-700 leading-relaxed">
              with 1 year of experience.
            </p>
          </div>
          <p className="text-sm leading-4 font-medium text-neutral-500 tracking-widest">
            Bridging front-end finesse with back-end power to create dynamic and
            scalable web experiences.
          </p>
        </div>
        <div className="flex-content-start pt-10 gap-5">
          <Button className="w-2/5">Explore</Button>
          <Button className="w-3/5" variant={'outline'}>
            Contact Me
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex-center p-5">
        <Image
          src={images.developer}
          alt="Developer"
          className="object-cover size-3/4"
        />
      </div>
    </section>
  );
};

export default Hero;
