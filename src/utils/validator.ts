import { DEFAULT_IMAGE } from '../constants';
import { PlayerDataType } from '../types';

export const validate = (values: PlayerDataType) => {
  const errors: PlayerDataType = {
    firstname: '',
    lastname: '',
    image: '',
    birthday: '',
  };

  if (!values.firstname) errors.firstname = 'First Name is required';

  if (!values.lastname) errors.lastname = 'Last Name is required';

  if (values.image !== DEFAULT_IMAGE && !isValidUrl(values.image))
    errors.image = 'Image link is not valid';

  if (new Date(values.birthday).getTime() > 1230681600000)
    errors.birthday = 'Player is to young';

  return errors;
};

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
