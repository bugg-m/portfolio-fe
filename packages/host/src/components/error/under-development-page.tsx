import { Icon } from '@bugg-m/bugg-ui';
import icons from '@host/constants/icons';

const PageUnderDevelopment: React.FC = () => {
  return (
    <div className="flex-center z-10 flex-col gap-10 shadow-lg shadow-neutral-500 bg-blue-500 rounded-md w-2/5 h-2/3">
      <Icon src={icons.serverCrash} size="xl" />
      <div className="flex-center flex-col gap-2">
        <span className="text-3xl font-semibold">Oh Snap!</span>
        <span className="text-xl font-light">
          Page Underdevelopment!!{' '}
          <span role="img" aria-label="sad-emoji">
            🙁
          </span>
        </span>
      </div>
    </div>
  );
};

export default PageUnderDevelopment;
