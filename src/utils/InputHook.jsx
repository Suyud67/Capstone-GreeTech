import { useState } from 'react';

// make custome hook for handling input form
export default function useInputHandle(value = '') {
  const [input, setInput] = useState(value);

  const inputHandle = (event) => {
    setInput(event.target.value);
  };

  return [input, inputHandle];
}
