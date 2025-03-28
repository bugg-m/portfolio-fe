import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@bugg-m/bugg-ui';
import { ProgressBarEnum } from '@enums/progress-bar-enum';

import { IProgressBarProps } from '@react_mfe/types/progress-bar-types';

const ProgressBar: React.FC<IProgressBarProps> = ({ value = ProgressBarEnum.MIN_RANGE }) => {
  const initialValue = Math.min(
    ProgressBarEnum.MAX_RANGE,
    Math.max(value, ProgressBarEnum.MIN_RANGE)
  );

  const [progressValue, setProgressValue] = useState<number>(initialValue);
  const progressBarRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    progressBarRef.current = setInterval(() => {
      const handleProgressBarValue = (prev: number) => {
        if (prev >= ProgressBarEnum.MAX_RANGE && progressBarRef.current) {
          clearInterval(progressBarRef.current);
          return prev;
        } else {
          return prev + 1;
        }
      };

      setProgressValue(handleProgressBarValue);
    }, 200);
  }, [value]);

  return (
    <div className="w-full h-64 rounded-md bg-secondary-200 flex-center flex-col gap-5 py-10">
      <span className="text-3xl text-center block text-neutral-700">Progress Bar</span>
      <div className="w-5/6 h-7 flex-center mx-auto border border-secondary-600 rounded-full relative overflow-hidden">
        <span
          className={`block text-center w-full absolute z-10 ${
            progressValue >= ProgressBarEnum.MID_POINT ? 'text-neutral-100' : 'text-neutral-800'
          }`}
        >
          {progressValue}%
        </span>
        <div
          style={{
            transform: `scaleX(${progressValue / ProgressBarEnum.MAX_RANGE})`,
          }}
          className={`h-full w-full bg-primary-500 origin-left z-0`}
        />
      </div>
      <span className="text-sm font-semibold">
        {progressValue >= ProgressBarEnum.MAX_RANGE ? 'Completed ✌🏻' : 'loading...'}
      </span>
      <Button onClick={() => setProgressValue(ProgressBarEnum.MIN_RANGE)}>Reset</Button>
    </div>
  );
};

export default ProgressBar;
