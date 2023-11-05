import * as yup from 'yup';

import { SearchForPropertyFormModel } from './SearchForPropertyForm.model';

export const SearchForPropertyFormSchema = yup
  .object<SearchForPropertyFormModel>()
  .shape({
    adults: yup.number().required(),
    children: yup.number().required(),
    dateRange: yup.array().length(2).of(yup.date().required()).required(),
    place: yup.string().required(),
    rooms: yup.number().required(),
  });

export const searchForPropertyFormDefaultValues: SearchForPropertyFormModel = {
  adults: 1,
  children: 0,
  dateRange: [new Date()],
  place: '',
  rooms: 1,
};
