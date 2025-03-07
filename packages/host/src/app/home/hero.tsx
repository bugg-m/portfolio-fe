import { Button, Image } from '@bugg-m/bugg-ui';
import illustrations from '@host/constants/illustrations';
import { useGetDataHook } from '@host/api/hooks/use-get-data-hook';
import { PortfolioRoutes } from '@host/api/routes/portfolio-api-routes';
import { useWindowDimensions } from '@host/hooks/use-window-dimensions';
import { NotifyError, NotifySuccess } from '@host/components/notify/notify';
import { ApiError } from '@host/api/utils/core-api-classes';

export interface CVDocument {
  public_id: string;
  url: string;

  originalName: string;
}

const Hero: React.FC = () => {
  const { isLoading, getData } = useGetDataHook<CVDocument>();
  const { width } = useWindowDimensions();
  const downloadResume = async () => {
    try {
      const result = await getData({
        url: PortfolioRoutes.DOWNLOAD_CV,
      });

      const CV = await fetch(result.data.url);
      const blob = await CV.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ManishKumar_CV.pdf';
      document.body.appendChild(link);
      link.click();

      // Clean up
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);

      NotifySuccess(result.message);
    } catch (err) {
      const apiError = new ApiError({
        statusCode: 500,
        message:
          err instanceof Error ? err.message : 'An unexpected error occurred',
        status: false,
      });
      NotifyError(apiError.message);
    }
  };

  return (
    <section className="section min-h-[95vh] grid grid-cols-1 md:grid-cols-2 md:px-8 border-x border-t border-primary-500 bg-primary-100 md:rounded-rl-full rounded-rl-default">
      <div className="flex flex-col max-md:items-center md:justify-end col-span-1 order-2 md:order-1 lg:p-10 md:p-5 space-y-4 h-full">
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
        <div className="flex-center w-full pt-10 gap-10 md:gap-5">
          <Button
            disabled
            title="This feature is Under Development"
            className="md:w-1/3 w-2/5 hover-scale-110"
            rounded="full"
          >
            Explore
          </Button>

          <Button
            variant="outline"
            className="md:w-1/3 h-auto w-2/5 hover-scale-110 bg-white"
            rounded="full"
            colorScheme="secondary"
            isLoading={isLoading}
            loaderColor="primary"
            onClick={downloadResume}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 col-span-1 flex-center px-5">
        <Image
          src={
            width > 640 ? illustrations.developer1 : illustrations.developer2
          }
          alt="Developer working on code"
          className="hover-scale-90 drop-shadow-2xl md:w-full w-3/5 h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
