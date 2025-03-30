import React from 'react';
import { Button, Checkbox, Input } from '@bugg-m/bugg-ui';
import { PasswordGeneratorEnum } from '@enums/password-generator-enum';

import usePasswordGeneratorHook from '@react_mfe/hooks/use-password-generator-hooks';

const PasswordGenerator: React.FC = () => {
  const { password, size, setSize, addCharacter, setAddCharacter, addNumber, setAddNumber } =
    usePasswordGeneratorHook();

  return (
    <main className="w-full h-screen mx-auto place-items-center place-content-center">
      <div className="md:px-20 py-10">
        <span className="header">Password Generator</span>
        <p className="paragraph-sm animate-paragraph bg-primary-50 text-neutral-700 mb-6 border-x-4 border-primary-300 p-4">
          A secure and interactive password generator crafted in React. Customize criteria for
          strength and length, and generate unique, robust passwords instantly—all within a
          user-friendly interface.
        </p>
      </div>
      <section className="lg:w-1/2 md:w-3/5 sm:w-4/5 w-full h-auto bg-secondary-200 border border-secondary-300 rounded-md p-5">
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
      </section>
    </main>
  );
};

export default PasswordGenerator;
