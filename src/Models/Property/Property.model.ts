export interface PropertyModel {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  mapLink: string;

  // I will simplify this interface by putting all these data into it instead of creating a bunch of types and arrays indicating relationships
  defaultPrice: string;
  reviews: number;
  score: string;
}
