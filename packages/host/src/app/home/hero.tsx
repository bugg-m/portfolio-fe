import { Button, Image } from '@bugg-m/bugg-ui';
import { developer1, developer2 } from '@host/constants/illustrations';
import { useGetDataHook } from '@api/hooks/use-get-data-hook';
import { PortfolioApiRoutes } from '@api/routes/portfolio-api-routes';
import { useWindowDimensions } from '@host/hooks/use-window-dimensions';
import { NotifyError, NotifySuccess } from '@host/components/notify/notify';
import { ApiError } from '@api/utils/core-api-classes';

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
        url: PortfolioApiRoutes.DOWNLOAD_CV,
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
    <section className="section min-h-screen grid grid-cols-1 md:grid-cols-2 border-x border-t border-primary-500 bg-primary-100 rounded-rl-4xl sm:rounded-rl-5xl md:rounded-rl-7xl lg:rounded-rl-full">
      <div className="flex flex-col items-center md:justify-end col-span-1 order-2 md:order-1 p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 h-full">
        <div className="hover-scale-110 text-center">
          <span
            role="img"
            aria-label="emoji"
            className="text-sm font-medium text-neutral-500 tracking-tight"
          >
            Hello 👋🏻, I'm
          </span>
          <span className="mt-1 ml-2 text-xl sm:text-2xl font-medium text-neutral-700">
            Manish Kumar,
          </span>
        </div>
        <div className="space-y-3 text-center w-full hover-scale-110">
          <h1 className="text-responsive-title text-neutral-700 tracking-tight leading-snug">
            Full-Stack Developer
          </h1>
          <p className="text-sm px-10 sm:text-base font-medium text-neutral-500 tracking-wider sm:tracking-widest">
            Bridging front-end finesse with back-end power to create dynamic and
            scalable web experiences.
          </p>
        </div>
        <div className="flex-center w-full pt-6 sm:pt-8 md:pt-10 gap-4 sm:gap-6 md:gap-8">
          <Button
            disabled
            title="This feature is Under Development"
            className="w-2/5 sm:w-1/3 hover-scale-110"
            rounded="full"
          >
            Explore
          </Button>

          <Button
            variant="outline"
            className="w-2/5 sm:w-1/3 h-auto hover-scale-110 bg-white"
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
      <div className="order-1 md:order-2 col-span-1 flex-center p-4 sm:p-6">
        <Image
          src={width > 760 ? developer1 : developer2}
          alt="Developer working on code"
          className="hover-scale-90 image-responsive object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
