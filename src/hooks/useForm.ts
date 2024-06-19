import { useState } from 'react';

export const useForm = <T>(defaultValues: T) => {
  const [values, setValues] = useState<T>(defaultValues);

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return { values, onChange, onSubmit };
};
