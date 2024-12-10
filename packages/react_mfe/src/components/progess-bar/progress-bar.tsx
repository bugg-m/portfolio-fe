import { ProgressBarEnum } from '@react_mfe/enums/progress-bar-enum';
import { IProgressBarProps } from '@react_mfe/types/progress-bar-types';
import React, { useEffect, useRef, useState } from 'react';

const ProgressBar: React.FC<IProgressBarProps> = ({
  value = ProgressBarEnum.MIN_RANGE,
}) => {
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
    <div className="w-full h-40 bg-gray-200 flex flex-col justify-center items-center gap-5">
      <span className="text-3xl text-center block text-gray-700">
        Progress Bar
      </span>
      <div className="w-5/6 h-7 mx-auto border border-gray-600 rounded-full relative overflow-hidden">
        <span
          className={`text-center w-full absolute top-0.5 z-50 ${
            progressValue >= ProgressBarEnum.MID_POINT
              ? 'text-gray-100'
              : 'text-gray-800'
          }`}
        >
          {progressValue}%
        </span>
        <div
          style={{
            transform: `scaleX(${progressValue / ProgressBarEnum.MAX_RANGE})`,
          }}
          className={`h-full w-full bg-brand origin-left z-0`}
        />
      </div>
      <span className="text-sm font-semibold">
        {progressValue >= ProgressBarEnum.MAX_RANGE
          ? 'Completed ✌🏻'
          : 'loading...'}
      </span>
    </div>
  );
};

export default ProgressBar;
