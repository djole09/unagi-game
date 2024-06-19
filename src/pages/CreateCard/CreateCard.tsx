import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '../../components/Input/Input';
import { CreateCardForm } from './CreateCard.style';
import { useForm } from '../../hooks/useForm';
import { PlayerDataType } from '../../types';
import { SubmitButton } from '../../components/Input/SubmitButton';
import { DEFAULT_IMAGE, PAGES } from '../../constants';
import { validate } from '../../utils/validator';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';

export const CreateCard = () => {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { values, onChange, onSubmit, errors } = useForm<PlayerDataType>(
    {
      firstname: '',
      lastname: '',
      image: DEFAULT_IMAGE,
      birthday: '2008-12-31',
    },
    validate
  );
  const history = useHistory();

  const createPlayer = () => {
    fetch('http://localhost:8001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * (9999999 - 1200000 + 1)) + 1200000,
        player: values,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setTimeout(() => history.push(PAGES.COLLECTION), 100);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  };

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <CreateCardForm onSubmit={(e) => onSubmit(e, createPlayer)}>
      <h1>Create Player</h1>
      <Input
        name="firstname"
        value={values.firstname}
        onChange={onChange}
        placeholder="First Name"
        error={errors.firstname}
      />
      <Input
        name="lastname"
        value={values.lastname}
        onChange={onChange}
        placeholder="Last Name"
        error={errors.lastname}
      />
      <Input
        name="birthday"
        value={values.birthday}
        onChange={onChange}
        placeholder="Birthday"
        type="date"
        max="2008-12-31"
        error={errors.birthday}
        required
      />
      <Input
        name="image"
        value={values.image === DEFAULT_IMAGE ? '' : values.image}
        onChange={onChange}
        placeholder="Image link (Optional)"
        error={errors.image}
      />
      <SubmitButton />
    </CreateCardForm>
  );
};
