import React from 'react';
import { Button, Checkbox, Input } from '@bugg-m/bugg-ui';
import { PasswordGeneratorEnum } from '@enums/password-generator-enum';

import usePasswordGeneratorHook from '@react_mfe/hooks/use-password-generator-hooks';

const PasswordGenerator: React.FC = () => {
  const { password, size, setSize, addCharacter, setAddCharacter, addNumber, setAddNumber } =
    usePasswordGeneratorHook();

  return (
    <div className="w-full h-screen mx-auto place-items-center place-content-center">
      <div className="w-1/2 h-2/5 bg-secondary-200 border border-secondary-300 rounded-md p-5">
        <span className="text-lg text-neutral-700 font-semibold text-center block mb-5">
          Password Generator
        </span>
        <div className="flex-center flex-col gap-5">
          <div className="w-full flex-center gap-5">
            <Input
              type="text"
              name="password"
              value={password}
              readOnly
              variant="filled"
              colorScheme="secondary"
              placeholder=""
            />
            <Button
              onClick={() => navigator.clipboard.writeText(password)}
              colorScheme="secondary"
            >
              Copy
            </Button>
          </div>
          <div className="w-full flex-center gap-5">
            <Checkbox
              onChange={() => setAddNumber(prev => !prev)}
              checked={addNumber}
              label="Add Number"
            />
            <Checkbox
              label="Add Characters"
              isChecked={addCharacter}
              handleCheck={() => setAddCharacter(prev => !prev)}
            />
          </div>

          <div className="w-full flex-center flex-col gap-5">
            <label htmlFor="range">{size}</label>
            <input
              className="w-full"
              type="range"
              name="range"
              min={PasswordGeneratorEnum.MIN_SIZE}
              max={PasswordGeneratorEnum.MAX_SIZE}
              defaultValue={PasswordGeneratorEnum.MIN_SIZE}
              onChange={e => setSize(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
