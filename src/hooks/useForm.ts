import React, { useState } from 'react';

import { DEFAULT_IMAGE } from '../constants';

type Errors<T> = Partial<Record<keyof T, string>>;

export const useForm = <T>(
  defaultValues: T,
  validate: (values: T) => Errors<T>
) => {
  const [values, setValues] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'image' && e.target.value === ''
          ? DEFAULT_IMAGE
          : e.target.value,
    }));
  };

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    cb?: (values: T) => void
  ) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.values(validationErrors).filter(Boolean).length === 0)
      cb?.(values);
  };

  return { values, onChange, onSubmit, errors };
};
