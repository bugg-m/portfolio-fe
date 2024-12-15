import usePasswordGeneratorHook from '@react_mfe/hooks/use-password-generator-hooks';
import React from 'react';
import CharacterButtonItem from './character-button-item';
import { PasswordGeneratorEnum } from '@react_mfe/enums/password-generator-enum';

const PasswordGenerator: React.FC = () => {
  const {
    password,
    size,
    setSize,
    addCharacter,
    setAddCharacter,
    addNumber,
    setAddNumber,
  } = usePasswordGeneratorHook();

  return (
    <div className="w-full h-screen mx-auto place-items-center">
      <div className="w-1/2 h-2/5 bg-gray-200 border border-gray-300 rounded-md p-5">
        <span className="text-lg text-gray-700 font-semibold text-center block mb-5">
          Password Generator
        </span>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-full flex items-center justify-center gap-5">
            <input
              type="text"
              name="password"
              value={password}
              readOnly
              className="w-3/4 focus:outline-none border border-gray-300 rounded-md px-2 py-1"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="px-2 py-1 bg-gray-600 border text-gray-50 border-gray-700 hover:bg-gray-400 hover:text-gray-800 place-items-center rounded-md"
            >
              Copy
            </button>
          </div>
          <div className="w-full flex items-center justify-center gap-5">
            <CharacterButtonItem
              label="Add Number"
              isChecked={addNumber}
              handleCheck={() => setAddNumber((prev) => !prev)}
            />
            <CharacterButtonItem
              label="Add Characters"
              isChecked={addCharacter}
              handleCheck={() => setAddCharacter((prev) => !prev)}
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-5">
            <label htmlFor="range">{size}</label>
            <input
              className="w-full"
              type="range"
              name="range"
              min={PasswordGeneratorEnum.MIN_SIZE}
              max={PasswordGeneratorEnum.MAX_SIZE}
              defaultValue={PasswordGeneratorEnum.MIN_SIZE}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
