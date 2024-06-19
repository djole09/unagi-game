import React from 'react';
import { Input } from '../../components/Input/Input';
import { CreateCardForm } from './CreateCard.style';
import { useForm } from '../../hooks/useForm';
import { PlayerDataType } from '../../types';


/**
 * Step 3: Render a form and everything needed to be able to create a card
 */
export const CreateCard = () => {
  const { values, onChange, onSubmit } = useForm<PlayerDataType>({ firstname: '', lastname: '', image: '', birthday: '2008-12-31' });

  React.useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <CreateCardForm onSubmit={onSubmit}>
      <h1>Create Player</h1>
      <Input name="firstname" value={values.firstname} onChange={onChange} placeholder='First Name' />
      <Input name="lastname" value={values.lastname} onChange={onChange} placeholder='Last Name' />
      <Input name="birthday" value={values.birthday} onChange={onChange} placeholder='Birthday' type="date" max="2008-12-31" />
      <Input name="image" value={values.image} onChange={onChange} placeholder='Image link (Optional)' />
      <button type="submit">Submit</button>
    </CreateCardForm>
  )
}
