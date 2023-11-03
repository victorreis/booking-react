import { AvailableProperties } from '../Pages/AvailableProperties';
import { Route } from './Routes.types';

export const routes: Route[] = [
  {
    key: 'AvailableProperties',
    name: 'AvailableProperties',
    path: `/available-properties`,
    element: AvailableProperties,
  },
  {
    key: 'MyBookings',
    name: 'MyBookings',
    path: `/my-bookings`,
    element: AvailableProperties,
  },
];
