import {
  CHARACTERS,
  NUMBERS,
  STRINGS,
} from '@react_mfe/constants/password-generator-constants';
import { useCallback, useEffect, useState } from 'react';

const usePasswordGeneratorHook = () => {
  const [password, setPassword] = useState<string>('');
  const [size, setSize] = useState<string>('0');
  const [addNumber, setAddNumber] = useState<boolean>(false);
  const [addCharacter, setAddCharacter] = useState<boolean>(false);

  const handleGeneratedPassword = useCallback(() => {
    let newPassword = '';
    let str = STRINGS;

    if (addNumber) {
      str += NUMBERS;
    }
    if (addCharacter) {
      str += CHARACTERS;
    }
    for (let i = 0; i < Number(size); i++) {
      const index = Math.floor(Math.random() * str.length);
      newPassword += str[index];
    }

    setPassword(newPassword);
  }, [addNumber, addCharacter, size]);

  useEffect(() => {
    handleGeneratedPassword();
  }, [handleGeneratedPassword]);

  return {
    password,
    size,
    addCharacter,
    addNumber,
    setSize,
    setPassword,
    setAddCharacter,
    setAddNumber,
  };
};

export default usePasswordGeneratorHook;
