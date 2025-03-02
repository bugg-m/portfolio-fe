import { Button, Image } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';
import resume from '@host/assets/pdf/resume.pdf';

const Hero: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'ManishKumar_CV.pdf';
    document.body.appendChild(link);
    link.click();

    link.remove();
  };

  return (
    <section className="section min-h-[95vh] grid grid-cols-1 md:grid-cols-2 md:px-8 border-x border-t border-primary-500 bg-primary-100 md:rounded-rl-full rounded-rl-default">
      <div className="flex flex-col max-md:items-center md:justify-end col-span-1 order-2 md:order-1 md:p-12 space-y-4 h-full">
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
        <div className="flex-center w-full pt-10 gap-5">
          <Button className="md:w-1/3 w-2/5 hover-scale-110" rounded="full">
            Explore
          </Button>

          <Button
            variant="outline"
            className="md:w-1/3 w-2/5 hover-scale-110 bg-white"
            rounded="full"
            colorScheme="secondary"
            onClick={downloadResume}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 col-span-1 flex-center px-5">
        <Image
          src={illustrations.developer1}
          alt="Developer working on code"
          className="hover-scale-90 drop-shadow-2xl md:block object-contain hidden w-full h-auto"
        />
        <Image
          src={illustrations.developer2}
          alt="Developer working on code"
          className="hover-scale-90 md:hidden object-contain h-auto"
          size="full"
        />
      </div>
    </section>
  );
};

export default Hero;
